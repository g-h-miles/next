export default function ArrowBothDirectionIcon({
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
        fill="currentColor"
        d="M6.664 8.332 1.66 13.336l5.004 5.004v-2.502h5.022v-5.004H6.664V8.332Z"
      />
      <path
        fill="#E6473C"
        d="M10.852 11.666v3.336H5.831v1.323l-2.991-2.99 2.99-2.991v1.322h5.022Z"
      />
      <path
        fill="currentColor"
        d="M18.34 6.664 13.336 1.66v2.502H8.35v5.004h4.986v2.502l5.003-5.004Z"
      />
      <path
        fill="#8ABA18"
        d="M9.184 8.33V4.996h4.986V3.672l2.99 2.99-2.99 2.991V8.331H9.184Z"
      />
    </svg>
  );
}
