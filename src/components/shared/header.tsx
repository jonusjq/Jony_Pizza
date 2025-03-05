import { cn } from "@/lib/utils";
import { Container } from "./container";
import * as React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { Search, ShoppingCart, ArrowRight, User } from "lucide-react";


interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="лого" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">next pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкуснеее уже некуда</p>
          </div>
        </div>
        {/* правая часть */}
        <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />Войти
            </Button>
            <Button variant="outline">
            <ShoppingCart size={16}/>
            </Button>
            <div>
              <Button className="group relative">
                <b>520 ₽</b>
                <span className="h-full w-[1px] bg-white/30 mx-3"></span>
                <div className="flex items-center gap-1">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
                </div>
              </Button>
            </div>
        </div>
      </Container>
    </header>
  );
};
