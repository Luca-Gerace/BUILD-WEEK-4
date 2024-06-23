import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UsersIcon, BriefcaseIcon, ChatBubbleOvalLeftEllipsisIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import LinkedinLogo from '../assets/logo/LinkedIn_icon.svg';
import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator, Transition } from '@headlessui/react';

export default function Header({ user }) {
  const [activeItem, setActiveItem] = useState(null);

  

  const handleClick = (item) => {
    setActiveItem(item);
  };


  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home', to: '/' },
    { id: 'network', icon: UsersIcon, label: 'My Network', to: '/' },
    { id: 'jobs', icon: BriefcaseIcon, label: 'Jobs', to: '/' },
    { id: 'messaging', icon: ChatBubbleOvalLeftEllipsisIcon, label: 'Messaging', to: '/' },
    { id: 'notifications', icon: BellIcon, label: 'Notifications', to: '/' }
  ];
 
  const listItems1 = [
    {id: 'setting', label: 'Settings & Privacy', to: '/'},
    {id: 'help', label: 'Help', to: '/'},
    {id: 'language', label: 'Language', to: '/'}
  ]

 const listItems2 = [
    {id: 'post', label: 'Post & Activity', to: '/'},
    {id: 'jobPostingAccount', label: 'Job Posting Account', to: '/'}
  ]

  return (
    <nav className="px-5 py-4 bg-white h-full">
      <div className="flex justify-between w-full lg:w-[1024px] m-auto items-center">
        {/* LOGO & SEARCHBAR */}
        <div className='flex items-center gap-2'>
          <img src={LinkedinLogo} alt="logo" className='w-[41px]' />
          <div className='flex w-[225px] lg:w-[325px] h-[40px] rounded-md bg-[#EDF3F8]'>
            <MagnifyingGlassIcon className='w-[25px] mx-3' />
            <input type="text" placeholder='Search' className='bg-transparent outline-none' />
          </div>
        </div>
        {/* FINE LOGO & SEARCHBAR */}
        {/* ICONE & PROFILE DROPDOWN */}
        <div className='items-center'>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link to={item.to} key={item.id}>
                <div
                  className={`text-[#666666] hover:text-black mx-1 md:mx-0 cursor-pointer hidden md:flex flex-col items-center md:w-[90px] lg:w-[100px] ${activeItem === item.id ? 'text-black border-b-2 border-black' : ''}`}
                  onClick={() => handleClick(item.id)}
                >
                  <Icon className='w-[30px]' />
                  <span className='hidden md:inline'>{item.label}</span>
                </div>
              </Link>
            );
          })}
          {/* FINE ICONE */}
          {/* INIZIO PROFILE DROPDOWN */}
          <div>
            <Menu>
              <MenuButton className='w-[30px] lg:w-[60px] ms-0 lg:ms-3 flex flex-col items-center text-[#666666] hover:text-black '>
                <img src={user.image} alt="img-user" className='rounded-full w-[30px] h-[30px]' />
                <div className='flex gap-1'>
                  <span className='hidden md:inline'>Me</span>
                  <ChevronDownIcon className='hidden md:inline md:w-[20px]' />
                </div>
              </MenuButton>

              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <MenuItems anchor='bottom' className='border p-3 bg-white'>
                  <MenuItem as='div' className='w-[250px]'>
                    <div className='flex flex-col me-3'>
                        <div className='flex items-center gap-2'>
                        <img src={user.image} alt="img-user" className='w-[60px] h-[60px] rounded-full' />
                        <div className='flex flex-col'>
                          <span className='font-bold text-[20px]'>
                            {user.name} {user.surname}
                          </span>
                          <span>
                            {user.title}
                          </span>
                        </div>
                      </div>
                      <Link to='/'>
                        <button 
                          className="transition-all duration-100 ease-in-out text-blue-600 border-blue-600 w-full border rounded-[20px] my-3 hover:bg-blue-200">
                          View Profile
                        </button>
                      </Link>
                    </div>
                  </MenuItem>
                  <MenuSeparator className="my-1 h-px bg-[#b1b1b1]" />
                  <MenuItem as='div' className='w-[250px]'>
                    <div className='flex flex-col'>
                      <span className='font-semibold text-[18px]'>Account</span>
                      {listItems1.map((item) => (
                        <Link to={item.to} key={item.id}>
                          <span className='text-[#666666] hover:underline'>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </MenuItem>
                  <MenuSeparator className="my-1 h-px bg-[#b1b1b1]" />
                  <MenuItem as='div' className='w-[250px]'>
                      <div className="flex flex-col">
                        <span className='font-semibold text-[18px]'>Manage</span>
                        {listItems2.map((item) => (
                          <Link to={item.to} key={item.id}>
                            <span className='text-[#666666] hover:underline'>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                  </MenuItem>
                  <MenuSeparator className="my-1 h-px bg-[#b1b1b1]" />
                  <MenuItem as='div' className='w-[250px]'>
                  <Link to='/' className='text-[#666666] hover:underline'>Sign Out</Link>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
