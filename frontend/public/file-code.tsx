import * as React from "react"

function FileCode(props:any) {
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
        d="M5 13.5h6a1.5 1.5 0 001.5-1.5V7.243a1.5 1.5 0 00-.44-1.061L8.819 2.939a1.5 1.5 0 00-1.06-.439H5A1.5 1.5 0 003.5 4v8A1.5 1.5 0 005 13.5m9-6.257a3 3 0 00-.879-2.122L9.88 1.88A3 3 0 007.757 1H5a3 3 0 00-3 3v8a3 3 0 003 3h6a3 3 0 003-3zM8.72 10.53a.75.75 0 010-1.06l.97-.97-.97-.97a.75.75 0 011.06-1.06l1.5 1.5a.75.75 0 010 1.06l-1.5 1.5a.75.75 0 01-1.06 0m-1.44-3a.75.75 0 00-1.06-1.06l-1.5 1.5a.75.75 0 000 1.06l1.5 1.5a.75.75 0 101.06-1.06l-.97-.97z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default FileCode
