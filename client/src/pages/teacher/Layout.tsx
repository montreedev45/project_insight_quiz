import { Outlet } from "react-router-dom"

import SidebarTeacher from "../../components/Sidebar-teacher"
import TopbarTeacher from "../../components/Topbar-teacher"

export default function LayoutTeacher() {
    return (
        <>
            <div className="flex h-screen w-full overflow-hidden">
                <SidebarTeacher/>

                <div className="flex flex-col flex-1 h-full overflow-hidden">
                    <TopbarTeacher/>
                    <main className="flex-1 overflow-y-auto py-5 px-10">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}