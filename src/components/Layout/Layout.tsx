import { Outlet } from "react-router-dom"
import Header from "./Header"
import SecondNav from "./SecondNav"



function Layout() {
  return (
    <div>
      <Header />
      <SecondNav/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
