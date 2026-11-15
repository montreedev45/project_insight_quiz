import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"

export default function SidebarTeacher() {
    return (
        <>
            <aside className="w-70 bg-primary text-secondary px-4 flex flex-col justify-between">
                <div className="pt-5 flex flex-col gap-3">
                    <Link to="/" className="font-semibold text-4xl text-secondary flex justify-center items-center gap-1 mb-5" aria-label="InsightQuiz"><Icon icon="andrsrxn:lightbulb-sparkle" width={40} height={40} /> InsightQuiz</Link>
                    <Link to="/teacher/dashboard" className="px-4 transition-colors flex items-center gap-4 hover:bg-accent py-2  font-semibold text-lg"><Icon icon="basil:chart-pie-outline" width={30} height={30} />Dashboard</Link>
                    <Link to="/teacher/quiz-library" className="px-4 transition-colors flex items-center gap-4 hover:bg-accent py-2 font-semibold text-lg"><Icon icon="iconoven:exam" width={30} height={30} />Quiz Library</Link>
                    <Link to="/teacher/subjects" className="px-4 transition-colors flex items-center gap-4 hover:bg-accent py-2 font-semibold text-lg"><Icon icon="akar-icons:tag" width={30} height={30} />Subjects</Link>
                    <Link to="/teacher/classes" className="px-4 transition-colors flex items-center gap-4 hover:bg-accent py-2 font-semibold text-lg"><Icon icon="akar-icons:home-alt1" width={30} height={30} />Classes</Link>
                    <Link to="/teacher/students" className="px-4 transition-colors flex items-center gap-4 hover:bg-accent py-2 font-semibold text-lg"><Icon icon="akar-icons:people-group" width={30} height={30} />Students</Link>
                    <Link to="/teacher/analytics" className="px-4 transition-colors flex items-center gap-4 hover:bg-accent py-2 font-semibold text-lg"><Icon icon="carbon:data-analytics" width={30} height={30} />Analytics</Link>
                </div>
                <div className="flex flex-col gap-3 pb-10">
                    <Link to="/teacher/account" className="px-4 transition-colors flex items-center gap-4 hover:bg-accent py-2 font-semibold text-lg"><Icon icon="ic:outline-account-circle" width={30} height={30} />Account</Link>
                    <Link to="/logout" className="px-4 transition-colors flex items-center gap-4 hover:bg-red-400 py-2 font-semibold text-lg"><Icon icon="mdi:logout" width={30} height={30} />Log out</Link>
                </div>
            </aside>
        </>
    )
}