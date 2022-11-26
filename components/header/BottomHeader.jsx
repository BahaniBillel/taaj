import React, { useState } from "react";
import { links } from "./MyLinks";
import DropDownList from "./DropDownList";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

function BottomHeader() {
  const [heading, setHeading] = useState(false);
  const [subHeading, setSubHeading] = useState("");

  const CheckHover = () => {
    setLink(!link);
  };

  return (
    <div className="hidden   md:flex flex-row items-center py-2 pl-40 bg-white relative ">
      <div className="text-xl text-greenSecondary font-semibold mr-2 hover:text-darkGray transition-colors duration-150 ease-in-out cursor-pointer">
        Handmade{" "}
      </div>

      <div className="text-lightGray">|</div>

      <div className="flex flex-row space-x-6 text-sm text-darkGray ml-2 ">
        {links.map((link, i) => (
          <div key={link.name} className="navlink group">
            <h1
              className="flex flex-row items-center justify-between group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}

              <span>
                <ChevronDownIcon className="text-darkGray h-4 navlink  group-hover:rotate-180" />
              </span>
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute left-0 top-6 hidden group-hover:md:block hover:md:block ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-transparent rotate-45"
                    ></div>
                  </div>
                  <div className="bg-lightEmerald text-darkGray p-5 grid grid-cols-3 gap-10 w-screen">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomHeader;

{
  /* <div>Clothes</div>
        <div>Jewelry & Accessories</div>
        <div>Holidays & sales</div>
        <div>Home & Living</div>
        <div>Toy & Entertaiment</div>
        <div>Art & Collectible</div>
        <div>Craft Supplies</div>
        <div>Vintage</div> */
}
