import React from 'react'

export function Close() {
  return (
    <div className="absolute left-[calc(50%_-_12px_+_0px)] top-[calc(50%_-_12px_+_0px)] h-6 w-6">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 20L4 4M20 4L4 20"
          stroke="black"
          strokeOpacity="0.38"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
