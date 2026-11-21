import { useState } from "react";
import { Outlet } from "react-router-dom"

import SidebarTeacher from "../../components/Sidebar-teacher"
import TopbarTeacher from "../../components/Topbar-teacher"

export default function LayoutTeacher() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Mobile backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            <SidebarTeacher
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
                <TopbarTeacher onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto py-5 px-4 sm:px-6 lg:px-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}