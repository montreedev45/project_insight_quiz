import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { useLocation } from "react-router-dom"

export default function NavbarMain() {
    const location = useLocation()
    const path = ["/login", "/register"]
    const isHidden = path.includes(location.pathname)

    return (
        <>
            <header className="w-full sticky top-0 z-50">
                <nav className="bg-primary px-[30px] py-[15px] max-w-[1440px] mx-auto h-[90px] flex items-center justify-between">
                    <Link to="/" className="font-semibold text-4xl text-secondary flex justify-center items-center gap-1" aria-label="InsightQuiz"><Icon icon="andrsrxn:lightbulb-sparkle" width={40} height={40} /> InsightQuiz</Link>
                    {!isHidden &&
                        (
                            <div className="hidden lg:flex justify-between items-center w-full font-semibold text-[18px] text-secontext bg-primary max-w-[700px] h-[70px]">
                                <a
                                    href="#hero"
                                    className="text-text-primary hover:text-primary font-medium transition-colors"
                                >Home</a>
                                <a
                                    href="#problem"
                                    className="text-text-primary hover:text-primary font-medium transition-colors"
                                >Problem</a>
                                <a
                                    href="#feature"
                                    className="text-text-primary hover:text-primary font-medium transition-colors"
                                >Feature</a>
                                <a
                                    href="#how-it-work"
                                    className="text-text-primary hover:text-primary font-medium transition-colors"
                                >How it work</a>
                                <a
                                    href="#CTA"
                                    className="text-text-primary hover:text-primary font-medium transition-colors"
                                >CTA</a>
                                <a
                                    href="#footer"
                                    className="text-text-primary hover:text-primary font-medium transition-colors"
                                >Contact</a>
                                <Link to="/login" aria-label="go sign in" className="bg-accent rounded-[10px] py-[8px] px-[25px]">Sign in</Link>
                            </div>
                        )}
                </nav>
            </header>
        </>
    )
}