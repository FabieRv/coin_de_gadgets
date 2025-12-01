import Container from "../common/Container"
import Menu from "../common/Menu"
import { useState } from "react"
import { headerLinkData } from "../constant"
import { Link, NavLink } from "react-router-dom"
import { User } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleUser = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="shadow-sm">
      <Container
        tag="header"
        className="flex items-center justify-between text-black pt-0! "
      >
        <Link to={"/"}>
          <img
            src="/public/images/logo-2.png"
            alt="logo"
            className="w-16 h-16 object-cover rounded border-b-blue-400 bg-[#cbe2e2]  m-1"
          />
        </Link>
        <Menu
          isClicked={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ul
          className={` absolute top-0 left-0 w-screen h-screen 
      lg:w-fit lg:h-fit bg-primary lg:bg-transparent lg:static 
      flex flex-col lg:flex-row items-center 
      justify-center lg:justify-end
      gap-8 lg:gap-6 text-2xl lg:text-lg 2xl:text-xl  
      transition-transform duration-700  
      lg:ml-auto flex-auto z-50
      ${
        isMenuOpen
          ? "translate-x-0 lg:translate-x-0"
          : "translate-x-full lg:translate-x-0"
      }`}
        >
          {headerLinkData.map((link, id) => (
            <li key={id} onClick={() => setIsMenuOpen(false)}>
              <NavLink
                to={link.href}
                className="font-Montser text-black hover:text-blue-400 transition-colors duration-500"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className=" relative hidden lg:flex ml-10">
          <User
            size={40}
            onClick={handleUser}
            className="bg-gray-200 text-black rounded cursor-pointer p-1"
          />

          {isOpen && (
            <ul className="w-[150px] absolute right-0 top-12 bg-zinc-50 z-10 gap-4 flex flex-col p-2 rounded shadow">
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Header
