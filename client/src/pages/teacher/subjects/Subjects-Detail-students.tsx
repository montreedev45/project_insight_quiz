import { Icon } from "@iconify/react"
import account from '../../../assets/account.svg'
export default function SubjectsDetailStudents() {
    return (
        <>
            <div className="min-w-[800px]">
                <table className="w-full ">
                    <thead>
                        <tr className="border border-secondary bg-subtext">
                            <th className="border border-secondary px-10 py-2">Students</th>
                            <th className="border border-secondary px-10 py-2">Enrolled Class</th>
                            <th className="border border-secondary px-10 py-2">Quiz Taken</th>
                            <th className="border border-secondary px-10 py-2">AVG. Score</th>
                            <th className="border border-secondary px-10 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-subtext">
                            <td className="flex items-center gap-3  border-subtext ps-5 py-5">
                                <img src={account} alt="profile" className="border rounded-full border-subtext" width={40} height={40} />
                                <div className="flex flex-col text-sm pe-5 font-semibold">
                                    <p>Mr.montree.dev</p>
                                    <p className="font-normal">montree.dev45</p>
                                </div>
                            </td>
                            <td className="border border-subtext ps-5 py-5">MATH41</td>
                            <td className="border border-subtext ps-5 py-5">9/10</td>
                            <td className="border border-subtext ps-5 py-5">70</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="flex items-center gap-3  border-subtext ps-5 py-5">
                                <img src={account} alt="profile" className="border rounded-full border-subtext" width={40} height={40} />
                                <div className="flex flex-col text-sm pe-5 font-semibold">
                                    <p>Mr.montree.dev</p>
                                    <p className="font-normal">montree.dev45</p>
                                </div>
                            </td>
                            <td className="border border-subtext ps-5 py-5">MATH41</td>
                            <td className="border border-subtext ps-5 py-5">9/10</td>
                            <td className="border border-subtext ps-5 py-5">70</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}