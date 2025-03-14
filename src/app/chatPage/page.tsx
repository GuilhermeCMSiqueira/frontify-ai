"use client";

import { iconChat, onlineStatus, robotLogo } from "@/assets";
import Chat from "@/components/Chat/index";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

export default function chatPage() {
  const [proficiency, setProficiency] = useState<string>("");
  const [technology, setTechnology] = useState<string>("");
  
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col gap-6 h-[calc(100vh-9em)] bg-[#12FFFF]">
        <div className="w-full h-20 bg-[#4361EE] flex items-center justify-around">
          <div className="flex gap-4">
            <Image
              src={robotLogo}
              alt="Imagem de um robô"
              className="h-16 w-fit flex"
            ></Image>
            <div>
              <h1 className="text-3xl text-white font-bold font-montserrat pt-1">
                Frontify.AI
              </h1>
              <Image src={onlineStatus} alt={"Status online"}></Image>
            </div>
            <p></p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <div className="flex flex-col gap-10 w-1/3 justify-center items-end">
            <h1 className="font-montserrat font-bold text-2xl">
              Parâmetros Opcionais
            </h1>
            <Select onValueChange={setProficiency}>
              <SelectTrigger className="w-full max-w-[300px]">
                <SelectValue placeholder="Qual seu nível de proficiência?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Nível de Proficiência</SelectLabel>
                  <SelectItem value="iniciante">Iniciante</SelectItem>
                  <SelectItem value="intermediario">Intermediário</SelectItem>
                  <SelectItem value="avancado">Avançado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="technology"
                className="font-montserrat text-center"
              >
                Tecnologia da Pergunta
              </Label>
              <Input
                type="technology"
                id="technology"
                placeholder="Ex: HTML"
                className="font-montserrat w-[300px]"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
              />
            </div>
          </div>
          <Chat proficiency={proficiency} technology={technology}></Chat>
        </div>
      </div>
    </>
  );
}
