export default function ImageIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 56 56"
      {...props}
    >
      <path
        fill="#0AC963"
        fillRule="evenodd"
        d="M7.293 0h18.73l15.865 16.551v32.156A7.296 7.296 0 0 1 34.594 56H7.293A7.296 7.296 0 0 1 0 48.707V7.293A7.296 7.296 0 0 1 7.293 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M26 0v16.41h15.888L26 0Z"
        clipRule="evenodd"
        opacity={0.302}
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M28.06 27.988H13.827a1.95 1.95 0 0 0-1.941 1.942v9.045a1.95 1.95 0 0 0 1.941 1.942H28.06c1.066 0 1.918-.876 1.918-1.942V29.93c0-1.066-.852-1.942-1.918-1.942Zm-10.348 2.44c1.16 0 2.083.946 2.083 2.083 0 1.16-.923 2.107-2.083 2.107a2.112 2.112 0 0 1-2.108-2.107c0-1.137.947-2.084 2.108-2.084Zm10.987 8.547c0 .355-.285.663-.64.663H13.83c-.356 0-.64-.308-.64-.663v-.379l2.581-2.58 2.131 2.13c.26.26.663.26.924 0l5.351-5.35 4.523 4.522v1.657Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
