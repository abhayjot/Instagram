import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";

function Header() {
    return (
        <div className="Shadow-sm border-b bg-white sticky top-0 z-50">

            <div className = "flex justify-between max-w-6xl mx-5 lg:mx-auto" >
                    {/*Left*/}
                <div className = "relative hidden lg:inline-grid  w-24" >
                    <Image src = "https://links.papareact.com/ocw" 
                    layout = "fill"
                    objectFit="contain"/> 
                </div>

                <div className="relative w-10  lg:hidden flex-shring-0 cursor-pointer">
                <Image src = "https://links.papareact.com/jjm" 
                    layout = "fill"
                    objectFit="contain"
                    loading = "eager"/> 

                </div>

                {/*Middle */}
                <div className="relative mt-1 p-3 rounded-md ">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-500"/>
                    </div>
                    <input className="bg-gray-50 block w-full pl-10 rounded-md border-gray-300
                    focus:border-black focus:ring-black"  type= "text" placeholder="Search"/>
                </div>

                {/*Right*/}

                <div className="flex items-center my-5 justify-end space-x-5">
                    <HomeIcon className = "navBtn " />
                    <MenuIcon className = "navBtn" />
                    <PlusCircleIcon className="navBtn"/>
                    <UserGroupIcon className="navBtn"/>
                    <HeartIcon className="navBtn"/>
                    <PaperAirplaneIcon className="navBtn rotate-45"/>

                </div>
                
            </div>
        </div>
    )
}

export default Header
