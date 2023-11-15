export default function BulletIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      fill="none"
      {...props}
    >
      <rect
        width={5.625}
        height={5.625}
        x={1.188}
        y={1.188}
        stroke="currentColor"
        strokeWidth={0.375}
        rx={2.813}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.813 6.618a2.625 2.625 0 1 0 0-5.237 2.625 2.625 0 0 1 0 5.237Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
