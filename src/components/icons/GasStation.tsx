export default function GasStationIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 22H15.5C16.6 22 17.5 21.1 17.5 20V7C17.5 5.9 16.6 5 15.5 5H3.5C2.4 5 1.5 5.9 1.5 7V20C1.5 21.1 2.4 22 3.5 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 12.5L20 10.5C20.3 10.3 20.7 10.3 21 10.5C21.6 11 22 11.7 22 12.5V16C22 17.1 21.1 18 20 18C18.9 18 18 17.1 18 16V12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 11H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
