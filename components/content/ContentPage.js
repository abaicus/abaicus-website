import DocumentHead from "../DocumentHead";
import { classNames } from "../../common/utils";

export default function ({ title, byline, subtitle, children, pageClass, extraBodyClass = '' }) {
  return (
    <>
      <DocumentHead title={title} />
      <div className="flex-1">
        <article
          className={`relative py-16 ${pageClass || "bg-white dark:bg-zinc-900"
            } overflow-hidden min-h-full`}
        >
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={300}
                height={300}
                fill="none"
                viewBox="0 0 300 300"
              >
                <defs>
                  <pattern
                    id="dots"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200 dark:text-neutral-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={300}
                  height={300}
                  fill="url(#dots)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={300}
                height={300}
                fill="none"
                viewBox="0 0 300 300"
              >
                <defs>
                  <pattern
                    id="dots"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200 dark:text-neutral-700 rounded-full"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={300}
                  height={300}
                  fill="url(#dots)"
                />
              </svg>
              <svg
                className="absolute -bottom-10 left-full transform translate-x-32"
                width={300}
                height={300}
                fill="none"
                viewBox="0 0 300 300"
              >
                <defs>
                  <pattern
                    id="dots"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200 dark:text-neutral-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={300}
                  height={300}
                  fill="url(#dots)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                {byline && (
                  <span className="block text-base text-center text-sky-500 font-semibold tracking-wide uppercase dark:text-sky-500">
                    {byline}
                  </span>
                )}
                {title && (
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    {title}
                  </span>
                )}
              </h1>
              {subtitle && (
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  {subtitle}
                </p>
              )}
            </div>
            <div className={classNames("mt-6 prose prose-sky prose-lg text-gray-500 dark:text-gray-300 dark:prose-headings:text-neutral-100 mx-auto", extraBodyClass)}>
              {children}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
