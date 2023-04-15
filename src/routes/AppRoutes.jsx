import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Challenge1 from "../pages/page1/Challenge1"
import Challenge2 from "../pages/page2/Challenge2"
import Challenge3 from "../pages/page3/Challenge3"
import Challenge4 from "../pages/page4/Challenge4"
import Challenge5 from "../pages/page5/Challenge5"
import Challenge6 from "../pages/page6/Challenge6"
import Challenge7 from "../pages/page7/Challenge7"
import Challenge8 from "../pages/page8/Challenge8"

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/challenge1" element={<Challenge1 />} />
            <Route path="/challenge2" element={<Challenge2 />} />
            <Route path="/challenge3" element={<Challenge3 />} />
            <Route path="/challenge4" element={<Challenge4 />} />
            <Route path="/challenge5" element={<Challenge5 />} />
            <Route path="/challenge6" element={<Challenge6 />} />
            <Route path="/challenge7" element={<Challenge7 />} />
            <Route path="/challenge8" element={<Challenge8 />} />
        </Routes>
    )
}

export default AppRoutes
