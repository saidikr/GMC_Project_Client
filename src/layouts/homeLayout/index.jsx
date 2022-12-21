import { Header } from "../../components/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../../components/footer"
import { SideBar } from "../../components/SideBar"


export const HomeLayout=({children})=>{
    return(
        <div>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    )
}