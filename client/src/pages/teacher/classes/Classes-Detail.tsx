import { Link, NavLink, Outlet } from 'react-router-dom'

export default function ClassesDetail() {

    const classId = "010203040506"
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-2">
                    <Link to="/teacher/classes" className="text-xl font-semibold">Classes (4)</Link>
                    <svg
                        className="w-6 h-6 text-amber-500 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <p className="text-lg font-semibold">M.4/1</p>
                </div>
                <div className="border h-[700px] rounded-lg">
                    <div className="grid border-b-0 rounded-t-lg border-heading grid-cols-4 font-semibold bg-gray-200">
                        <NavLink to={`/teacher/classes/${classId}/general`} className={({ isActive }) => `${isActive ? "text-accent bg-white border-e" : "border-b border-e"} py-2 px-10 rounded-tl-lg border-heading`}>General</NavLink>
                        <NavLink to={`/teacher/classes/${classId}/subjects`} className={({ isActive }) => `${isActive ? "text-accent  bg-white border-e" : "border-e border-b"} py-2 px-10 border-heading`}>Subjects</NavLink>
                        <NavLink to={`/teacher/classes/${classId}/quiz`} className={({ isActive }) => `${isActive ? "text-accent bg-white border-e" : "border-e border-b"} py-2 px-10 border-heading`}>Quiz</NavLink>
                        <NavLink to={`/teacher/classes/${classId}/students`} className={({ isActive }) => `${isActive ? "text-accent bg-white" : "border-b"} py-2 px-10 rounded-tr-lg border-heading`}>Students</NavLink>
                    </div>
                    <div className="p-20 flex justify-center">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}