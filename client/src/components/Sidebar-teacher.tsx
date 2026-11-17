import { Link, NavLink } from "react-router-dom"
import { Icon } from "@iconify/react"

export default function SidebarTeacher() {
    return (
        <>
            <aside className="w-70 bg-primary text-secondary px-4 flex flex-col justify-between">
                <div className="pt-5 flex flex-col gap-3">
                    <Link to="/" className="font-semibold text-4xl text-secondary flex justify-center items-center gap-1 mb-5" aria-label="InsightQuiz"><Icon icon="andrsrxn:lightbulb-sparkle" width={40} height={40} /> InsightQuiz</Link>
                    <NavLink to="/teacher/dashboard" className={({isActive}) => `px-4 transition-colors flex items-center gap-4 hover:bg-accent ${isActive ? "bg-accent" : ""} py-2 font-semibold text-lg`}><Icon icon="basil:chart-pie-outline" width={30} height={30} />Dashboard</NavLink>                    
                    <NavLink to="/teacher/quiz-library" className={({isActive}) => `px-4 transition-colors flex items-center gap-4 hover:bg-accent ${isActive ? "bg-accent" : ""} py-2 font-semibold text-lg`}><Icon icon="iconoven:exam" width={30} height={30} />Quiz Library</NavLink>
                    <NavLink to="/teacher/subjects" className={({isActive}) => `px-4 transition-colors flex items-center gap-4 hover:bg-accent ${isActive ? "bg-accent" : ""} py-2 font-semibold text-lg`}><Icon icon="akar-icons:tag" width={30} height={30} />Subjects</NavLink>
                    <NavLink to="/teacher/classes" className={({isActive}) => `px-4 transition-colors flex items-center gap-4 hover:bg-accent ${isActive ? "bg-accent" : ""} py-2 font-semibold text-lg`}><Icon icon="akar-icons:home-alt1" width={30} height={30} />Classes</NavLink>
                    <NavLink to="/teacher/students" className={({isActive}) => `px-4 transition-colors flex items-center gap-4 hover:bg-accent ${isActive ? "bg-accent" : ""} py-2 font-semibold text-lg`}><Icon icon="akar-icons:people-group" width={30} height={30} />Students</NavLink>
                    <NavLink to="/teacher/analytics" className={({isActive}) => `px-4 transition-colors flex items-center gap-4 hover:bg-accent ${isActive ? "bg-accent" : ""} py-2 font-semibold text-lg`}><Icon icon="carbon:data-analytics" width={30} height={30} />Analytics</NavLink>
                </div>
                <div className="flex flex-col gap-3 pb-10">
                    <NavLink to="/teacher/account" className={({isActive}) => `px-4 transition-colors flex items-center gap-4 hover:bg-accent ${isActive ? "bg-accent" : ""} py-2 font-semibold text-lg`}><Icon icon="ic:outline-account-circle" width={30} height={30} />Account</NavLink>
                    <Link to="/logout" className="px-4 transition-colors flex items-center gap-4 hover:bg-red-400 py-2 font-semibold text-lg"><Icon icon="mdi:logout" width={30} height={30} />Log out</Link>
                </div>
            </aside>
        </>
    )
}