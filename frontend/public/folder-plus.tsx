import * as React from "react"

function FolderPlus(props:any) {
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
        d="M6.44 4.06l.439.44H12.5A1.5 1.5 0 0114 6v5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 11V4.5A1.5 1.5 0 013.5 3h1.257a1.5 1.5 0 011.061.44zM.5 4.5a3 3 0 013-3h1.257a3 3 0 012.122.879L7.5 3h5a3 3 0 013 3v5a3 3 0 01-3 3h-9a3 3 0 01-3-3zm8.25 2a.75.75 0 10-1.5 0v1.25H6a.75.75 0 100 1.5h1.25v1.25a.75.75 0 001.5 0V9.25H10a.75.75 0 000-1.5H8.75z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default FolderPlus
