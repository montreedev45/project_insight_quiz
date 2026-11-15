import chart from '../../assets/chart.svg'

export default function DashboardTeacher() {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                    <p className="text-xl font-semibold">Dashboard</p>
                    <div className="bg-accent text-secontext px-2 py-1.5 rounded-lg caret-transparent">
                        <select name="menu" id="" className="bg-accent outline-0 border-0 px-4 font-semibold">
                            <option value="" className="" selected>Create</option>
                            <option value="1">Quiz</option>
                            <option value="2">Subject</option>
                            <option value="3">Class</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap lg:px-20 gap-10">
                    <div className="flex flex-col min-w-[200px] max-w-[250px] w-full font-semibold border border-l-6 px-4 py-4 border-gray-400 rounded-xl">
                        <span>Total Quiz</span>
                        <span>20</span>
                    </div>
                    <div className="flex flex-col min-w-[200px] max-w-[250px] w-full font-semibold border border-l-6 px-4 py-4 border-gray-400 rounded-xl">
                        <span>Total Subjects</span>
                        <span>12</span>
                    </div>
                    <div className="flex flex-col min-w-[200px] max-w-[250px] w-full font-semibold border border-l-6 px-4 py-4 border-gray-400 rounded-xl">
                        <span>Total Classes</span>
                        <span>6</span>
                    </div>
                    <div className="flex flex-col min-w-[200px] max-w-[250px] w-full font-semibold border border-l-6 px-4 py-4 border-gray-400 rounded-xl">
                        <span>Total Students</span>
                        <span>70</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-5 mt-10">
                    <div className="flex gap-10">
                        <div className="bg-gray-300 text-heading py-1.5 px-2 rounded-lg caret-transparent">
                            <select name="menu" id="" className="bg-gray-300 outline-0 border-0 px-4 font-semibold">
                                <option value="" className="" selected>All</option>
                            </select>
                        </div>
                        <div className="bg-gray-300 text-heading py-1.5 px-2 rounded-lg caret-transparent">
                            <select name="menu" id="" className="bg-gray-300 outline-0 border-0 px-4 font-semibold">
                                <option value="" className="" selected>Math</option>
                            </select>
                        </div>
                        <div className="bg-gray-300 text-heading py-1.5 px-2 rounded-lg caret-transparent">
                            <select name="menu" id="" className="bg-gray-300 outline-0 border-0 px-4 font-semibold">
                                <option value="" className="" selected>4/1</option>
                            </select>
                        </div>
                        <div className="bg-gray-300 text-heading py-1.5 px-2 rounded-lg caret-transparent">
                            <select name="menu" id="" className="bg-gray-300 outline-0 border-0 px-4 font-semibold">
                                <option value="" className="" selected>All</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <img src={chart} alt="chart of analytics page" width={600} height={450}/>
                    </div>
                </div>
            </div>
        </>
    )
}