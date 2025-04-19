"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">打开菜单</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-8">
            <Link
              href="#home"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              首页
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              关于我
            </Link>
            <Link
              href="#skills"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              技能
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              项目
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              联系我
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
