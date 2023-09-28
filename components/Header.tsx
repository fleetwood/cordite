import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname

  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
    </div>
  )

  let right = (
    <div className="items-end">
      <button data-set-theme="corditeDark" data-act-class="ACTIVECLASS" className="btn btn-xs btn-primary">DARK</button>
      <button data-set-theme="corditeLight" data-act-class="ACTIVECLASS" className="btn btn-xs btn-secondary">LIGHT</button>
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
