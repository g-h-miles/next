export default function LithiumIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 66 56"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M58 1H8a7 7 0 0 0-7 7v40a7 7 0 0 0 7 7h50a7 7 0 0 0 7-7V8a7 7 0 0 0-7-7ZM8 0a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h50a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Z"
        clipRule="evenodd"
        opacity={0.1}
      />
      <path fill="currentColor" d="M5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
      <path
        fill="currentColor"
        d="M4 25a5 5 0 0 1 5-5h48a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V25Zm-3-8v-1h64v1H1Z"
        opacity={0.1}
      />
      <path
        fill="currentColor"
        d="M16 9.5A1.5 1.5 0 0 1 17.5 8h14a1.5 1.5 0 0 1 0 3h-14A1.5 1.5 0 0 1 16 9.5Z"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        d="M37 9.5A1.5 1.5 0 0 1 38.5 8h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 37 9.5Z"
        opacity={0.4}
      />
    </svg>
  );
}
