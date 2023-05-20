import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./auth"
import { App } from "./App"

export const AppRouter = () =>{



    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/*" element={<App/>} />
        
        </Routes>
        </BrowserRouter>





    )
}