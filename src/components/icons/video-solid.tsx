export default function VideoIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      fill="none"
      {...props}
    >
      <path
        fill="#FA3636"
        fillRule="evenodd"
        d="M14.349 0h18.723L48.94 16.54v32.17c0 4.03-3.26 7.29-7.277 7.29H14.35c-4.03 0-7.29-3.26-7.29-7.29V7.29c0-4.03 3.26-7.29 7.29-7.29Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M33.059 0v16.414H48.94L33.059 0Z"
        clipRule="evenodd"
        opacity={0.302}
      />
      <path
        fill="#fff"
        d="M28.007 25.411c-4.996 0-9.054 4.058-9.054 9.054 0 4.995 4.058 9.039 9.054 9.039a9.035 9.035 0 0 0 9.04-9.04c0-4.995-4.059-9.039-9.04-9.053Zm3.806 9.334a.743.743 0 0 1-.294.293l-5.163 2.589a.649.649 0 0 1-.868-.294.51.51 0 0 1-.07-.294v-5.163c0-.364.294-.644.644-.644.098 0 .195.014.293.07l5.164 2.575a.653.653 0 0 1 .294.867Z"
      />
    </svg>
  );
}
