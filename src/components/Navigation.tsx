"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Plus, Bell } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mockNotifications = [
  {
    id: 1,
    title: 'طلب انضمام جديد',
    message: 'طلب أحمد محمد الانضمام إلى جمعيتك',
    time: 'منذ 5 دقائق',
    read: false
  },
  {
    id: 2,
    title: 'تحديث حالة',
    message: 'تم تحديث حالة طلبك إلى "مقبول"',
    time: 'منذ ساعة',
    read: true
  },
  {
    id: 3,
    title: 'رسالة جديدة',
    message: 'لديك رسالة جديدة من إدارة المنصة',
    time: 'منذ يومين',
    read: false
  }
]

export default function Navigation() {
  const pathname = usePathname()

  return (
   <nav className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative w-24 h-24">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <Link href="/" className="text-3xl font-bold text-primary font-[800]">
              تدارت نوغرم
            </Link>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link
              href="/search"
              className="p-2 text-primary/70 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-full transition-colors"
            >
              <span className="sr-only">بحث</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {mockNotifications.some(n => !n.read) && (
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                {mockNotifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className={cn(
                    "flex flex-col items-start p-3",
                    !notification.read && "bg-muted"
                  )}>
                    <div className="font-medium">{notification.title}</div>
                    <div className="text-sm text-muted-foreground">{notification.message}</div>
                    <div className="text-xs text-muted-foreground mt-1">{notification.time}</div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/create-association">
              <Button variant="outline" size="icon" className="bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary/20 hover:to-blue-500/20 border-primary/20">
                <Plus className="h-4 w-4 text-primary" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 