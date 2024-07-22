import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import AddExperienceModal from './AddExperienceModal'
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AddExperience({setExperiences, experiences, add, setAdd, user }) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 ring-inset ring-gray-300 hover:bg-gray-50">
            <PlusIcon className='h-6 w-6 mx-2 text-{rgb(102,102,102)} cursor-pointer' />
          </MenuButton>
        </div>

        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    onClick={handleOpen}
                    className={classNames(
                      focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Aggiungi esperienza lavorativa
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="#"
                    className={classNames(
                      focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Aggiungi pausa lavorativa
                  </a>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
      {open && <AddExperienceModal setExperiences={setExperiences} experiences={experiences} add={add} setAdd={setAdd} user={user} open={open} handleOpen={handleOpen} />}
    </>
  )
}
