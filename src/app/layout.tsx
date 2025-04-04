import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/store/Providers';
import { cn } from "@/lib/utils";
import { cairo } from './fonts';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'تدارت نوغرم',
  description: 'منصة إدارة الجمعيات',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        cairo.variable
      )}>
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
} 