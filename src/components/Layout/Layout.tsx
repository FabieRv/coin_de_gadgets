import { Outlet } from "react-router-dom"
import Header from "./Header"
import SecondNav from "./SecondNav"
import Footer from "./Footer"



function Layout() {
  return (
    <div>
      <Header />
      <SecondNav/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
