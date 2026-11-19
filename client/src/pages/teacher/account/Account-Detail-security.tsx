import { Icon } from "@iconify/react"

export default function AccountDetailSecurity() {
    return (
        <>
            <div className="flex flex-col justify-between items-center min-w-[600px] h-[500px]">
                <div className="w-full flex flex-col gap-5">
                    <span className="flex items-center gap-3 font-semibold"><Icon icon="akar-icons:key" width={20} height={20} className="text-accent" />Change Password</span>
                    <div className="flex gap-4 justify-start items-center font-semibold w-full">
                        <span className="w-fit whitespace-nowrap">Password :</span>
                        <div className="flex items-center relative w-full">
                            <Icon icon="mdi:eye" className="absolute right-3" />
                            <input type="password" value="Montri" className="font-normal px-4 py-1 w-full border border-subtext rounded-lg" />
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between items-center font-semibold w-full">
                        <span className="w-fit whitespace-nowrap">New Password :</span>
                        <div className="flex items-center relative w-full">
                            <Icon icon="mdi:eye" className="absolute right-3" />
                            <input type="password" value="Montri" className="font-normal px-4 py-1 w-full border border-subtext rounded-lg" />
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between items-center font-semibold w-full">
                        <span className="w-fit whitespace-nowrap">Confirm Password :</span>
                        <div className="flex items-center relative w-full">
                            <Icon icon="mdi:eye" className="absolute right-3" />
                            <input type="password" value="Montri" className="font-normal px-4 py-1 w-full border border-subtext rounded-lg" />
                        </div>
                    </div>
                    <button className="bg-accent rounded-lg text-secontext font-semibold w-full py-1">Update Password</button>
                </div>
                <div className="flex gap-20 w-full py-4 px-4 bg-red-100">
                    <span className="flex items-center font-semibold gap-4 text-red-400">
                        <Icon icon="akar-icons:circle-alert-fill"/> This action cannot recover student data or exam scores.
                    </span>
                    <button className="flex items-center gap-2 px-4 py-1 rounded-lg bg-red-400">
                        <Icon icon="mdi:trash" width={20} height={20} className="text-secontext"/>
                        <span className="text-secontext font-semibold">Delete Account</span>
                    </button>
                </div>
            </div>
        </>
    )
}