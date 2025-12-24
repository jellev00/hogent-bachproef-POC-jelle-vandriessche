import * as React from "react"

function PersonPlus(props:any) {
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
        d="M8 6.5a2 2 0 100-4 2 2 0 000 4M8 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7m1 1.225a.71.71 0 00-.679-.72A11 11 0 008 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 003.5 15h8.75a.75.75 0 000-1.5H3.5a1 1 0 01-1-1c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10q.088 0 .175.002c.442.008.825-.335.825-.777M13.75 8a.75.75 0 00-1.5 0v1.25H11a.75.75 0 000 1.5h1.25V12a.75.75 0 001.5 0v-1.25H15a.75.75 0 000-1.5h-1.25z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default PersonPlus
