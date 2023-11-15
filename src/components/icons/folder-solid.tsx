export default function FolderIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      fill="none"
      {...props}
    >
      <path
        fill="#F7A004"
        d="M52.613 50.4H5.602v-42h46.626A3.773 3.773 0 0 1 56 12.174v34.84a3.387 3.387 0 0 1-3.387 3.387Z"
      />
      <path
        fill="#fff"
        d="M8.398 47.6V11.2h43.827c.536 0 .972.436.972.973V47.01a.589.589 0 0 1-.588.588H8.4Z"
      />
      <path
        fill="url(#b)"
        d="m30.007 12.26-4.023-3.52a12.691 12.691 0 0 0-8.357-3.14h-6.836a3.795 3.795 0 0 0-3.795 3.795V22.4h39.199v-3.205A3.795 3.795 0 0 0 42.4 15.4h-4.036a12.691 12.691 0 0 1-8.357-3.14Z"
      />
      <path
        fill="url(#c)"
        d="m24.413 12.26-4.022-3.52a12.692 12.692 0 0 0-8.357-3.14H5.197a3.795 3.795 0 0 0-3.795 3.795V22.4h39.2v-3.205a3.795 3.795 0 0 0-3.795-3.795H32.77a12.69 12.69 0 0 1-8.357-3.14Z"
      />
      <path
        fill="#F9C10A"
        d="M48.999 46.9V21.973a3.772 3.772 0 0 0-3.773-3.772H30.1a4.967 4.967 0 0 1-4.121-2.2l-.003.006c-3.598-7.27-13.35-7.606-13.35-7.606h-8.35A4.274 4.274 0 0 0 0 12.675v34.072A3.653 3.653 0 0 0 3.653 50.4h48.846a3.5 3.5 0 0 1-3.5-3.5Z"
      />
      <defs>
        <linearGradient
          id="b"
          x1={6.996}
          x2={46.195}
          y1={14}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.001} stopColor="#009DFF" />
          <stop offset={0.355} stopColor="#217FFF" />
          <stop offset={0.772} stopColor="#4261FF" />
          <stop offset={1} stopColor="#4F56FF" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={1.402}
          x2={40.601}
          y1={14}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.001} stopColor="#00CE2C" />
          <stop offset={1} stopColor="#0CA529" />
        </linearGradient>
      </defs>
    </svg>
  );
}
