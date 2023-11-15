export default function ShoppingCartAlt({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="m26.04 41.8 12-27M74.04 41.8l-12-27M80 35.8h13a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-2a5 5 0 0 1 5-5h13M72.12 35.8h-44M92 47.8H8l6.56 37.72a10 10 0 0 0 9.84 8.28h51.2c4.88 0 9-3.48 9.84-8.28L92 47.8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="m29.52 60.4 2 20.8M71 60.4l-2 20.8M50.2 60.4v20.8"
      />
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M39 16.8a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM61 16.8a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
    </svg>
  );
}
