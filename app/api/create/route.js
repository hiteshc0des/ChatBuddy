import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

export async function POST(request) {
  const serverClient = StreamChat.getInstance(apiKey, apiSecret);

  try {
    const user = await request.json();

    // create user token
    const token = serverClient.createToken(user.data.id);
    console.log("A New User is created", token);

    const client = await clerkClient();

    await serverClient.upsertUser({ id: user.data.id });

    await client.users.updateUserMetadata(user.data.id, {
      publicMetadata: {
        token: token,
      },
    });

    // give access to this user for all chats
    const slugs = [
      "python-chat-new",
      "react-chat-new",
      "git-chat-new",
      "css-chat-new",
      "java-chat-new",
      "nodejs-chat-new",
    ];
    slugs.forEach(async (item) => {
      const channel = serverClient.channel("messaging", item, {
        image: "https://getstream.io/random_png/?name=react",
        name: item.replace(/-/g, " ").replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }), // Improved capitalization using regex
        created_by_id: user.data.id,
      });
      await channel.create();
      channel.addMembers([user.data.id]); // Corrected typo
    });

    return Response.json({ message: "hello world" });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response("Invalid request body", { status: 400 });
  }
}

export const metadata = {
  title: "ChatBuddy",
  description: "ChatBuddy helps you connect with people",
};
