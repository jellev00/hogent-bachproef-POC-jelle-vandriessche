import * as React from "react"

function Grid(props:any) {
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
        d="M4 3.5h8A1.5 1.5 0 0113.5 5v.5h-11V5A1.5 1.5 0 014 3.5m-1.5 7v.5A1.5 1.5 0 004 12.5h3.25v-2zm0-1.5h4.75V7H2.5zm6.25 1.5v2H12a1.5 1.5 0 001.5-1.5v-.5zM13.5 9H8.75V7h4.75zM1 5a3 3 0 013-3h8a3 3 0 013 3v6a3 3 0 01-3 3H4a3 3 0 01-3-3z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Grid
