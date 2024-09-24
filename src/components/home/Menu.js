import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuButton() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border-2 border-gray-300 bg-white p-1.5 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-100 dark:border-gray-500 dark:bg-gray-800 dark:text-white sm:px-3.5 sm:py-1.5">
          <span className="hidden sm:inline-flex">Menu</span>
          <ChevronDownIcon
            className="-mr-1 ml-2 hidden h-6 w-6 sm:inline-flex"
            aria-hidden="true"
          />
          <MenuIcon className="h-6 w-6 sm:hidden" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="focus:outline-none absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-gray-700">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/docs"
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700',
                    'block px-4 py-2 text-base sm:hidden'
                  )}
                >
                  Documentation
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700',
                    'block px-4 py-2 text-base'
                  )}
                >
                  About
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/blog"
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700',
                    'block w-full px-4 py-2 text-left text-base'
                  )}
                >
                  Blog
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/sponsors"
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700',
                    'block px-4 py-2 text-base'
                  )}
                >
                  Sponsors
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/changelog"
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700',
                    'block w-full px-4 py-2 text-left text-base'
                  )}
                >
                  Changelog
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/license"
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700',
                    'block px-4 py-2 text-base'
                  )}
                >
                  License
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  href="https://github.com/javaistic/javaistic"
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700',
                    'block px-4 py-2 text-base sm:hidden'
                  )}
                >
                  <div className="flex">
                    <span className="sr-only">Javaistic on GitHub</span>
                    <svg className="mr-2 h-6 w-6" viewBox="0 0 16 16" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                    GitHub
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
