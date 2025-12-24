import * as React from "react"

function Scan(props:any) {
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
        d="M4.5 3A1.5 1.5 0 003 4.5v1.75a.75.75 0 01-1.5 0V4.5a3 3 0 013-3h1.75a.75.75 0 010 1.5zM9 2.25a.75.75 0 01.75-.75h1.75a3 3 0 013 3v1.75a.75.75 0 01-1.5 0V4.5A1.5 1.5 0 0011.5 3H9.75A.75.75 0 019 2.25M2.25 9a.75.75 0 01.75.75v1.75A1.5 1.5 0 004.5 13h1.75a.75.75 0 010 1.5H4.5a3 3 0 01-3-3V9.75A.75.75 0 012.25 9m11.5 0a.75.75 0 01.75.75v1.75a3 3 0 01-3 3H9.75a.75.75 0 010-1.5h1.75a1.5 1.5 0 001.5-1.5V9.75a.75.75 0 01.75-.75"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Scan
