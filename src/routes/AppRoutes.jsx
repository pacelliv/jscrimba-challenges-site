import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Challenge1 from "../pages/Challenge1"
import Challenge2 from "../pages/Challenge2"
import Challenge3 from "../pages/Challenge3"
import Challenge4 from "../pages/Challenge4"
import Challenge5 from "../pages/Challenge5"

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/challenge1" element={<Challenge1 />} />
            <Route path="/challenge2" element={<Challenge2 />} />
            <Route path="/challenge3" element={<Challenge3 />} />
            <Route path="/challenge4" element={<Challenge4 />} />
            <Route path="/challenge5" element={<Challenge5 />} />
        </Routes>
    )
}

export default AppRoutes
