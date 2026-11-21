import { Icon } from '@iconify/react'
import account from '../../../assets/account.svg'

export default function ClassesDetailStudents() {
    return (
        <>
            <div className="w-full overflow-x-auto max-w-[800px]">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border border-secondary bg-subtext text-left whitespace-nowrap">
                            <th className="border border-secondary px-10 py-3 text-center">Profile</th>
                            <th className="border border-secondary px-20 py-3">ID</th>
                            <th className="border border-secondary px-10 py-3">First Name</th>
                            <th className="border border-secondary px-10 py-3">Last Name</th>
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
                            <td className="border border-subtext px-5 py-3">0123456789</td>
                            <td className="border border-subtext px-5 py-3">montree</td>
                            <td className="border border-subtext px-5 py-3">clanuanklang</td>
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
                            <td className="border border-subtext px-5 py-3">0123456789</td>
                            <td className="border border-subtext px-5 py-3">montree</td>
                            <td className="border border-subtext px-5 py-3">clanuanklang</td>
                            <td className="border border-subtext py-3 text-center">
                                <div className="inline-flex justify-center items-center">
                                    <Icon icon="pinhead:three-dots-left-right" className="text-lg" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}