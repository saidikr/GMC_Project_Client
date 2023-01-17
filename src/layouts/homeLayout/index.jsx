import { Header } from "../../components/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../../components/footer"


export const HomeLayout=()=>{
    return(
        <div>
        <Header key='1'/>
        <Outlet key='2'/>
        <Footer key='3'/>
        </div>
    )
}