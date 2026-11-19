import { Icon } from "@iconify/react"

export default function AccountDetailNotifications (){
    return (
        <>
            <div className="flex flex-col font-semibold min-w-[600px] gap-5">
                <span className="flex items-center justify-between w-full">A student joins a class <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full">A student leaves a classroom <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full">A student has finished quiz <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full">A student submitted quiz past the deadline <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full">A quiz expires <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full">A student has sent you a message <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
                <span className="flex items-center justify-between w-full">Receive a weekly score summary report <Icon icon="mdi:toggle-switch" className="text-gray-400" width={30} height={30}/></span>
            </div>
        </>
    )
}