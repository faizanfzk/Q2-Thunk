import {Routes,Route} from "react-router"
import { Home } from "./Home"
import { Posts } from "./Posts"

export const All=()=>{
    return(
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>
    )
}