import React from 'react'
import {GearboxIcon} from '../../icons'

const MobileHeader = (props) => {
  return (
  <div className="md:hidden sticky top-0 z-50 bg-base-100 col-span-8 grid grid-cols-2 items-center">
    <div>
      <label
        htmlFor="mobile-menu"
        className="btn btn-neutral drawer-button p-2 m-2"
      >
        <GearboxIcon className="text-primary h-8 w-8" />
      </label>
    </div>
    <div className="text-right text-4xl pr-2 font-fraunces font-semibold text-primary">
      CORDITE
    </div>
  </div>
)}

export default MobileHeader