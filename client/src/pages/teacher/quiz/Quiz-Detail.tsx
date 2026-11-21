import { useState } from "react";
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

export default function QuizDetail() {
    const [isRightOpen, setIsRightOpen] = useState(false);
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <Link to="/teacher/quiz-library" className="text-xl font-semibold">Quiz Library (4)</Link>
                    <div className="flex items-center gap-2">
                        <svg
                            className="w-6 h-6 text-amber-500 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <p className="text-lg font-semibold">Unknown Quiz <span className="text-gray-400 text-sm ps-2">saving...</span></p>
                    </div>
                </div>

                <div className="border border-black h-full rounded-lg pt-4">
                    <div className="flex flex-col sm:flex-row gap-5 justify-between h-fit pb-5 px-5">
                        <div className="flex flex-col gap-3">
                            <span className="text-2xl font-semibold">Unknown Quiz</span>
                            <p>No Descriptions</p>
                            <div className="flex gap-3 mt-2 items-center">
                                <span className="font-semibold text-sm">Deadline : </span>
                                <span className=""><input type="date" value="2026-11-30" className="font-semibold text-sm border px-2 py-1 rounded-lg" /></span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-5">
                            <div className="flex gap-2 items-center">
                                <span className="text-sm font-semibold">Subjects :</span>
                                <span className="border rounded-lg flex items-center justify-end px-3 py-0.5 min-w-[100px]">
                                    <select name="subject" id="" className="px-2 font-semibold text-sm">
                                        <option value="math">math</option>
                                    </select>
                                </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-sm font-semibold">Class :</span>
                                <span className="border rounded-lg flex items-center justify-end px-3 py-0.5 min-w-[100px]">
                                    <select name="class" id="" className="px-2 font-semibold text-sm">
                                        <option value="4/1">4/1</option>
                                    </select>
                                </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-sm font-semibold">Type Choice :</span>
                                <span className="border rounded-lg flex items-center justify-end px-3 py-0.5 min-w-[100px]">
                                    <select name="type-choice" id="" className="px-2 font-semibold text-sm">
                                        <option value="abc">abc</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full min-h-screen">
                        <div className="flex flex-col w-full xl:w-3/4 px-4 sm:px-6 py-5 border-t xl:border-r">
                            <div className="flex pb-5 justify-between items-start">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold">Question 1</span>
                                    <input type="text" name="" id="" value="90 * 10 = ?" className="border border-subtext px-2 py-0.5 rounded-md" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-400 p-1 w-fit rounded-sm">
                                        <Icon icon="mdi:trash" className="text-secontext" width={20} height={20} />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setIsRightOpen(true)}
                                        className="p-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 xl:hidden"
                                        aria-label="Open question outline"
                                    >
                                        <Icon icon="mdi:menu" width={20} height={20} />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold">Answer</span>
                                    <div className="flex gap-3 mt-2 ps-5 items-center">
                                        <span className="font-semibold text-sm">Type : </span>
                                        <span className="border border-subtext rounded-lg flex items-center justify-start ps-3 py-0.5 min-w-[80px]">
                                            <select name="type-choice" id="" className="font-normal text-sm h-[24px]">
                                                <option value="radio">radio</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="flex gap-3 mt-2 ps-11.5 items-center">
                                            <span className="font-semibold text-sm">a. </span>
                                            <span className="border border-subtext rounded-lg flex items-center justify-end px-3 py-0.5">
                                                <input type="text" value="900" className="w-13.5" />
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span>answer : </span>
                                            <Icon icon="mdi:toggle-switch" width={30} height={30} className="text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="flex gap-3 mt-2 ps-11.5 items-center">
                                            <span className="font-semibold text-sm">b. </span>
                                            <span className="border border-subtext rounded-lg flex items-center justify-end px-3 py-0.5">
                                                <input type="text" value="800" className="w-13.5" />
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span>answer : </span>
                                            <Icon icon="mdi:toggle-switch-off" width={30} height={30} className="text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="flex gap-3 mt-2 ps-11.5 items-center">
                                            <span className="font-semibold text-sm">c. </span>
                                            <span className="border border-subtext rounded-lg flex items-center justify-end px-3 py-0.5">
                                                <input type="text" value="700" className="w-13.5" />
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span>answer : </span>
                                            <Icon icon="mdi:toggle-switch-off" width={30} height={30} className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5 gap-5">
                                    <span className="font-semibold text-sm">Point</span>
                                    <input type="text" name="" id="" value="2" className="border px-2 py-0.5 rounded-lg border-subtext text-center w-10" />
                                </div>
                                <div className="flex items-center mt-5 gap-5">
                                    <span className="font-semibold text-sm">Tags</span>
                                    <span className="border border-subtext rounded-lg flex items-center justify-start px-3 py-0.5 min-w-[80px]">
                                        <select name="tags" id="" className="font-normal text-sm h-[24px]">
                                            <option value="equation">Equation</option>
                                        </select>
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 mt-10 mb-5">
                                    <button className="bg-primary px-4 py-1.5 text-sm font-semibold flex justify-center items-center gap-1 rounded-lg text-secontext min-w-[150px]"><Icon icon="mdi:plus" width={20} height={20} />Add Question</button>
                                    <button className="bg-accent px-4 py-1.5 text-sm font-semibold flex justify-center items-center gap-1 rounded-lg text-secontext min-w-[150px]"><Icon icon="mdi:earth" width={20} height={20} />Public Quiz</button>
                                </div>
                            </div>
                        </div>

                        {isRightOpen && (
                            <div
                                className="fixed inset-0 z-30 bg-black/40 xl:hidden"
                                onClick={() => setIsRightOpen(false)}
                                aria-hidden="true"
                            />
                        )}
                        <aside
                            className={`fixed inset-y-0 right-0 z-40 w-2/4 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-secondary xl:border-t p-6 flex flex-col gap-4 overflow-y-auto transition-transform duration-200 ease-in-out xl:static xl:translate-x-0 ${isRightOpen ? "translate-x-0" : "translate-x-full"
                                }`}
                        >
                            <div className="flex items-center justify-between px-3 py-2 rounded-md xl:hidden">
                                <span className="font-semibold">Questions</span>
                                <button
                                    type="button"
                                    onClick={() => setIsRightOpen(false)}
                                    className="p-1 rounded-md hover:bg-red-400/40"
                                    aria-label="Close question outline"
                                >
                                    <Icon icon="mdi:close" width={22} height={22} />
                                </button>
                            </div>

                            <div className="flex flex-col justify-between p-5 bg-gray-200 border-2 min-h-[100px] border-gray-300 rounded-lg font-semibold">
                                <div className="flex items-center justify-between">
                                    <span>Q1</span>
                                    <Icon icon="akar-icons:check" className="text-[#3EFF25]" width={30} height={30} />
                                </div>
                                <span className="text-sm text-gray-700 mt-2">Answer a.</span>
                            </div>

                            <div className="flex flex-col justify-between p-5 bg-gray-200 border-2 min-h-[100px] border-gray-300 rounded-lg font-semibold">
                                <div className="flex items-center justify-between">
                                    <span>Q2</span>
                                    <Icon icon="ic:round-warning" className="text-[#eba91a]" width={30} height={30} />
                                </div>
                            </div>

                            <div className="flex flex-col justify-between p-5 bg-gray-200 border-2 min-h-[100px] border-gray-300 rounded-lg font-semibold">
                                <div className="flex items-center justify-between">
                                    <span>Q3</span>
                                    <Icon icon="ic:round-warning" className="text-[#eba91a]" width={30} height={30} />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}