import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import NavbarMain from "../components/Navbar-main";
import Page500 from '../assets/500.svg'


export default function Error500() {
    const location = useLocation()
    const isHidden = location.pathname.startsWith("/teacher");
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {!isHidden && <NavbarMain />}
                <div className="py-40 px-20 flex flex-col gap-10 justify-center items-center">
                    <img src={Page500} alt="404 not found page" className="max-w-[310px] max-h-[330px]" />
                    <p className="font-semibold text-xl">Internal Server Error</p>
                    <a href={isHidden ? "/teacher/dashboard" : "/"} className="flex items-center justify-center font-semibold bg-accent text-secondary py-1 px-4 rounded-lg"><Icon icon="mdi:chevron-left" width={30} height={30} />Back to Home</a>
                </div>
            </div>
        </>
    )
}