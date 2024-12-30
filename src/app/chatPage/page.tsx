"use client";

import { iconChat, onlineStatus, robotLogo } from "@/assets";
import { Chat } from "@/components/Chat";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function chatPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col gap-6 h-[calc(100vh-9em)] bg-[#12FFFF]">
        <div className="w-full h-20 bg-[#4361EE] flex items-center justify-around">
          <div className="flex gap-4">
            <Image src={robotLogo} alt="Imagem de um robô" className="h-16 w-fit flex"></Image>
            <div>
              <h1 className="text-3xl text-white font-bold font-montserrat pt-1">Frontify.AI</h1>
              <Image src={onlineStatus} alt={"Status online"} ></Image>
            </div>   
          </div>
          <p></p>
        </div>
        <Chat></Chat>
      </div>
    </>
  );
}
