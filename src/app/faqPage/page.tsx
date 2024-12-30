"use client"

import { iconChat, RobotHome } from "@/assets";
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
        <ul className="px-20 flex flex-col gap-6">
            <li className="gap-4 flex flex-col">
                <h2 className="text-2xl font-montserrat font-bold">Como posso centralizar uma div?</h2>
                <p className="font-montserrat text-justify">Para centralizar um elemento dentro de uma div, você pode usar as propriedades de alinhamento disponíveis em CSS. Configure a div como um contêiner flexível ou de grade e ajuste as opções de alinhamento horizontal e vertical para posicionar o elemento no centro.</p>
            </li>
            <li className="gap-4 flex flex-col">
                <h2 className="text-2xl font-montserrat font-bold">Como faço para implementar um botão com animação ao passar o mouse?</h2>
                <p className="font-montserrat text-justify">Você pode criar um botão com animação ao passar o mouse utilizando transições CSS. Defina a propriedade <code>transition</code> no botão para suavizar mudanças de estilo, como a cor ou o tamanho, quando o estado <code>:hover</code> for ativado.</p>
            </li>
            <li className="gap-4 flex flex-col">
                <h2 className="text-2xl font-montserrat font-bold">Como posso criar um menu suspenso que aparece ao clicar?</h2>
                <p className="font-montserrat text-justify">Para criar um menu suspenso, você pode usar JavaScript para alternar uma classe que exibe ou oculta o menu. Em CSS, utilize propriedades como <code>display</code>, <code>opacity</code>, ou <code>visibility</code> para controlar a exibição e adicionar animações para um efeito suave.</p>
            </li>
        </ul>
      </div>
      <div className="h-[600px] self-center w-[0.5px] border border-transparent rounded-lg bg-black"></div>
      <div className="w-full flex flex-row">
        <div className="w-full flex flex-col items-center justify-center gap-8 ">
          <h1 className="text-3xl font-bold font-montserrat text-center">Links recomendados<br/>para o estudo</h1>
          <div className="w-[22em] h-[33em] bg-[#ffffff] rounded-3xl px-10 pt-8 ">
            <ul className="flex flex-col gap-5">
                <li>
                    <p className="font-montserrat text-justify text-black">✰ HTML</p>
                    <a href="https://www.w3schools.com/html/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://www.w3schools.com/html/</a>
                </li>
                <li>
                    <p className="font-montserrat text-justify text-black">✰ CSS</p>
                    <a href="https://www.w3schools.com/css/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://www.w3schools.com/css/</a>
                </li>
                <li>
                    <p className="font-montserrat text-justify text-black">✰ Tailwind</p>
                    <a href="https://tailwindcss.com/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://tailwindcss.com/</a>
                </li>
                <li>
                    <p className="font-montserrat text-justify text-black">✰ NextJS</p>
                    <a href="https://nextjs.org/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://nextjs.org/</a>
                </li>
                <li>
                    <p className="font-montserrat text-justify text-black">✰ React</p>
                    <a href="https://react.dev/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://react.dev/</a>
                </li>
                <li>
                    <p className="font-montserrat text-justify text-black">✰ Angular</p>
                    <a href="https://angular.dev/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://angular.dev/</a>
                </li>
                <li>
                    <p className="font-montserrat text-justify text-black">✰ Vue</p>
                    <a href="https://vuejs.org/" className="font-montserrat text-justify text-gray-500 text-xs pl-4 underline">https://vuejs.org/</a>
                </li>
                
            </ul>
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
