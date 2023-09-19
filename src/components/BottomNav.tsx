import { HomeIcon,ArrowTrendingUpIcon,UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const BottomNavComponent = () =>{
    return(
        <div className='mt-16'>
            <div className="fixed -bottom-1 z-10 rounded-t-3xl p-2 py-4 layout-mobile border-t-purple-200 bg-purple-900">
                <div className='flex flex-row'>
                    <Link href={"/"} className="basis-1/3 text-center items-center text-purple-100 font-semibold text-bold flex flex-col">
                        <ArrowTrendingUpIcon className="w-6"/>
                        <p className="text-sm">Anak</p>
                    </Link>
                    <div className="basis-1/3 text-center items-center text-white font-semibold flex flex-col">
                        <HomeIcon className="w-6"/>
                        <p className="text-sm">Home</p>
                    </div>
                    <Link href={"/auth/account"} className="basis-1/3 text-center items-center text-purple-100 font-semibold text-bold flex flex-col">
                        <UserIcon className="w-6"/>
                        <p className="text-sm">Akun</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default BottomNavComponent;