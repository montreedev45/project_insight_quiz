import { Icon } from "@iconify/react"

export default function SubjectsDetailQuiz() {
    return (
        <>
            <div className="w-full overflow-x-auto max-w-[800px]">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border border-secondary bg-subtext">
                            <th className="border border-secondary px-10 py-2">Quiz</th>
                            <th className="border border-secondary px-10 py-2">Questions</th>
                            <th className="border border-secondary px-10 py-2">Status</th>
                            <th className="border border-secondary px-10 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">quiz 1</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border border-subtext ps-5 py-5">closed</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">quiz 2</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border border-subtext ps-5 py-5">draft</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">quiz 3</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border border-subtext ps-5 py-5">draft</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                        <tr className="border border-subtext">
                            <td className="border border-subtext ps-5 py-5">quiz 4</td>
                            <td className="border border-subtext ps-5 py-5">10</td>
                            <td className="border border-subtext ps-5 py-5">draft</td>
                            <td className="border-0 flex mt-6 justify-center items-center"><Icon icon="pinhead:three-dots-left-right" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}