import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"
import account from '../../../assets/account.svg'

export default function Students() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/teacher/students/0123456789`)
    }
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                    <p className="text-xl font-semibold">Students (4)</p>
                    <div className="flex gap-5">
                        <div className="relative flex items-center">
                            <Icon icon="akar-icons:search" width={20} height={20} className="absolute left-2 text-gray-300" />
                            <input type="text" placeholder="Search..." className="bg-secondary min-w-[300px] w-full rounded-4xl py-1 px-10 font-semibold text-gray-400 outline-0 border-2 border-gray-300" />
                        </div>
                        <div className="bg-accent text-secontext px-2 py-1.5 rounded-lg caret-transparent">
                            <select name="class" id="" className="bg-accent outline-0 border-0 px-4 font-semibold">
                                <option value="4/1">4/1</option>
                                <option value="4/2">4/2</option>
                                <option value="4/3">4/3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="min-w-[1000px] overflow-x-auto px-5">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border border-secondary bg-subtext text-left">
                                <th className="border border-secondary px-10 py-3 text-center">Profile</th>
                                <th className="border border-secondary px-20 py-3">ID</th>
                                <th className="border border-secondary px-10 py-3">First Name</th>
                                <th className="border border-secondary px-10 py-3">Last Name</th>
                                <th className="border border-secondary px-10 py-3">Quiz Taken</th>
                                <th className="border border-secondary px-10 py-3">Avg. Score (%)</th>
                                <th className="border border-secondary px-10 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-subtext">
                                <td className="border border-subtext py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={account}
                                            alt="profile"
                                            className="border rounded-full border-subtext object-cover"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </td>
                                <td onClick={handleClick} className="border border-subtext px-5 py-3 cursor-pointer"><u>0123456789</u></td>
                                <td className="border border-subtext px-5 py-3">montree</td>
                                <td className="border border-subtext px-5 py-3">clanuanklang</td>
                                <td className="border border-subtext px-5 py-3">10</td>
                                <td className="border border-subtext px-5 py-3">80</td>
                                <td className="border border-subtext py-3 text-center">
                                    <div className="inline-flex justify-center items-center">
                                        <Icon icon="pinhead:three-dots-left-right" className="text-lg" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border border-subtext">
                                <td className="border border-subtext py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={account}
                                            alt="profile"
                                            className="border rounded-full border-subtext object-cover"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </td>
                                <td onClick={handleClick} className="border border-subtext px-5 py-3 cursor-pointer"><u>0123456789</u></td>
                                <td className="border border-subtext px-5 py-3">montree</td>
                                <td className="border border-subtext px-5 py-3">clanuanklang</td>
                                <td className="border border-subtext px-5 py-3">10</td>
                                <td className="border border-subtext px-5 py-3">80</td>
                                <td className="border border-subtext py-3 text-center">
                                    <div className="inline-flex justify-center items-center">
                                        <Icon icon="pinhead:three-dots-left-right" className="text-lg" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border border-subtext">
                                <td className="border border-subtext py-3 text-center">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={account}
                                            alt="profile"
                                            className="border rounded-full border-subtext object-cover"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </td>
                                <td onClick={handleClick} className="border border-subtext px-5 py-3 cursor-pointer"><u>0123456789</u></td>
                                <td className="border border-subtext px-5 py-3">montree</td>
                                <td className="border border-subtext px-5 py-3">clanuanklang</td>
                                <td className="border border-subtext px-5 py-3">10</td>
                                <td className="border border-subtext px-5 py-3">80</td>
                                <td className="border border-subtext py-3 text-center">
                                    <div className="inline-flex justify-center items-center">
                                        <Icon icon="pinhead:three-dots-left-right" className="text-lg" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}