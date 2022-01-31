import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function () {
    return (
        <div className="h-full flex flex-col bg-white dark:bg-zinc-900">
            <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <div className="text-center">
                        <p className="text-3xl font-semibold text-sky-400 uppercase tracking-wide">404</p>
                        <h1 className="my-5 text-4xl font-extrabold text-zinc-900 dark:text-white">Page not found</h1>
                        <p className="dark:text-sky-200">Unfortunately there's nothing here...</p>
                        <div className="mt-10 grid">
                            <Link href="/">
                                <a className="flex text-center justify-center items-center text-sky-500 hover:text-sky-600">
                                    <span>Go back home</span>
                                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}