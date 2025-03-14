"use client"

import { iconChat, RobotHome } from "@/assets";
import FaqLinks from "@/components/FaqLinks";
import FaqQuestions from "@/components/FaqQuestions";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function faqPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className="flex flex-row h-[calc(100vh-9em)] bg-[#12FFFF]">
      <div className="container w-full flex flex-col items-center justify-center gap-10 text-black">
        <h1 className="text-3xl font-bold font-montserrat">Dúvidas Frequentes</h1>
        <FaqQuestions></FaqQuestions>
      </div>
      <div className="h-[600px] self-center w-[0.5px] border border-transparent rounded-lg bg-black"></div>
      <div className="w-full flex flex-row">
        <div className="w-full flex flex-col items-center justify-center gap-8 ">
          <h1 className="text-3xl font-bold font-montserrat text-center">Links recomendados<br/>para o estudo</h1>
          <div className="w-[22em] h-[33em] bg-[#ffffff] rounded-3xl px-10 pt-8 ">
            <FaqLinks></FaqLinks>
          </div>
        </div>
        <div className="flex-col items-center justify-end pb-10 pr-10 hidden lg:flex">
          <Link href="/chatPage">
            <Image src={iconChat} alt={"Ícone de chat"} className="cursor-pointer"></Image>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
