export default function SlackIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <g clipPath="url(#slack1)">
        <path
          fill="#FF185B"
          d="M7.579 22.737a3.79 3.79 0 1 1-3.79-3.79h3.79v3.79Zm1.895 0a3.79 3.79 0 0 1 7.579 0v9.474a3.79 3.79 0 0 1-7.58 0v-9.474Z"
        />
        <path
          fill="#00C5F1"
          d="M13.263 7.579a3.79 3.79 0 1 1 3.79-3.79v3.79h-3.79Zm0 1.895a3.79 3.79 0 0 1 0 7.579H3.79a3.79 3.79 0 0 1 0-7.58h9.474Z"
        />
        <path
          fill="#00B67B"
          d="M28.42 13.263a3.79 3.79 0 1 1 3.79 3.79h-3.79v-3.79Zm-1.894 0a3.79 3.79 0 0 1-7.579 0V3.79a3.79 3.79 0 0 1 7.58 0v9.474Z"
        />
        <path
          fill="#FFB20F"
          d="M22.737 28.42a3.79 3.79 0 1 1-3.79 3.79v-3.79h3.79Zm0-1.894a3.79 3.79 0 0 1 0-7.579h9.474a3.79 3.79 0 0 1 0 7.58h-9.474Z"
        />
      </g>
      <defs>
        <clipPath id="slack1">
          <path fill="#fff" d="M0 0h36v36H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
