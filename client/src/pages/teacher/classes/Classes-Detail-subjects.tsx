import { Icon } from "@iconify/react";

export default function ClassesDetailSubjects() {
    return (
        <>
            <div className="min-w-[800px]">
                <table className="w-full ">
                    <thead>
                        <tr className="border border-secondary bg-subtext">
                            <th className="border border-secondary px-10 py-2">Subject</th>
                            <th className="border border-secondary px-10 py-2">Quiz</th>
                            <th className="border border-secondary px-10 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">Mathematry</td>
                            <td className="border border-subtext ps-5 py-5">3</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">Biology</td>
                            <td className="border border-subtext ps-5 py-5">2</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}