export default function TableStickyHeaderIcon({
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
        fill="#EAF6FF"
        d="M18.926 3.164H1.074a.781.781 0 0 0-.781.781v12.11c0 .431.35.78.781.78h17.852c.431 0 .781-.349.781-.78V3.945a.781.781 0 0 0-.781-.78Z"
      />
      <path
        fill="#C4E2FF"
        d="M18.926 3.164h-.899c.432 0 .782.35.782.781v12.11c0 .431-.35.78-.782.78h.899c.431 0 .781-.349.781-.78V3.945a.781.781 0 0 0-.781-.78Z"
      />
      <path
        fill="#FEE97D"
        d="M18.926 3.164H1.074a.781.781 0 0 0-.781.781v2.766h19.414V3.945a.781.781 0 0 0-.781-.78Z"
      />
      <path
        fill="#FEC165"
        d="M18.809 3.945v2.766h.898V3.945a.781.781 0 0 0-.781-.78h-.899c.432 0 .782.349.782.78Z"
      />
      <path
        fill="#60B7FF"
        d="M3.84 3.164H1.074a.781.781 0 0 0-.781.781v12.11c0 .431.35.78.781.78H3.84V3.166Z"
      />
      <path
        fill="#8379C1"
        d="M3.84 3.164H1.074a.781.781 0 0 0-.781.781v2.766H3.84V3.164Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.6}
        d="M17.14 16.836h1.786c.431 0 .78-.35.78-.781V3.945a.781.781 0 0 0-.78-.78H7.785m-1.368 0H1.074a.781.781 0 0 0-.781.78v12.11c0 .431.35.78.781.78h14.7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.6}
        d="M3.84 3.164H1.074a.781.781 0 0 0-.781.781v12.11c0 .431.35.78.781.78H3.84V3.166Zm0 6.078h15.867M3.84 11.773h15.867M3.84 14.305h15.867m0-7.594H.293m8.836 0v10.125m5.289-10.125v10.125"
      />
    </svg>
  );
}
