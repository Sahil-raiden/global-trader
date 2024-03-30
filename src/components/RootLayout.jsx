import { Outlet } from "react-router-dom"
import Navbar from "./NavBar/Navbar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Footer from './Footer/Footer'

function RootLayout(){
    let navigate=useNavigate()
    // useEffect(()=>{
    //     navigate('home')
    // })
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default RootLayout