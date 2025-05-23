import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { Footer } from "../components/footer/Footer"


export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

