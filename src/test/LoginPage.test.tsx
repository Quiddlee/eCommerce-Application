import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';

import { TEST_ACCOUNT_EMAIL, TEST_ACCOUNT_PASSWORD } from './constants';
import RenderTestApp from './helpers/RenderTestApp.tsx';
import { App } from '../app/App.tsx';
import { userSlice } from '../entities/user';
import LoginPage from '../pages/LoginPage/LoginPage.tsx';
import * as helpers from '../shared/lib/helpers';

const loggedInSpy = vi.spyOn(userSlice.actions, 'loggedIn');
const setCookieSpy = vi.spyOn(helpers, 'setCookie');
const updateAccessTokenSpy = vi.spyOn(userSlice.actions, 'updateAccessToken');

describe('LoginPage', () => {
  afterEach(() => {
    vi.clearAllTimers();
    vi.clearAllMocks();
  });

  it('Renders the form', () => {
    RenderTestApp(<LoginPage />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  it('Hides the password', () => {
    RenderTestApp(<LoginPage />);

    expect(screen.getByRole('checkbox')).not.toBeChecked();

    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: { value: '123' },
    });

    fireEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByPlaceholderText('Password')).toHaveValue('123');
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'text');

    fireEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByRole('checkbox')).not.toBeChecked();
    expect(screen.getByPlaceholderText('Password')).toHaveValue('123');
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password');
  });

  it('Show error on wrong Email input', async () => {
    RenderTestApp(<LoginPage />);

    await userEvent.click(screen.getByPlaceholderText('Email'));
    await userEvent.tab();

    expect(screen.getByPlaceholderText('Email')).toHaveClass('border-shop-cart-red');
    expect(screen.getByText('Email is required')).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText('Email'), 'test');
    await userEvent.tab();

    expect(screen.getByPlaceholderText('Email')).toHaveClass('border-shop-cart-red');
    expect(screen.getByText('Email must be email@example.com')).toBeInTheDocument();
  });

  it('Show error on wrong Password input', async () => {
    RenderTestApp(<LoginPage />);

    await userEvent.click(screen.getByPlaceholderText('Password'));
    await userEvent.tab();

    expect(screen.getByPlaceholderText('Password')).toHaveClass('border-shop-cart-red');
    expect(screen.getByText('password is required', { exact: false })).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText('Password'), 'test');
    await userEvent.tab();

    expect(screen.getByPlaceholderText('Password')).toHaveClass('border-shop-cart-red');
    expect(screen.getByText('Minimum 8 symbols required')).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText('Password'), 'testtesttest');
    await userEvent.tab();

    expect(screen.getByPlaceholderText('Password')).toHaveClass('border-shop-cart-red');
    expect(screen.getByText('Password must have A, a, 1 and special symbols')).toBeInTheDocument();
  });

  it('Show errors on wrong submit', async () => {
    RenderTestApp(<App />, '/login');

    await waitFor(() => {
      expect(updateAccessTokenSpy).toBeCalled();
    });

    await userEvent.type(screen.getByPlaceholderText('Email'), 'testemail@gmail.com');
    await userEvent.type(screen.getByPlaceholderText('Password'), 'dasdasD12#');

    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));

    const error = await screen.findByText('Oh snap!', { exact: false });
    const continueBtn = await screen.findByText('Continue', { exact: false });

    expect(error).toBeInTheDocument();
    expect(continueBtn).toBeInTheDocument();

    await userEvent.click(continueBtn);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('Success submit', async () => {
    RenderTestApp(<App />, '/login');

    await waitFor(() => {
      expect(updateAccessTokenSpy).toBeCalled();
    });

    await userEvent.type(screen.getByPlaceholderText('Email'), TEST_ACCOUNT_EMAIL);
    await userEvent.type(screen.getByPlaceholderText('Password'), TEST_ACCOUNT_PASSWORD);

    await userEvent.click(screen.getByRole('button', { name: 'Log in' }));

    expect(screen.getByPlaceholderText('Email')).not.toHaveClass('border-shop-cart-red');
    expect(screen.getByPlaceholderText('Password')).not.toHaveClass('border-shop-cart-red');
    expect(screen.queryByText('Password required')).toBeNull();
    expect(screen.queryByText('Email is required')).toBeNull();

    await waitFor(() => {
      expect(loggedInSpy).toBeCalledTimes(1);
      expect(setCookieSpy).toBeCalledTimes(1);
    });

    expect(screen.getByText('log out', { exact: false })).toBeInTheDocument();
    expect(screen.queryByText('Log in')).toBeNull();
  });

  it('Route to the main page and not to send new request on the second login', async () => {
    RenderTestApp(<App />, '/login', { userReducer: { isLogged: true, accessToken: '', userId: '' } });

    expect(screen.getByText('log out', { exact: false })).toBeInTheDocument();
    expect(screen.queryByText('log in', { exact: false })).toBeNull();

    expect(loggedInSpy).toBeCalledTimes(0);
    expect(setCookieSpy).toBeCalledTimes(0);

    expect(window.location.pathname).toBe('/');
  });

  it('Route between log in & sign up', async () => {
    RenderTestApp(<App />, '/login');

    const signUpBtn = screen.getByRole('link', { name: 'Sign up' });
    expect(signUpBtn).toBeInTheDocument();
    await userEvent.click(signUpBtn);

    const logIn = screen.getByRole('link', { name: 'Log in' });
    expect(logIn).toBeInTheDocument();
    await userEvent.click(logIn);

    const signUpBtn2 = screen.getByRole('link', { name: 'Sign up' });
    expect(signUpBtn2).toBeInTheDocument();
    await userEvent.click(signUpBtn2);

    const logIn2 = screen.getByRole('link', { name: 'Log in' });
    expect(logIn2).toBeInTheDocument();
  });
});
