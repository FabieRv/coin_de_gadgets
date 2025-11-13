import Container from "../common/Container"
import Menu from "../common/Menu"
import { useState } from "react"
import { headerLinkData } from "../constant"
import { Link, NavLink } from "react-router-dom"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="top-0 left-0 w-full  z-20 shadow-lg  ">
      <Container
        tag="header"
        className="flex items-center justify-between text-black pt-0!"
      >
        <Link to={"/"}>
          <img
            src="/public/images/logo-2.png"
            alt="logo"
            className="w-16 h-16 object-cover rounded border-2 m-1  bg-[rgb(215,215,247)]"
          />
        </Link>

        <Menu
          isClicked={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <ul
          className={` absolute top-0 left-0 w-screen h-screen lg:w-fit lg:h-fit bg-primary lg:bg-transparent lg:static flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8  text-2xl lg:text-lg 2xl:text-xl  transition-transform duration-700 ${
            isMenuOpen
              ? "translate-x-0 lg:translate-x-0"
              : "translate-x-full lg:translate-x-0"
          }`}
        >
          {headerLinkData.map((link, id) => (
            <li key={id} onClick={() => setIsMenuOpen(false)}>
              <NavLink
                to={link.href}
                className="font-Montser text-black hover:text-blue-400 transition-colors duration-500  "
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Header
