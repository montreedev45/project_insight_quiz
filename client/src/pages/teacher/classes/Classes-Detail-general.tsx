import { Icon } from "@iconify/react"

export default function ClassesDetailGeneral (){
    return (
        <>
            <div className="flex flex-col justify-center items-center max-w-[300px] gap-5 whitespace-nowrap">
                <span className="font-semibold flex gap-5 justify-between items-center">Class :  <input type="text" value="M.4/1"  className="font-normal px-4 py-1 border border-subtext rounded-lg"/></span>
                <span className="relative font-semibold flex gap-5 justify-between items-center">Code :  <input type="text" value="MATH41"  className="font-normal px-4 py-1 border border-subtext rounded-lg"/><Icon icon="akar-icons:copy" className="absolute right-4 hover:scale-105 cursor-pointer text-accent"/></span>
                <button type="submit" className="w-full bg-accent text-secontext font-semibold py-1 rounded-lg">Save</button>
                <div className="flex justify-between w-full font-semibold text-lg text-center mt-5">
                    <span className="flex flex-col">2 <span>Subjects</span></span>
                    <span className="flex flex-col">5 <span>Quiz</span></span>
                    <span className="flex flex-col">15 <span>Students</span></span>
                </div>
            </div>
        </>
    )
}