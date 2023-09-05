export default function getCookieValue(name: string) {
	const matches = document.cookie.match(
		// eslint-disable-next-line no-useless-escape
		new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`),
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
