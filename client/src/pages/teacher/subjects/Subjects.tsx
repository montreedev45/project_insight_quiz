import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"

export default function Subjects() {
    const navigate = useNavigate()

    const handleCreate = () => {
        navigate(`/teacher/subjects/010203040506/general`)
    }
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col sm:flex-row gap-5 justify-between">
                    <p className="text-xl font-semibold whitespace-nowrap">Subjects (4)</p>
                    <div className="flex flex-row justify-end gap-5">
                        <div className="relative flex items-center">
                            <Icon icon="akar-icons:search" width={20} height={20} className="absolute left-2 text-gray-300" />
                            <input type="text" placeholder="Search..." className="bg-secondary  w-full rounded-4xl py-1 px-10 font-semibold text-gray-400 outline-0 border-2 border-gray-300" />
                        </div>
                        <div className="bg-accent text-secontext px-2 py-1.5 rounded-lg caret-transparent">
                            <button className="whitespace-nowrap font-semibold flex items-center px-4"><Icon icon="mdi:plus" className="font-semibold" width={20} height={20} />Create Subject</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-15 max-h-[600px] p-5 overflow-auto">
                    <div onClick={handleCreate} className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-2 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="py-0.5 gap-2 flex items-center text-heading text-sm font-semibold rounded-lg"><Icon icon="mdi:tag" width={20} height={20} className="text-accent" />4 Tags</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <p className="text-xl font-semibold">Mathematics</p>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-sm">3 Class</span>
                            <span className="font-semibold text-sm">2 Quiz</span>
                            <span className="font-semibold text-sm">15 Students</span>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-2 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="py-0.5 gap-2 flex items-center text-heading text-sm font-semibold rounded-lg"><Icon icon="mdi:tag" width={20} height={20} className="text-accent" />4 Tags</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <p className="text-xl font-semibold">Biology</p>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-sm">3 Class</span>
                            <span className="font-semibold text-sm">2 Quiz</span>
                            <span className="font-semibold text-sm">15 Students</span>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-2 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="py-0.5 gap-2 flex items-center text-heading text-sm font-semibold rounded-lg"><Icon icon="mdi:tag" width={20} height={20} className="text-accent" />4 Tags</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <p className="text-xl font-semibold">Chemistry</p>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-sm">3 Class</span>
                            <span className="font-semibold text-sm">2 Quiz</span>
                            <span className="font-semibold text-sm">15 Students</span>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-2 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="py-0.5 gap-2 flex items-center text-heading text-sm font-semibold rounded-lg"><Icon icon="mdi:tag" width={20} height={20} className="text-accent" />4 Tags</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <p className="text-xl font-semibold">Art</p>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold text-sm">3 Class</span>
                            <span className="font-semibold text-sm">2 Quiz</span>
                            <span className="font-semibold text-sm">15 Students</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}