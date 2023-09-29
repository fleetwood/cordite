import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import ActiveLink from "./ui/links/ActiveLink"
import {MoonIcon, SunIcon} from "./ui/icons"

const Header: React.FC = () => {

  let left = (
    <div className="left">
      <ActiveLink href="/">HOME</ActiveLink>
    </div>
  )

  let right = (
    <div className="items-end">
      <button data-set-theme="corditeDark" data-act-class="ACTIVECLASS" className="btn btn-xs btn-primary"><MoonIcon /></button>
      <button data-set-theme="corditeLight" data-act-class="ACTIVECLASS" className="btn btn-xs btn-secondary"><SunIcon /></button>
    </div>
  )

  return (
    
    <nav className="flex flex-row">
      {left}
      <div className="flex-grow"><h2 className="text-center text-5xl font-fraunces text-primary">CORDITE</h2></div>
      {right}
    </nav>
  )
}

export default Header
