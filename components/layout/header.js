import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import Link from "next/link";

import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "About Me",
        link: "/who-am-i"
    },
    {
        text: "Stills",
        link: "/stills"
    }
];

export default function Example() {

    const router = useRouter();

    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href={'/'}>
                                        Andrei Baicus
                                    </Link>
                                </div>

                            </div>
                            <div
                                className="sm:items-stretch sm:justify-start absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {
                                        navigation.map(({text, link}) => {
                                            const classes = classNames("inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                                                router.asPath === link ? 'border-sky-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                            );

                                            return <Link key={text} href={link}><a className={classes}>{text}</a></Link>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-4 space-y-1">
                            {
                                navigation.map(({text, link}) => {
                                    const classes = classNames("block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                                        router.asPath === link ?
                                            'bg-sky-50 border-sky-500 text-sky-700' :
                                            'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                                    );

                                    return (<Link
                                        href={link}
                                    >
                                        <a className={classes}>
                                            {text}
                                        </a>
                                    </Link>)
                                })
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
