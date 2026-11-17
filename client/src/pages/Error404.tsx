import { Icon } from "@iconify/react";
import NavbarMain from "../components/Navbar-main";
import Page404 from '../assets/404.svg'
import { useLocation } from "react-router-dom";

export default function Error404() {
    const location = useLocation()
    const isHidden = location.pathname.startsWith("/teacher");

    return (
        <>
            <div className="flex flex-col justify-center items-center h-full">
                {!isHidden && <NavbarMain />}
                <div className={`${isHidden ? "py-10" : "py-40"} px-20 flex flex-col gap-10 justify-center items-center`}>
                    <img src={Page404} alt="404 not found page" className="max-w-[310px] max-h-[330px]" />
                    <p className="font-semibold text-xl">Page Not Found</p>
                    <a href={isHidden ? "/teacher/dashboard" : "/"} className="flex items-center justify-center font-semibold bg-accent text-secondary py-1 px-4 rounded-lg"><Icon icon="mdi:chevron-left" width={30} height={30} />Back to Home</a>
                </div>
            </div>
        </>
    )
}