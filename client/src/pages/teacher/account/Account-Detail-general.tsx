import { Icon } from "@iconify/react"
import account from '../../../assets/account.svg'

export default function AccountDetailGeneral() {
    return (
        <>
            <div className="flex justify-center items-center gap-50 min-w-[900px]">
                <div className='gap-5 flex flex-col justify-center'>
                    <img src={account} alt="profile image" className='border-2 border-subtext rounded-full min-w-[200px]' width={200} height={200} />
                    <button type="submit" className="flex items-center justify-center border-2 border-subtext font-semibold text-subtext h-fit px-5 py-1 rounded-lg"><Icon icon="mdi:plus" className="text-subtext" width={25} height={25} />Upload</button>
                </div>
                <div className="flex flex-col gap-5 font-semibold w-full">
                    <div className="flex gap-4 justify-between items-center">
                        <span className="w-fit whitespace-nowrap">First Name :</span>
                        <input type="text" value="Montri" className="font-normal px-4 py-1 w-full border border-subtext rounded-lg" />
                    </div>

                    <div className="flex gap-4 justify-between items-center">
                        <span className="w-fit whitespace-nowrap">Last Name :</span>
                        <input type="text" value="Chanuanklang" className="font-normal px-4 py-1 w-full border border-subtext rounded-lg" />
                    </div>

                    <div className="flex gap-4 justify-between items-center">
                        <span className="w-fit whitespace-nowrap">Institution :</span>
                        <input type="text" value="School 1" className="font-normal px-4 py-1 w-full border border-subtext rounded-lg" />
                    </div>
                    <div className="flex justify-between gap-3">
                        <span className="w-fit whitespace-nowrap">Email :  <span className="font-normal ps-3">Teacher1@gmail.com</span></span>
                        <button className="flex items-center font-semibold text-sm text-secontext gap-2 px-4 rounded-sm bg-subtext">
                            <Icon icon="mdi:email-edit-outline" width={15} height={15} />
                            Change
                        </button>
                    </div>
                    <div className="bg-accent text-secontext mt-5 px-2 py-1.5 rounded-lg caret-transparent">
                        <button className="font-semibold flex w-full justify-center items-center px-4">Save Changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}