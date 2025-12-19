import * as React from "react"

function CircleCheckFill(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 15A7 7 0 108 1a7 7 0 000 14m3.1-8.55a.75.75 0 10-1.2-.9L7.419 8.858 6.03 7.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.13-.08z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default CircleCheckFill
