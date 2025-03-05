import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Chat } from "../chat/chat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chat em React!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
