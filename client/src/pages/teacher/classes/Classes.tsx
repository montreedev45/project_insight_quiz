import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react"


export default function Classes (){
    const navigate = useNavigate()

    const handleCreate = () => {
        navigate(`/teacher/classes/010203040506/general`)
    }
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                    <p className="text-xl font-semibold">Classes (4)</p>
                    <div className="flex gap-5">
                        <div className="relative flex items-center">
                            <Icon icon="akar-icons:search" width={20} height={20} className="absolute left-2 text-gray-300" />
                            <input type="text" placeholder="Search..." className="bg-secondary min-w-[300px] w-full rounded-4xl py-1 px-10 font-semibold text-gray-400 outline-0 border-2 border-gray-300" />
                        </div>
                        <div className="bg-accent text-secontext px-2 py-1.5 rounded-lg caret-transparent">
                            <button className="font-semibold flex items-center px-4"><Icon icon="mdi:plus" className="font-semibold" width={20} height={20} />Create Class</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between flex-wrap gap-10 max-h-[600px] py-5 px-5 overflow-auto">
                    <div onClick={handleCreate} className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-5 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="py-0.5 gap-2 flex items-center text-heading text-lg font-semibold rounded-lg">M.4/1</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold">MATH41</p><Icon icon="akar-icons:copy" width={25} height={25} className="text-accent hover:scale-105"/>
                        </div>
                        <div className="flex gap-3">
                            <span className="flex gap-1 items-center font-semibold text-sm"><Icon icon="mdi:people" width={20} height={20}/>15</span>
                            <span className="flex gap-1 items-center font-semibold text-sm"><Icon icon="iconoven:quiz-bubble" width={20} height={20}/>5</span>
                        </div>
                        <span className="flex items-center justify-end gap-2 font-semibold"><Icon icon="reicon:teacher-filled" width={20} height={20} className="text-accent"/>montree.dev45</span>
                    </div>
                    <div onClick={handleCreate} className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-5 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="py-0.5 gap-2 flex items-center text-heading text-lg font-semibold rounded-lg">M.4/2</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold">MATH42</p><Icon icon="akar-icons:copy" width={25} height={25} className="text-accent hover:scale-105"/>
                        </div>
                        <div className="flex gap-3">
                            <span className="flex gap-1 items-center font-semibold text-sm"><Icon icon="mdi:people" width={20} height={20}/>15</span>
                            <span className="flex gap-1 items-center font-semibold text-sm"><Icon icon="iconoven:quiz-bubble" width={20} height={20}/>5</span>
                        </div>
                        <span className="flex items-center justify-end gap-2 font-semibold"><Icon icon="reicon:teacher-filled" width={20} height={20} className="text-accent"/>montree.dev45</span>
                    </div>
                    <div onClick={handleCreate} className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-5 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="py-0.5 gap-2 flex items-center text-heading text-lg font-semibold rounded-lg">M.4/3</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold">MATH43</p><Icon icon="akar-icons:copy" width={25} height={25} className="text-accent hover:scale-105"/>
                        </div>
                        <div className="flex gap-3">
                            <span className="flex gap-1 items-center font-semibold text-sm"><Icon icon="mdi:people" width={20} height={20}/>15</span>
                            <span className="flex gap-1 items-center font-semibold text-sm"><Icon icon="iconoven:quiz-bubble" width={20} height={20}/>5</span>
                        </div>
                        <span className="flex items-center justify-end gap-2 font-semibold"><Icon icon="reicon:teacher-filled" width={20} height={20} className="text-accent"/>montree.dev45</span>
                    </div>
                    <div onClick={handleCreate} className="cursor-pointer hover:scale-105 transition-all flex  flex-col  gap-5 w-full max-w-[300px] p-5 border border-l-8 border-gray-300 rounded-2xl text-heading">
                        <div className="flex items-center justify-between">
                            <span className="py-0.5 gap-2 flex items-center text-heading text-lg font-semibold rounded-lg">M.4/4</span>
                            <Icon icon="pinhead:three-dots-up-down" />
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold">MATH44</p><Icon icon="akar-icons:copy" width={25} height={25} className="text-accent hover:scale-105"/>
                        </div>
                        <div className="flex gap-3">
                            <span className="flex gap-1 items-center font-semibold text-sm"><Icon icon="mdi:people" width={20} height={20}/>15</span>
                            <span className="flex gap-1 items-center font-semibold text-sm"><Icon icon="iconoven:quiz-bubble" width={20} height={20}/>5</span>
                        </div>
                        <span className="flex items-center justify-end gap-2 font-semibold"><Icon icon="reicon:teacher-filled" width={20} height={20} className="text-accent"/>montree.dev45</span>
                    </div>
                </div>
            </div>
        </>
    )
}