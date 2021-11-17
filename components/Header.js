import Image from 'next/image'
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    usersIcon, 
} from '@heroicons/react/solid'


function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
                <input className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
                type="text"
                placeholder="Start your search"
                />
                <SearchIcon className="hidden md:inline-flex mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer "/>
            </div>
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline-flex cursor-pointer' >Become a Host</p>
                <GlobeAltIcon className='h-6' />
                <div className='flex items-center rounded-full border-2 p-3 space-x-2' >
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
        </header>
    )
}

export default Header
