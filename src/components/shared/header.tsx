import { cn } from "@/lib/utils";
import { Container } from "./container";
import * as React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";


interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Правая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="лого" width={35} height={35} />
          <div>
            <h1 className=" font-black">next pizza</h1>
            <p>вкуснеее уже некуда</p>
          </div>
        </div>
        {/* левая часть */}
        <div className="flex width-25">
            <Button variant="outline" className="mr-4">
            <User width={20} height={20} />профиль
            </Button>
            <Button variant="outline">
            <ShoppingCart />
            </Button>
        </div>
      </Container>
    </header>
  );
};
