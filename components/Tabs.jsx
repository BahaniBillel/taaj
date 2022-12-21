import { useState } from "react";
import { Tab } from "@headlessui/react";
import StarRatings from "react-star-ratings";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ categories }) {
  // let [categories] = useState({
  //   "Reviews for this item": [
  //     {
  //       id: 1,
  //       rating: 4.5,
  //       title: "Does drinking coffee make you smarter?",
  //       comment: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias est
  //       architecto ab rerum eius error, laborum possimus soluta similique
  //       obcaecati distinctio non nam unde fugiat quod aliquam totam! Placeat,
  //       voluptas!`,
  //       date: "5h ago",
  //       commentCount: 5,
  //       shareCount: 2,
  //     },
  //     {
  //       id: 2,
  //       rating: 4.5,
  //       title: "So you've bought coffee... now what?",
  //       comment: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias est
  //       architecto ab rerum eius error, laborum possimus soluta similique
  //       obcaecati distinctio non nam unde fugiat quod aliquam totam! Placeat,
  //       voluptas!`,
  //       date: "2h ago",
  //       commentCount: 3,
  //       shareCount: 2,
  //     },
  //   ],
  //   "Reviews for this shop": [
  //     {
  //       id: 1,
  //       rating: 4.5,
  //       title: "Is tech making coffee better or worse?",
  //       comment: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias est
  //       architecto ab rerum eius error, laborum possimus soluta similique
  //       obcaecati distinctio non nam unde fugiat quod aliquam totam! Placeat,
  //       voluptas!`,
  //       date: "Jan 7",
  //       commentCount: 29,
  //       shareCount: 16,
  //     },
  //     {
  //       id: 2,
  //       rating: 4.5,
  //       title: "The most innovative things happening in coffee",
  //       comment: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias est
  //       architecto ab rerum eius error, laborum possimus soluta similique
  //       obcaecati distinctio non nam unde fugiat quod aliquam totam! Placeat,
  //       voluptas!`,

  //       date: "Mar 19",
  //       commentCount: 24,
  //       shareCount: 12,
  //     },
  //   ],
  //   Trending: [
  //     {
  //       id: 1,
  //       rating: 4.5,
  //       title: "Ask Me Anything: 10 answers to your questions about coffee",
  //       comment: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias est
  //       architecto ab rerum eius error, laborum possimus soluta similique
  //       obcaecati distinctio non nam unde fugiat quod aliquam totam! Placeat,
  //       voluptas!`,

  //       date: "2d ago",
  //       commentCount: 9,
  //       shareCount: 5,
  //     },
  //     {
  //       id: 2,
  //       rating: 4,
  //       title: "The worst advice we've ever heard about coffee",
  //       comment: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias est
  //       architecto ab rerum eius error, laborum possimus soluta similique
  //       obcaecati distinctio non nam unde fugiat quod aliquam totam! Placeat,
  //       voluptas!`,

  //       date: "4d ago",
  //       commentCount: 1,
  //       shareCount: 2,
  //     },
  //   ],
  // });

  return (
    <div className="w-full max-w-2xl px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-greenSecondary focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-lightEmerald"
                  >
                    <StarRatings
                      rating={post.rating}
                      starRatedColor="black"
                      changeRating={3}
                      numberOfStars={5}
                      name="rating"
                      starDimension="10px"
                    />
                    <h3 className="text-sm font-medium leading-5 pt-2">
                      {post.title}
                    </h3>
                    <p className="text-sm font-xl py-2">{post.comment}</p>
                    {/* review bottom info */}
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
