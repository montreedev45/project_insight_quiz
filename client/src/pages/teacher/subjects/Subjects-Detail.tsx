import { Link, NavLink, Outlet } from "react-router-dom"


export default function SubjectsDetail() {
    const subjectId = "010203040506"
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-2">
                    <Link to="/teacher/subjects" className="text-xl font-semibold">Subjects (4)</Link>
                    <svg
                        className="w-6 h-6 text-amber-500 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <p className="text-lg font-semibold">Mathematics</p>
                </div>
                <div className="border h-[700px] rounded-lg">
                    <div className="grid border-b-0 rounded-t-lg border-heading grid-cols-5 font-semibold bg-gray-200">
                        <NavLink to={`/teacher/subjects/${subjectId}/general`} className={({ isActive }) => `${isActive ? "text-accent bg-white border-e" : "border-b border-e"} py-2 px-10 rounded-tl-lg border-heading`}>General</NavLink>
                        <NavLink to={`/teacher/subjects/${subjectId}/tags`} className={({ isActive }) => `${isActive ? "text-accent  bg-white border-e" : "border-e border-b"} py-2 px-10 border-heading`}>Tags</NavLink>
                        <NavLink to={`/teacher/subjects/${subjectId}/classes`} className={({ isActive }) => `${isActive ? "text-accent bg-white border-e" : "border-e border-b"} py-2 px-10 border-heading`}>Classes</NavLink>
                        <NavLink to={`/teacher/subjects/${subjectId}/quiz`} className={({ isActive }) => `${isActive ? "text-accent bg-white border-e" : "border-e border-b"} py-2 px-10 border-heading`}>Quiz</NavLink>
                        <NavLink to={`/teacher/subjects/${subjectId}/students`} className={({ isActive }) => `${isActive ? "text-accent bg-white" : "border-b"} py-2 px-10 rounded-tr-lg border-heading`}>Students</NavLink>
                    </div>
                    <div className="p-20 flex justify-center">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}