import * as React from "react"

function ArrowDown(props:any) {
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
        d="M8 1.25a.75.75 0 01.75.75v10.19l2.72-2.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06l2.72 2.72V2A.75.75 0 018 1.25"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default ArrowDown