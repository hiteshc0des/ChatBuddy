import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className=" bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-between p-10 rounded-lg shadow-lg">
          <div className="w-1/2 pr-8">
            <h1 className="text-5xl font-bold text-white">
              ChatBuddy - Chat with your friends and more!
            </h1>
            <h6 className="text-2xl mt-4 text-gray-200">
              Welcome to ChatBuddy, the fun and easy way to connect with your
              friends and family. Stay in touch, share stories and laughs, and
              create lasting memories - all in one place.
            </h6>
            <div className="flex justify-center mt-10">
              <a
                href="/"
                // target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
                  View on GitHub
                </button>
              </a>
              <Link href="/">
                <button className="bg-white text-blue-500  px-6 py-3 rounded-full ml-4 hover:bg-blue-700 hover:text-white transition duration-300">
                  Start Chatting
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/chat.png"
              alt="ChatBuddy Hero Image"
              width={500}
              height={300}
            />
          </div>
        </section>
        {/* Features Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-500">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-500">
                Real-time Messaging
              </h3>
              <p className="mt-2 text-gray-900">
                Instantly connect with your contacts and have seamless
                conversations.
              </p>
            </div>
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-500">
                Voice and Video Calls
              </h3>
              <p className="mt-2 text-gray-900">
                Enjoy crystal-clear voice and video calls with your friends and
                family.
              </p>
            </div>
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-500">Group Chats</h3>
              <p className="mt-2 text-gray-900">
                Create and join group chats to stay connected with multiple
                people at once.
              </p>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-500">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-500">Free Plan</h3>
              <p className="mt-2 text-gray-900">
                Enjoy basic features for free.
              </p>
              <ul className="mt-4 text-gray-900">
                <li>- Real-time Messaging</li>
                <li>- Group Chats</li>
              </ul>
              <div className="mt-14">
                <Link href="/signin">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-500">Pro Plan</h3>
              <p className="mt-2 text-gray-900">$9.99/month</p>
              <ul className="mt-4 text-gray-900">
                <li>- Real-time Messaging</li>
                <li>- Group Chats</li>
                <li>- Voice and Video Calls</li>
                <li>- Priority Support</li>
              </ul>
              <div className="mt-4">
                <Link href="/">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-500">
                Enterprise Plan
              </h3>
              <p className="mt-2 text-gray-900">Contact us for pricing</p>
              <ul className="mt-4 text-gray-900">
                <li>- All Pro Plan features</li>
                <li>- Custom Solutions</li>
                <li>- Dedicated Account Manager</li>
              </ul>
              <div className="mt-10">
                <Link href="/">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-500 p-4 text-center text-white mt-20">
        © 2025 ChatBuddy. All rights reserved.
      </footer>
    </div>
  );
}

export const metadata = {
  title: "Home - ChatBuddy",
  description: "ChatBuddy helps you connect with people",
};
