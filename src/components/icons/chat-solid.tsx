export default function ChatSolidIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      fill="none"
      {...props}
    >
      <path
        className="fill-current opacity-40"
        d="M16.172 5.313h-.375v3.562a3.19 3.19 0 0 1-3.187 3.188H3.798v1.687c0 1.137.925 2.062 2.062 2.062h.937V17.5a.562.562 0 0 0 .977.38l1.895-2.068h6.503a2.064 2.064 0 0 0 2.062-2.062V7.375a2.065 2.065 0 0 0-2.062-2.063Z"
      />
      <path
        fill="currentColor"
        d="M12.61.813H1.734A1.69 1.69 0 0 0 .047 2.5v6.375c0 .93.757 1.688 1.688 1.688H12.61a1.69 1.69 0 0 0 1.688-1.688V2.5A1.691 1.691 0 0 0 12.609.812Zm.187 3.33L7.742 6.595a1.273 1.273 0 0 1-1.14 0L1.547 4.143V2.897L7.09 5.584c.053.03.112.03.165 0l5.543-2.686-.001 1.244Z"
      />
    </svg>
  );
}
