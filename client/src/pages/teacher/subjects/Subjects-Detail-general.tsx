export default function SubjectsDetailGeneral (){
    return (
        <>
            <div className="flex flex-col justify-center items-center max-w-[300px] gap-5 ">
                <span className="font-semibold flex gap-5 justify-between items-center whitespace-nowrap">Subject :  <input type="text" value="Mathematics"  className="font-normal px-4 py-1 border border-subtext rounded-lg"/></span>
                <button type="submit" className="w-full bg-accent text-secontext font-semibold py-1 rounded-lg">Save</button>
                <div className="flex justify-between w-full font-semibold text-lg text-center mt-5">
                    <span className="flex flex-col">2 <span>Tags</span></span>
                    <span className="flex flex-col">4 <span>Classes</span></span>
                    <span className="flex flex-col">4 <span>Quiz</span></span>
                    <span className="flex flex-col">4 <span>Students</span></span>
                </div>
            </div>
        </>
    )
}