import { Icon } from "@iconify/react"
import barChart from '../../../assets/barChart.svg'
import account from '../../../assets/account.svg'

export default function Analytics() {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                    <p className="text-xl font-semibold">Analytics</p>
                    <div className="flex gap-10">
                        <div className="bg-accent text-heading text-secontext py-1.5 px-6 rounded-lg caret-transparent">
                            <select name="menu" id="" className="bg-accent outline-0 border-0 px-4 font-semibold">
                                <option value="" className="" selected>All</option>
                            </select>
                        </div>
                        <div className="bg-accent text-heading text-secontext py-1.5 px-6 rounded-lg caret-transparent">
                            <select name="menu" id="" className="bg-accent outline-0 border-0 px-4 font-semibold">
                                <option value="" className="" selected>Math</option>
                            </select>
                        </div>
                        <div className="bg-accent text-heading text-secontext py-1.5 px-6 rounded-lg caret-transparent">
                            <select name="menu" id="" className="bg-accent outline-0 border-0 px-4 font-semibold">
                                <option value="" className="" selected>4/1</option>
                            </select>
                        </div>
                        <div className="bg-accent text-heading text-secontext py-1.5 px-6 rounded-lg caret-transparent">
                            <select name="menu" id="" className="bg-accent outline-0 border-0 px-4 font-semibold">
                                <option value="" className="" selected>All</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap lg:px-20 gap-10">
                    <div className="flex gap-3 flex-col min-w-[200px] max-w-[250px] w-full font-semibold border border-l-6 px-4 py-4 border-gray-400 rounded-xl">
                        <span className="flex items-center justify-between">Average Score <Icon icon="mdi:star" className="text-yellow-300" width={25} /></span>
                        <span className="text-2xl">20</span>
                    </div>
                    <div className="flex gap-3 flex-col min-w-[200px] max-w-[250px] w-full font-semibold border border-l-6 px-4 py-4 border-gray-400 rounded-xl">
                        <span className="flex items-center justify-between">Weakest <Icon icon="mdi:dislike" className="text-red-400" width={25} /></span>
                        <span className="text-2xl">Fraction</span>
                    </div>
                    <div className="flex gap-3 flex-col min-w-[200px] max-w-[250px] w-full font-semibold border border-l-6 px-4 py-4 border-gray-400 rounded-xl">
                        <span className="flex items-center justify-between">Strongest <Icon icon="mdi:like" className="text-green-400" width={25} /></span>
                        <span className="text-2xl">Statistics</span>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-xl font-semibold">Topic by Average Score (%)</span>
                    <div className="w-full flex justify-start">
                        <img src={barChart} alt="Bar Chart" width={700} height={700} />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-xl font-semibold">Students Needing Support</span>
                    <div className="min-w-[1000px] overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border border-secondary bg-subtext text-left">
                                    <th className="border border-secondary px-10 py-3 text-center">Students</th>
                                    <th className="border border-secondary px-20 py-3">Class</th>
                                    <th className="border border-secondary px-10 py-3">Weakest</th>
                                    <th className="border border-secondary px-10 py-3">Score</th>
                                    <th className="border border-secondary px-10 py-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-subtext">
                                    <td className="flex items-center gap-3  border-subtext ps-5 py-5">
                                        <img src={account} alt="profile" className="border rounded-full border-subtext" width={40} height={40} />
                                        <div className="flex flex-col text-sm pe-5 font-semibold">
                                            <p>Mr.montree.chanuanklang</p>
                                            <p className="font-normal">abc@gmail.com</p>
                                        </div>
                                    </td>
                                    <td className="border border-subtext font-semibold px-5 py-3">4/1</td>
                                    <td className="border border-subtext font-semibold px-5 py-3"><span className="text-red-400">Fraction</span></td>
                                    <td className="border border-subtext font-semibold px-5 py-3"><span className="text-red-400">25</span>/100</td>
                                    <td className="border border-subtext font-semibold py-3 text-center">
                                        <div className="inline-flex justify-center items-center">
                                            <Icon icon="pinhead:three-dots-left-right" className="text-lg" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}