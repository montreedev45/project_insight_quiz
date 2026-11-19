import { Link, NavLink, Outlet } from "react-router-dom"
import { Icon } from "@iconify/react"

export default function Account() {
    const teacherId = "0123456789"

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-2">
                    <Link to="/teacher/account" className="text-xl font-semibold">Account</Link>
                </div>
                <div className="border h-[700px] rounded-lg">
                    <div className="grid border-b-0 rounded-t-lg border-heading grid-cols-3 font-semibold bg-gray-200">
                        <NavLink to={`/teacher/account/${teacherId}/general`} className={({ isActive }) => `${isActive ? "text-accent bg-white border-e" : "border-b border-e"} py-2 px-10 rounded-tl-lg border-heading`}>General</NavLink>
                        <NavLink to={`/teacher/account/${teacherId}/security`} className={({ isActive }) => `${isActive ? "text-accent  bg-white border-e" : "border-e border-b"} py-2 px-10 border-heading`}>Security</NavLink>
                        <NavLink to={`/teacher/account/${teacherId}/notifications`} className={({ isActive }) => `${isActive ? "text-accent bg-white border-e" : "border-e border-b"} py-2 px-10 border-heading`}>Notifications</NavLink>
                    </div>
                    <div className="p-20 flex justify-center">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}