import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"

export default function QuizLibrary() {
    const navigate = useNavigate()
    const handleCreate = () => {
        navigate("/teacher/quiz-library/010203040506")
    }

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col sm:flex-row gap-5 justify-between">
                    <p className="text-xl font-semibold whitespace-nowrap">Quiz Library (4)</p>
                    <div className="flex flex-row justify-end gap-5">
                        <div className="relative flex items-center">
                            <Icon icon="akar-icons:search" width={20} height={20} className="absolute left-2 text-gray-300" />
                            <input type="text" placeholder="Search..." className="bg-secondary  w-full rounded-4xl py-1 px-10 font-semibold text-gray-400 outline-0 border-2 border-gray-300" />
                        </div>
                        <div className="bg-accent text-secontext px-2 py-1.5 rounded-lg caret-transparent">
                            <button className="whitespace-nowrap font-semibold flex items-center px-4"><Icon icon="mdi:plus" className="font-semibold" width={20} height={20} />Create Quiz</button>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-15 max-h-[600px] p-5 overflow-auto">
                    <div onClick={handleCreate} className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-2 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="bg-[#3EFF25] px-3 py-0.5 text-secontext text-sm font-normal rounded-lg">active</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <p className="text-lg font-semibold py-2">Quiz 1</p>
                        <p>quiz about math and geometry</p>
                        <div className="flex gap-5">
                            <span>Subject :</span>
                            <span className="flex items-center bg-accent text-secontext font-semibold text-sm gap-1 py-1 px-3 rounded-lg"><Icon icon="mdi:tag" className="text-secontext" />math</span>
                        </div>
                        <span className="flex gap-2 items-center">Class: <p className="font-semibold text-sm">4/4</p></span>
                        <span className="flex gap-2 items-center">Create: <p className="font-semibold text-sm">01/01/2026</p></span>
                        <span className="flex gap-2 items-center">Expire: <p className="font-semibold text-sm">01/02/2026</p></span>
                        <div className="flex justify-between mt-3">
                            <span className="font-semibold text-sm">10 Questions</span>
                            <span className="font-semibold text-sm">100 Point</span>
                        </div>
                    </div>
                    <div className="flex  flex-col  gap-2 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="bg-[#FF2525] px-3 py-0.5 text-secontext text-sm font-normal rounded-lg">closed</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <p className="text-lg font-semibold py-2">Quiz 2</p>
                        <p>quiz about math and geometry</p>
                        <div className="flex gap-5">
                            <span>Subject :</span>
                            <span className="flex items-center bg-accent text-secontext font-semibold text-sm gap-1 py-1 px-3 rounded-lg"><Icon icon="mdi:tag" className="text-secontext" />math</span>
                        </div>
                        <span className="flex gap-2 items-center">Class: <p className="font-semibold text-sm">4/4</p></span>
                        <span className="flex gap-2 items-center">Create: <p className="font-semibold text-sm">01/01/2026</p></span>
                        <span className="flex gap-2 items-center">Expire: <p className="font-semibold text-sm">01/02/2026</p></span>
                        <div className="flex justify-between mt-3">
                            <span className="font-semibold text-sm">10 Questions</span>
                            <span className="font-semibold text-sm">100 Point</span>
                        </div>
                    </div>
                    <div className="flex  flex-col  gap-2 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="bg-[#FF2525] px-3 py-0.5 text-secontext text-sm font-normal rounded-lg">active</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <p className="text-lg font-semibold py-2">Quiz 3</p>
                        <p>quiz about math and geometry</p>
                        <div className="flex gap-5">
                            <span>Subject :</span>
                            <span className="flex items-center bg-accent text-secontext font-semibold text-sm gap-1 py-1 px-3 rounded-lg"><Icon icon="mdi:tag" className="text-secontext" />math</span>
                        </div>
                        <span className="flex gap-2 items-center">Class: <p className="font-semibold text-sm">4/4</p></span>
                        <span className="flex gap-2 items-center">Create: <p className="font-semibold text-sm">01/01/2026</p></span>
                        <span className="flex gap-2 items-center">Expire: <p className="font-semibold text-sm">01/02/2026</p></span>
                        <div className="flex justify-between mt-3">
                            <span className="font-semibold text-sm">10 Questions</span>
                            <span className="font-semibold text-sm">100 Point</span>
                        </div>
                    </div>
                    <div className="flex  flex-col  gap-2 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="bg-subtext px-3 py-0.5 text-secontext text-sm font-normal rounded-lg">active</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <p className="text-lg font-semibold py-2">Quiz 4</p>
                        <p>quiz about math and geometry</p>
                        <div className="flex gap-5">
                            <span>Subject :</span>
                            <span className="flex items-center bg-accent text-secontext font-semibold text-sm gap-1 py-1 px-3 rounded-lg"><Icon icon="mdi:tag" className="text-secontext" />math</span>
                        </div>
                        <span className="flex gap-2 items-center">Class: <p className="font-semibold text-sm">4/4</p></span>
                        <span className="flex gap-2 items-center">Create: <p className="font-semibold text-sm">01/01/2026</p></span>
                        <span className="flex gap-2 items-center">Expire: <p className="font-semibold text-sm">01/02/2026</p></span>
                        <div className="flex justify-between mt-3">
                            <span className="font-semibold text-sm">10 Questions</span>
                            <span className="font-semibold text-sm">100 Point</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}