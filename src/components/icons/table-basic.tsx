export default function TableBasicIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fill="#91DAFA"
        d="M19.707 5.754H.293v-3.27c0-.54.437-.977.977-.977h17.46c.54 0 .977.437.977.977v3.27Z"
      />
      <path
        fill="#6EC2FC"
        d="M18.285 1.507h-1.422c.628 0 1.138.51 1.138 1.138v3.109h1.706V2.929c0-.785-.637-1.422-1.422-1.422Z"
      />
      <path
        fill="#F8E883"
        d="M.293 5.752V17.07c0 .785.637 1.422 1.422 1.422h16.57c.785 0 1.422-.637 1.422-1.422V5.752H.293Z"
      />
      <path
        fill="#FFD549"
        d="M18 5.752v11.603c0 .628-.508 1.137-1.137 1.137h1.422c.786 0 1.422-.637 1.422-1.422V5.752h-1.706Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.6}
        d="M4.384 1.507H18.73c.54 0 .977.437.977.977v3.27H.293v-3.27c0-.54.437-.977.977-.977h1.942M.293 10h19.414m0 4.246H.293"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.6}
        d="M11.095 18.492h7.19c.785 0 1.422-.636 1.422-1.422V5.752H.293V17.07c0 .786.637 1.422 1.422 1.422h8.208M6.765 5.92v12.456m6.47-12.456v12.456"
      />
    </svg>
  );
}
