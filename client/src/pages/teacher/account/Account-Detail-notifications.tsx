import { Icon } from "@iconify/react"

export default function AccountDetailNotifications (){
    return (
        <>
            <div className="flex flex-col font-semibold w-full max-w-[600px] min-w-[250px] gap-5">
                <span className="flex items-center justify-between w-full"><p className="text-wrap w-full">A student joins a class</p> <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full"><p className="text-wrap w-full">A student leaves a classroom</p> <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full"><p className="text-wrap w-full">A student has finished quiz</p> <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full"><p className="text-wrap w-full">A student submitted quiz past the deadline</p> <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full"><p className="text-wrap w-full">A quiz expires</p> <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full"><p className="text-wrap w-full">A student has sent you a message</p> <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full"><p className="text-wrap w-full">Receive a weekly score summary report</p> <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
            </div>
        </>
    )
}