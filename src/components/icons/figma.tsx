export default function FigmaIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fill="#00BCFF" d="M12.028 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
      <path
        fill="#00CF7F"
        d="M4.028 20a4 4 0 0 1 4-4l2.132-1.126L12.028 16v4a4 4 0 1 1-8 0Z"
      />
      <path
        fill="#FF7361"
        d="M12.028 0 9.852 3.781 12.028 8h3.944a4 4 0 1 0 0-8h-3.944Z"
      />
      <path
        fill="#FF4D12"
        d="M3.972 4a4 4 0 0 0 4 4l2.122.82L12.028 8V0H7.972a4 4 0 0 0-4 4Z"
      />
      <path fill="#B659FF" d="M4.028 12a4 4 0 0 0 4 4h4V8h-4a4 4 0 0 0-4 4Z" />
    </svg>
  );
}
