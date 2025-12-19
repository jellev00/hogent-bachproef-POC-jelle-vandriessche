import * as React from "react"

function Calender(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 5.497a.75.75 0 01-.75-.75V4A1.5 1.5 0 003 5.5v1h10v-1A1.5 1.5 0 0011.5 4v.75a.75.75 0 01-1.5 0V4H6v.747a.75.75 0 01-.75.75M10 2.5H6v-.752a.75.75 0 10-1.5 0V2.5a3 3 0 00-3 3v6a3 3 0 003 3h7a3 3 0 003-3v-6a3 3 0 00-3-3v-.75a.75.75 0 00-1.5 0zM3 8v3.5A1.5 1.5 0 004.5 13h7a1.5 1.5 0 001.5-1.5V8z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Calender
