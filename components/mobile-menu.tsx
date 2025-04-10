"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="fixed inset-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Cafeteria Fire Station</span>
            </div>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
            <Link
              href="#inicio"
              className="text-2xl font-medium hover:text-cafe-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#nosotros"
              className="text-2xl font-medium hover:text-cafe-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#testimonios"
              className="text-2xl font-medium hover:text-cafe-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="text-2xl font-medium hover:text-cafe-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
            <div className="flex gap-4 mt-8">
              <Button variant="outline" className="text-lg border-cafe-500 text-cafe-500 hover:bg-cafe-500 hover:text-white" onClick={() => setOpen(false)}>
                Reservar
              </Button>
              <Button className="bg-cafe-500 hover:bg-cafe-600 text-lg" onClick={() => setOpen(false)}>
                Menú
              </Button>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
} 