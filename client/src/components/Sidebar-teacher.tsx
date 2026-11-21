import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

interface SidebarTeacherProps {
    isOpen: boolean;
    onClose: () => void;
}

const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 transition-colors flex items-center gap-4 hover:bg-accent ${isActive ? "bg-accent" : ""
    } py-2 font-semibold text-lg rounded-md`;

export default function SidebarTeacher({ isOpen, onClose }: SidebarTeacherProps) {
    return (
        <aside
            className={`fixed inset-y-0 left-0 z-40 w-72 shrink-0 bg-primary text-secondary px-4 flex flex-col justify-between overflow-y-auto transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div className="pt-5 flex flex-col gap-3">
                <div className="flex items-center justify-between mb-5 lg:justify-center">
                    <Link
                        to="/"
                        onClick={onClose}
                        className="font-semibold text-3xl sm:text-4xl text-secondary flex items-center gap-1"
                        aria-label="InsightQuiz"
                    >
                        <Icon icon="andrsrxn:lightbulb-sparkle" width={36} height={36} />
                        <span>InsightQuiz</span>
                    </Link>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-md hover:bg-accent lg:hidden"
                        aria-label="Close sidebar"
                    >
                        <Icon icon="mdi:close" width={24} height={24} />
                    </button>
                </div>

                <NavLink to="/teacher/dashboard" onClick={onClose} className={navClass}>
                    <Icon icon="basil:chart-pie-outline" width={28} height={28} />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/teacher/quiz-library" onClick={onClose} className={navClass}>
                    <Icon icon="iconoven:exam" width={28} height={28} />
                    <span>Quiz Library</span>
                </NavLink>
                <NavLink to="/teacher/subjects" onClick={onClose} className={navClass}>
                    <Icon icon="akar-icons:tag" width={28} height={28} />
                    <span>Subjects</span>
                </NavLink>
                <NavLink to="/teacher/classes" onClick={onClose} className={navClass}>
                    <Icon icon="akar-icons:home-alt1" width={28} height={28} />
                    <span>Classes</span>
                </NavLink>
                <NavLink to="/teacher/students" onClick={onClose} className={navClass}>
                    <Icon icon="akar-icons:people-group" width={28} height={28} />
                    <span>Students</span>
                </NavLink>
                <NavLink to="/teacher/analytics" onClick={onClose} className={navClass}>
                    <Icon icon="carbon:data-analytics" width={28} height={28} />
                    <span>Analytics</span>
                </NavLink>
            </div>

            <div className="flex flex-col gap-3 py-6">
                <NavLink to="/teacher/account" onClick={onClose} className={navClass}>
                    <Icon icon="ic:outline-account-circle" width={28} height={28} />
                    <span>Account</span>
                </NavLink>
                <Link
                    to="/logout"
                    onClick={onClose}
                    className="px-4 transition-colors flex items-center gap-4 hover:bg-red-400 py-2 font-semibold text-lg rounded-md"
                >
                    <Icon icon="mdi:logout" width={28} height={28} />
                    <span>Log out</span>
                </Link>
            </div>
        </aside>
    );
}