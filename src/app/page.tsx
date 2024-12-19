"use client"

import { iconChat, RobotHome } from "@/assets";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className="flex flex-row h-[calc(100vh-9em)] bg-[#330072]">
      <div className="container w-full flex items-center justify-center">
        <Image src={RobotHome} alt={"Imagem de Robô"} className="h-[45em] w-fit rounded-3xl"></Image>
      </div>
      <div className="container w-full flex flex-row">
        <div className="container w-full flex flex-col items-center justify-center gap-8 pr-48">
          <h1 className="text-3xl text-white font-bold font-montserrat">Bem-Vindo a Frontify AI!</h1>
          <div className="w-[32em] h-[33em] bg-[#12FFFF] rounded-3xl px-10 pt-8">
            <h1 className="text-3xl font-bold font-montserrat text-center mb-5">Sobre a Iniciativa:</h1>
            <p className="font-montserrat text-justify text-lg">Frontify AI é uma ferramenta que utiliza inteligência artificial para auxiliar desenvolvedores front-end a resolver desafios comuns no desenvolvimento de interfaces. Ela oferece soluções contextualizadas para problemas específicos, exemplos práticos de código, dicas personalizadas e orientações baseadas em melhores práticas do setor. Projetada para ser útil tanto para iniciantes quanto para desenvolvedores experientes, a Frontify AI agiliza o fluxo de trabalho, ajuda a implementar correções eficazes e contribui para a criação de projetos front-end mais otimizados e profissionais.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end pb-10 pr-10">
          <Image src={iconChat} alt={"Ícone de chat"} className="cursor-pointer"></Image>
        </div>
      </div>
    </div>
    </>
  );
}
