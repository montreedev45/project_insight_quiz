import { Icon } from "@iconify/react"
import account from '../assets/account.svg'

export default function TopbarTeacher() {
    return (
        <>
            <header className="h-[90px] bg-primary px-10 flex items-center justify-between">
                <div className="relative flex items-center">
                    <Icon icon="akar-icons:search" width={20} height={20} className="absolute left-2 text-gray-300"/>
                    <input type="text" placeholder="Search..." className="bg-secondary min-w-[300px] w-full rounded-4xl py-1.5 px-10 font-semibold text-gray-400 outline-0"/>
                </div>
                <div className="flex gap-5 items-center caret-transparent">
                    <Icon icon="mdi:bell" width={30} height={30} className="text-secontext"/>
                    <p className="text-lg text-secontext font-semibold">montree.dev45</p>
                    <img src={account} alt="profile" width={40} height={40}/>
                </div>
            </header>
        </>
    )
}