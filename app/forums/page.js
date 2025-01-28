import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const topics = [
  {
    text: "React",
    img: "/images/react.png",
    desc: "Learn and share React knowledge",
    slug: "react-chat-new",
  },
  {
    text: "Java",
    img: "/images/java.png",
    desc: "Learn and share Java knowledge",
    slug: "java-chat-new",
  },
  {
    text: "Git",
    img: "/images/git.png",
    desc: "Learn version control for effective collaboration",
    slug: "git-chat-new",
  },
  {
    text: "CSS",
    img: "/images/css.jpg",
    desc: "Style your web pages with Cascading Style Sheets",
    slug: "css-chat-new",
  },
  {
    text: "Python",
    img: "/images/python.jpg",
    desc: "Explore the versatile language for data science and more",
    slug: "python-chat-new",
  },
  {
    text: "Nodejs",
    img: "/images/node.jpg",
    desc: "Build backend applications with JavaScript",
    slug: "nodejs-chat-new",
  },
];
const Forums = () => {
  return (
    <div className=" min-h-screen flex flex-col mt-10 ">
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-lg shadow-lg text-center">
        <h1 className="text-center text-white text-5xl  mt-10">
          Discussion Forums
        </h1>
        <p className="text-center text-white mb-10 mt-5 text-3xl">
          Welcome to the Forums section of ChatBuddy!
        </p>
      </section>
      <div className="flex-grow flex flex-wrap justify-center mt-10 mb-10 ">
        {topics.map((topic) => {
          return (
            <div
              key={topic.img}
              className="shadow-lg bg-orange-200 w-1/4 m-2 flex justify-center rounded-lg flex-col items-center py-10"
            >
              <Image
                width={124}
                height={124}
                src={topic.img}
                alt={topic.text}
                className=" "
              />
              <h2 className="text-xl text-center">{topic.text}</h2>
              <p className="text-xl text-center">{topic.desc}</p>
              <Link href={`/forum/${topic.slug}`}>
                <Button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-full hover:bg-blue-700 transition duration-300">
                  Discuss now
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <footer className="bg-blue-500 p-4 text-center text-white ">
        © 2025 ChatBuddy. All rights reserved.
      </footer>
    </div>
  );
};

export default Forums;

export const metadata = {
  title: "Forums - ChatBuddy",
  description: "ChatBuddy helps you connect with people",
};
