import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function NavbarMain() {
    const location = useLocation()
    const path = ["/login", "/register", "/404", "/500"]
    const isHidden = path.includes(location.pathname)

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // ถ้าเปิดเมนูอยู่ และคลิกพื้นที่ข้างนอก (ไม่อยู่ใน menuRef) ให้ปิดเมนู
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuIsOpen(false);
            }
        }

        // ผูก event ตอนเมนูเปิด
        if (menuIsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event เมื่อคอมโพเนนต์ถูกถอดหรือเมนูปิด
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuIsOpen]);

    return (
        <>
            <header className="w-full sticky top-0 z-50">
                <nav className="bg-primary px-[30px] py-[15px] max-w-[1440px] mx-auto h-[90px] flex items-center justify-between">
                    <Link to="/" className="font-semibold text-4xl text-secondary flex justify-center items-center gap-1" aria-label="InsightQuiz"><Icon icon="andrsrxn:lightbulb-sparkle" width={40} height={40} /> InsightQuiz</Link>
                    {!isHidden &&
                        (
                            <>
                                <div ref={menuRef} className="relative">
                                    <div className="flex lg:hidden">
                                        <Icon
                                            icon={menuIsOpen ? "fe:close" : "mdi:menu"}
                                            onClick={() => setMenuIsOpen(!menuIsOpen)}
                                            className="text-secondary cursor-pointer"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <div
                                        id="mobile-menu"
                                        className={`lg:hidden absolute right-2 top-11 bg-primary border-2 border-gray-200 rounded-xl transition-all duration-300 ease-in-out overflow-hidden px-6 ${menuIsOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 border-transparent'
                                            }`}
                                    >
                                        <nav aria-label="Mobile Navigation" className="flex flex-col gap-5 justify-between items-start w-full font-semibold text-[18px] text-secondary min-w-[140px]">
                                            <a
                                                href="#hero"
                                                onClick={() => setMenuIsOpen(false)}
                                                className="w-full text-secontext hover:text-primary font-medium transition-colors"
                                            >Home</a>
                                            <a
                                                href="#problem"
                                                onClick={() => setMenuIsOpen(false)}
                                                className="w-full text-secontext hover:text-primary font-medium transition-colors"
                                            >Problem</a>
                                            <a
                                                href="#feature"
                                                onClick={() => setMenuIsOpen(false)}
                                                className="w-full text-secontext hover:text-primary font-medium transition-colors"
                                            >Feature</a>
                                            <a
                                                href="#how-it-work"
                                                onClick={() => setMenuIsOpen(false)}
                                                className="w-full text-secontext hover:text-primary font-medium transition-colors"
                                            >How it work</a>
                                            <a
                                                href="#CTA"
                                                onClick={() => setMenuIsOpen(false)}
                                                className="w-full text-secontext hover:text-primary font-medium transition-colors"
                                            >CTA</a>
                                            <a
                                                href="#footer"
                                                onClick={() => setMenuIsOpen(false)}
                                                className="w-full text-secontext hover:text-primary font-medium transition-colors"
                                            >Contact</a>
                                            <Link to="/login" onClick={() => setMenuIsOpen(false)} aria-label="go sign in page" className="bg-accent w-full text-center rounded-[10px] py-[8px] px-[20px]">Sign in</Link>
                                        </nav>
                                    </div>
                                    <div /></div>


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
                            </>
                        )}
                </nav>
            </header>
        </>
    )
}