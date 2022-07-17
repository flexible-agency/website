import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Popout({ title, items = [] }) {
  return (
    <>
      <div className="md:hidden">
        {items.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-8">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
      <Popover className="relative hidden md:block">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-gray-900" : "text-gray-500",
                "md:mt-0 md:ml-8 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
              )}
            >
              <span>{title}</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "ml-1 h-5 w-5 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {items.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150" onClick={close}>
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
