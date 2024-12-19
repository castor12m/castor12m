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
      url: "/home",
      icon: Home
    }
  ],
  navMain: [
    {
      title: "Playground",
      url: "/playground",
      icon: SquareTerminal,
      isActive: true,
      items: []
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2
    },
    {
      title: "About",
      url: "/about",
      icon: Send
    }
  ]
};
