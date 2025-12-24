import * as React from "react"

function Circle(props:any) {
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
        d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11M8 15A7 7 0 108 1a7 7 0 000 14"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Circle
