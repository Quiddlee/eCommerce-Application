export default function ContactsIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      className={`navMenuIcon ${isActive ? 'fill-accent' : 'fill-inactive-icons-grey'}  md:inline-block`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.1269 14.4978C15.5936 16.0311 15.5936 17.5644 14.0603 17.5644C12.5269 17.5644 10.9936 16.0311 9.46025 14.4978C7.92692 12.9644 6.39359 11.4311 6.39359 9.89775C6.39359 8.36442 7.92692 8.36442 9.46025 6.83109C10.9936 5.29775 6.39359 0.697754 4.86025 0.697754C3.32692 0.697754 0.260254 5.29775 0.260254 5.29775C0.260254 8.36442 3.41125 14.5821 6.39359 17.5644C9.37592 20.5468 15.5936 23.6978 18.6603 23.6978C18.6603 23.6978 23.2603 20.6311 23.2603 19.0978C23.2603 17.5644 18.6603 12.9644 17.1269 14.4978Z" />
    </svg>
  );
}