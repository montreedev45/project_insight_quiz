import { Icon } from "@iconify/react"
import NavbarMain from "../../components/Navbar-main"
import hero4 from '../../assets/hero4.svg'

export default function Register () {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <NavbarMain />
                <div className="flex items-center md:gap-20 lg:gap-40 py-30 transition-all duration-300">
                    <img src={hero4} alt="login image" className="hidden md:block max-w-[310px] max-h-[330px]" />
                    <form className="flex flex-col min-w-[250px] gap-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Email" className="font-semibold text-lg">Email</label>
                            <input type="email" className="border-2 border-gray-300 rounded-md px-3 py-1.5 outline-0" />
                        </div>
                        <div className="flex flex-col gap-2 relative">
                            <label htmlFor="Password" className="font-semibold text-lg">Password</label>
                            <input type="password" className="border-2 border-gray-300 rounded-md px-3 py-1.5 outline-0" />
                            <Icon icon="mdi:eye" className="absolute bottom-3 right-3 text-gray-300" />
                        </div>
                        <div className="flex flex-col gap-2 relative">
                            <label htmlFor="Confirm Password" className="font-semibold text-lg">Confirm Password</label>
                            <input type="password" className="border-2 border-gray-300 rounded-md px-3 py-1.5 outline-0" />
                            <Icon icon="mdi:eye" className="absolute bottom-3 right-3 text-gray-300" />
                        </div>

                        <button type="submit" className="bg-accent text-secontext font-semibold py-2 mt-4 rounded-lg">Sign up</button>
                        <span className="w-full text-center py-4">or</span>
                        <button type="submit" className="flex justify-center items-center gap-4 border-2 py-2 px-4 rounded-lg text-primary font-semibold"><Icon icon="logos:google-icon" width={20} height={20} />Continue with Google</button>
                        <p className="mt-4">You have an account? <a href="/login" className="text-accent font-semibold">Sign in</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}