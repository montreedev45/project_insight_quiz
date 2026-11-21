import { Icon } from "@iconify/react"

export default function SubjectsDetailClasses() {
    return (
        <>
            <div className="w-full overflow-x-auto max-w-[800px]">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border border-secondary bg-subtext">
                            <th className="border border-secondary px-10 py-2">Class</th>
                            <th className="border border-secondary px-10 py-2">Total Students</th>
                            <th className="border border-secondary px-10 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">4/1</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">4/2</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">4/3</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">4/4</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">4/5</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}