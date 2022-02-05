import Link from "next/link";
import ContentPage from "../components/content/ContentPage";
import {
  FilmIcon,
  PlayIcon,
  CameraIcon,
  BeakerIcon,
} from "@heroicons/react/outline";

import { classNames } from "../common/utils";

const features = [
  {
    name: "About",
    description:
      "Here you can find more details about me. Like what are my favourite food, color and shirt to wear on a saturday...    ",
    icon: FilmIcon,
    link: "/who-am-i",
    color: "bg-blue-500",
    hover: "group-hover:bg-blue-500",
  },
  {
    name: "Photography",
    description:
      "Some photos out of my photography portfolio. It might not be much, but it's honest work...",
    icon: CameraIcon,
    link: "/stills",
    color: "bg-orange-500",
    hover: "group-hover:bg-orange-500",
  },
  {
    name: "Playground",
    description:
      "Here I'll be adding frontend stuff I create in my spare time, just for the sake of it...",
    icon: BeakerIcon,
    link: "/playground",
    color: "bg-red-500",
    hover: "group-hover:bg-red-500",
    additional: "group-hover:bg-red-500",
  },
  {
    name: "Board Games",
    description:
      "Board game helpers. Right now there's just one, but there might be more in the future, who knows...",
    icon: PlayIcon,
    link: "/sherlock",
    color: "bg-green-500",
    hover: "group-hover:bg-green-500",
  },
];

export default function IndexPage() {
  return (
    <div className="flex flex-col flex-1">
      <ContentPage title="Hello World!" byline="Quick links">
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-20 mb-10">
            {features.map((feature) => (
              <Link key={feature.name} href={feature.link || "#"}>
                <a
                  className={`pt-6 no-underline font-normal group transition-all ${feature.additional || ""
                    }`}
                >
                  <div
                    className={`relative flow-root dark:bg-gray-800 bg-gray-50 rounded-lg px-6 pb-6 shadow group-hover:shadow-xl ease-out transition-all h-full ${feature.hover}`}
                  >
                    <div
                      className={`absolute h-10 w-10 ${feature.color} mix-blend-color-dodge opacity-50 right-5 top-5 rounded-lg hidden group-hover:block`}
                    ></div>
                    <div className="-mt-6">

                      <span
                        className={classNames(
                          "inline-flex items-center justify-center p-3 rounded-md shadow-sm group-hover:bg-slate-700",
                          feature.color ? feature.color : "bg-sky-500"
                        )}
                      >
                        <feature.icon
                          className="h-6 w-6 text-white group-hover:scale-125 transition-all ease-out"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <p className="mt-8 text-lg font-medium dark:text-gray-100 text-gray-900 tracking-tight group-hover:text-white">
                      {feature.name}
                    </p>
                    <p className="mt-auto text-base dark:text-gray-300 text-gray-500 group-hover:text-white">
                      {feature.description}
                    </p>

                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </ContentPage>
    </div>
  );
}
