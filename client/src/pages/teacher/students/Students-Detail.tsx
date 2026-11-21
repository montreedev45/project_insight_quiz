import account from '../../../assets/account.svg'
import performance from '../../../assets/performance.svg'
import { Link } from "react-router-dom"

export default function StudentsDetail() {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-2">
                    <Link to="/teacher/students" className="text-xl font-semibold">Students (4)</Link>
                    <svg
                        className="w-6 h-6 text-amber-500 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <p className="text-lg font-semibold">0123456789</p>
                </div>
                <div className="flex flex-col gap-5 px-5">
                    <span className="font-semibold text-xl">Personal Information</span>
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full transition-all gap-10 duration-300">
                        <div className="border-2 rounded-2xl border-subtext flex justify-center items-center p-6">
                            <img
                                src={account}
                                alt="profile image"
                                className="rounded-full w-[150px] h-[150px] object-cover"
                            />
                        </div>

                        <div className="flex flex-col xl:flex-row lg:col-span-2 justify-center items-start xl:items-center gap-5 p-10 xl:gap-16 border-2 rounded-2xl border-subtext min-w-0">
                            <div className="flex flex-col gap-4 text-base font-semibold">
                                <span className="flex flex-wrap gap-2">
                                    <span>ID :</span>
                                    <span className="font-normal">0123456789</span>
                                </span>
                                <span className="flex flex-wrap gap-2">
                                    <span>First Name :</span>
                                    <span className="font-normal">montree</span>
                                </span>
                                <span className="flex flex-wrap gap-2">
                                    <span>Last Name :</span>
                                    <span className="font-normal">chanuaklang</span>
                                </span>
                            </div>

                            <div className="flex flex-col gap-4 text-base font-semibold">
                                <span className="flex flex-wrap gap-2">
                                    <span>Email :</span>
                                    <span className="font-normal break-all">abc@gmail.com</span>
                                </span>
                                <span className="flex flex-wrap gap-2">
                                    <span>Quiz Taken :</span>
                                    <span className="font-normal">10</span>
                                </span>
                                <span className="flex flex-wrap gap-2">
                                    <span>Avg. Score (%) :</span>
                                    <span className="font-normal">80</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-5">
                    <div className='flex justify-between p-5 gap-10 w-full rounded-2xl border-2 border-subtext '>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-col sm:flex-row justify-between gap-5'>
                                <span className="font-semibold text-xl">Performance</span>
                                <div className='flex gap-5 justify-end'>
                                    <div className="bg-gray-300 text-heading py-1.5 px-2 rounded-lg caret-transparent">
                                        <select name="subject" id="" className="bg-gray-300 outline-0 border-0 px-4 font-semibold">
                                            <option value="" className="" selected>math</option>
                                        </select>
                                    </div>
                                    <div className="bg-gray-300 text-heading py-1.5 px-2 rounded-lg caret-transparent">
                                        <select name="quiz" id="" className="bg-gray-300 outline-0 border-0 px-4 font-semibold">
                                            <option value="" className="" selected>Quiz 1</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10 pt-10'>
                                <img src={performance} alt="" width={280} height={280} />
                                <img src={performance} alt="" width={280} height={280} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}