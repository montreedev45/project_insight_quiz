import { Icon } from "@iconify/react"

export default function SubjectsDetailTags() {
    return (
        <>
            <div className="w-full overflow-x-auto max-w-[800px]">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border border-secondary bg-subtext">
                            <th className="border border-secondary px-10 py-2">Tags</th>
                            <th className="border border-secondary px-10 py-2">Usage</th>
                            <th className="border border-secondary px-10 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">Equation</td>
                            <td className="border border-subtext ps-5 py-5">23</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">Fraction</td>
                            <td className="border border-subtext ps-5 py-5">11</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}