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
                    <div className='flex flex-wrap gap-10 w-full'>
                        <div className='border-2 rounded-2xl border-subtext py-5 px-20 flex justify-center'>
                            <img src={account} alt="profile image" className='border-2 border-subtext rounded-full' width={150} height={150} />
                        </div>
                        <div className='flex justify-center items-center gap-30 border-2 rounded-2xl border-subtext grow'>
                            <div className='flex flex-col gap-5 text-lg font-semibold'>
                                <span className='flex gap-3'>ID : <span className='font-normal'>0123456789</span></span>
                                <span className='flex gap-3'>First Name : <span className='font-normal'>montree</span></span>
                                <span className='flex gap-3'>Last Name : <span className='font-normal'>chanuaklang</span></span>
                            </div>
                            <div className='flex flex-col gap-5 text-lg font-semibold'>
                                <span className='flex gap-3'>Email : <span className='font-normal'>abc@gmail.com</span></span>
                                <span className='flex gap-3'>Quiz Taken : <span className='font-normal'>10</span></span>
                                <span className='flex gap-3'>Avg. Score (%) :<span className='font-normal'>80</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-5">
                    <div className='flex justify-between p-5 gap-10 w-full rounded-2xl border-2 border-subtext '>
                        <div className='flex flex-col w-full'>
                            <div className='flex justify-between gap-5'>
                                <span className="font-semibold text-xl">Performance</span>
                                <div className='flex gap-5'>
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
                            <div className='w-full flex justify-center gap-20'>
                                <img src={performance} alt="" width={320} height={320} />
                                <img src={performance} alt="" width={320} height={320} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}