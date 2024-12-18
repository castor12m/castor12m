import { GitCompare, Home, TestTube, Upload, Send, Settings2, SquareTerminal, Rainbow, Usb } from "lucide-react";

export const appSidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg"
  },
  basic: [
    {
      title: "Home",
      url: "/my-app/",
      icon: Home
    }
  ],
  navMain: [
    {
      title: "Playground",
      url: "/my-app/playground",
      icon: SquareTerminal,
      isActive: true,
      items: []
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/my-app/settings",
      icon: Settings2
    },
    {
      title: "About",
      url: "/my-app/my-app/about",
      icon: Send
    },
    {
      title: "About",
      url: "/my-app/about",
      icon: Send
    },
    {
      title: "About",
      url: "/about",
      icon: Send
    }
  ]
};
