import { Icon } from "@iconify/react"
import account from '../assets/account.svg'

interface TopbarTeacherProps {
  onMenuClick: () => void;
}

export default function TopbarTeacher({ onMenuClick }: TopbarTeacherProps) {
    return (
        <header className="h-[90px] bg-primary px-4 lg:px-10 flex items-center justify-between gap-4">
            
            <div className="flex items-center gap-3 w-full lg:w-auto">
                {/* ปุ่ม Hamburger จะแสดงเฉพาะบนหน้าจอที่เล็กกว่า Desktop (lg:hidden) */}
                <button 
                    onClick={onMenuClick}
                    className="lg:hidden text-secondary p-1 rounded-md hover:bg-accent/50 transition-colors shrink-0"
                    aria-label="Open sidebar"
                >
                    <Icon icon="mdi:menu" width={30} height={30} />
                </button>

                {/* Search Bar ปรับให้ยืดหยุ่นบนมือถือ */}
                <div className="relative flex items-center w-full lg:w-auto">
                    <Icon icon="akar-icons:search" width={20} height={20} className="absolute left-3 text-gray-300"/>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-secondary min-w-[150px] sm:min-w-[200px] lg:min-w-[300px] w-full rounded-4xl py-1.5 pl-10 pr-4 font-semibold text-gray-400 outline-0"
                    />
                </div>
            </div>

            {/* Profile Section */}
            <div className="flex gap-3 lg:gap-5 items-center caret-transparent shrink-0">
                <Icon icon="mdi:bell" width={24} height={24} className="text-secontext lg:w-[30px] lg:h-[30px]"/>
                {/* ซ่อนชื่อผู้ใช้บนหน้าจอมือถือที่เล็กมากๆ เพื่อป้องกัน Layout แตก */}
                <p className="hidden sm:block text-base lg:text-lg text-secontext font-semibold">montree.dev45</p>
                <img src={account} alt="profile" className="w-8 h-8 lg:w-[40px] lg:h-[40px] rounded-full object-cover"/>
            </div>
            
        </header>
    )
}