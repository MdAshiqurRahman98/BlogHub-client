import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto min-h-screen px-7 md:px-16 lg:px-16 py-3 md:mt-5 lg:mt-7 mb-7">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className="bg-black">
                <div className="max-w-screen-xl mx-auto px-7 md:px-16 lg:px-9 py-3">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;