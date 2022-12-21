import { Category } from "../components/category"
import { Features } from "../components/Features"
import { Offers } from "../components/Offers"
import { ProductsCards } from "../components/ProductsCards"
import Slider2 from "../components/Slider2"
import { Vendor } from "../components/vendor"

const HomePage=()=>{
    return(
        <div>
            <Slider2/>
            <Features/>
            <Category/>
            <Offers/>
            <ProductsCards/>
            <Vendor/>
        </div>
    )
}

export default HomePage