import * as React from "react"

function Pulse(props:any) {
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
          d="M9.235 1a.75.75 0 01.74.56l2.034 7.726 1.09-1.908A.75.75 0 0113.75 7h1.5a.75.75 0 010 1.5h-1.065l-1.784 3.122a.75.75 0 01-1.376-.181l-1.71-6.496-2.083 9.466a.75.75 0 01-1.446.07L3.544 7.55l-.65 1.085A.75.75 0 012.25 9H.75a.75.75 0 110-1.5h1.075l1.282-2.136a.75.75 0 011.357.155l1.898 5.868 2.156-9.798A.75.75 0 019.235 1"
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

export default Pulse
