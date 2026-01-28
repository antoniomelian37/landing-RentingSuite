import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"


const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
title: "RentingSuite",
description: "Gestión de alquiler de vehículos para empresas de renting.",
}


export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="es">
<body className={inter.className}>
<Header />
<main>{children}</main>
</body>
</html>
)
}