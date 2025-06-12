import Navbar from './SidebarPage'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function HomePage(){
    return (
        <>
            
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}