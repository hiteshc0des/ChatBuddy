"use client";
import React from "react";
import { useState, useEffect } from "react";

import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ChatForum = ({ clerkUser, slug }) => {
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey: "q2j4wwrb6g3p", // Replace with your actual Stream Chat API key
    tokenOrProvider: clerkUser.token,
    userData: {
      id: clerkUser.id,
      name: clerkUser.name,
      image: `https://getstream.io/random_png/?name=${clerkUser.name}`,
    },
  });

  useEffect(() => {
    if (!client) return;

    const createChannel = async () => {
      try {
        // Sanitize the slug by replacing special characters with hyphens
        const sanitizedSlug = slug.replace(/[^a-zA-Z0-9]+/g, "-");

        const newChannel = client.channel("messaging", sanitizedSlug, {
          image: "https://getstream.io/random_png/?name=react",
          name: capitalize(sanitizedSlug.replace(/-/g, " ")) + " Discussion",
        });

        await newChannel.create();
        setChannel(newChannel);
      } catch (error) {
        console.error("Error creating channel:", error);
        alert(
          "An error occurred while creating the chat channel. Please try again later."
        );
      }
    };

    createChannel();
  }, [client, slug]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      {channel && (
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      )}
    </Chat>
  );
};

export default ChatForum;
export const metadata = {
  title: "Home - ChatBuddy",
  description: "ChatBuddy helps you connect with people",
};
