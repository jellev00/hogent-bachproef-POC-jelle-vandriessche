import * as React from "react"

function Chart(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.98 1.826a.75.75 0 00-.96-1.152L10.376 3.71a1.25 1.25 0 01-1.196.225l-2.155-.718a2.75 2.75 0 00-2.973.837L.926 7.767a.75.75 0 101.148.966l3.125-3.712a1.25 1.25 0 011.352-.38l2.155.718a2.75 2.75 0 002.63-.496zM13.5 8h-2a.5.5 0 00-.5.5V13a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V8.5a.5.5 0 00-.5-.5m-4 5a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5v-2.5A.5.5 0 017 10h2a.5.5 0 01.5.5zM5 13a.5.5 0 01-.5.5h-2A.5.5 0 012 13v-.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5zm-2.5 2h11a2 2 0 002-2V8.5a2 2 0 00-2-2h-2a2 2 0 00-2 2v.063A2 2 0 009 8.5H7a2 2 0 00-2 2v.063a2 2 0 00-.5-.063h-2a2 2 0 00-2 2v.5a2 2 0 002 2"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Chart
