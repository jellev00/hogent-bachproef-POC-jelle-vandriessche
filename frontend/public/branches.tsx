import * as React from "react"

function Branches(props:any) {
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
        d="M13.25 12a.75.75 0 100 1.5.75.75 0 000-1.5m-.75-1.372a2.251 2.251 0 101.5 0v-.378a3 3 0 00-3-3H8.75V5.372a2.25 2.25 0 10-1.5 0V7.25H5a3 3 0 00-3 3v.378a2.251 2.251 0 101.5 0v-.378A1.5 1.5 0 015 8.75h2.25v1.878a2.251 2.251 0 101.5 0V8.75H11a1.5 1.5 0 011.5 1.5zM2.75 12a.75.75 0 100 1.5.75.75 0 000-1.5m4.5.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0M8 2.5A.75.75 0 108 4a.75.75 0 000-1.5"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Branches
