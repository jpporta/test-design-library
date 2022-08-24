import React from 'react'

import { Close } from '../assets/Close'
import { Arrow } from '../assets/Arrow'

export function ModalInputSelection() {
  return (
    <div className="inline-flex">
      <div className="flex w-[440px] flex-col items-start justify-start overflow-clip rounded-lg border border-solid border-gray-200 bg-white drop-shadow-lg">
        <div className="flex w-full items-center justify-between border border-solid border-gray-200 px-6 py-4">
          <p className="font-['Nunito'] text-lg font-bold leading-[normal] text-[rgba(0,0,0,0.8)]">
            Options
          </p>
          <div className="relative h-10 w-10 gap-2.5 rounded-2xl">
            <Close />
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-4 p-6">
          <div className="flex w-full flex-col items-start justify-start gap-1">
            <p className="font-['Nunito'] text-base leading-[normal] text-[rgba(0,0,0,0.8)]">
              Audio Input:
            </p>
            <div className="flex h-10 w-full items-center justify-start gap-3 rounded-lg border border-solid border-gray-300 bg-gray-50 px-3 py-2">
              <p className="flex-1 font-['Nunito'] text-base leading-[1] text-[rgba(0,0,0,0.8)]">
                Default Microphone
              </p>
              <Arrow />
            </div>
          </div>
        </div>
        <div className="flex h-[72px] w-full items-center justify-between border border-solid border-gray-200 px-6 py-3.5">
          <div className="flex h-10 items-center justify-center gap-2.5 rounded-lg bg-white px-4 py-2">
            <p className="text-center font-['Nunito'] text-base font-medium leading-[normal] text-[rgba(55,62,124,1)]">
              Cancel
            </p>
          </div>
          <div className="flex h-10 items-center justify-center gap-2.5 rounded-lg bg-[rgba(70,80,159,1)] px-4 py-2 drop-shadow-lg">
            <p className="text-center font-['Nunito'] text-base font-medium leading-[normal] text-white">
              Open Session
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
