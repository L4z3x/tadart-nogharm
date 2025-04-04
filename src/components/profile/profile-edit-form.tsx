"use client"

import React from 'react'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useToast from "@/components/ui/use-toast"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Mock member data (using member ID 1)
const member = {
  id: "1",
  name: "أحمد محمد",
  email: "ahmed.mohammed@example.com",
  phone: "+966501234567",
  joinDate: "2023-01-15",
  status: "active",
  role: "admin",
  lastActivity: "2024-04-01",
  financialStatus: "rich",
  maritalStatus: "married",
  occupation: "employed",
  gender: "male"
}

export function ProfileEditForm() {
  const { toast } = useToast()
  const router = useRouter()

  const handleSave = () => {
    // Here you would typically send the data to your API
    // For now, we'll just show the success message
    toast({
      title: "تم إرسال التعديلات بنجاح",
      description: "سيتم مراجعة التعديلات في أقرب وقت",
      duration: 5000,
    })
    
    // Redirect back to profile page after 2 seconds
    setTimeout(() => {
      router.push('/profile')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Sidebar />
          </div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/profile">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <h1 className="text-3xl font-bold">تعديل الملف الشخصي</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>المعلومات الأساسية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم</Label>
                  <Input id="name" defaultValue={member.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" defaultValue={member.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" defaultValue={member.phone} />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>الحالة والمعلومات الإضافية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status">الحالة</Label>
                  <Select defaultValue={member.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">نشط</SelectItem>
                      <SelectItem value="inactive">غير نشط</SelectItem>
                      <SelectItem value="pending">قيد الانتظار</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">الدور</Label>
                  <Select defaultValue={member.role}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الدور" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">مدير</SelectItem>
                      <SelectItem value="member">عضو</SelectItem>
                      <SelectItem value="volunteer">متطوع</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="financialStatus">الحالة المالية</Label>
                  <Select defaultValue={member.financialStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة المالية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rich">ميسور</SelectItem>
                      <SelectItem value="poor">غير ميسور</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">الحالة الاجتماعية</Label>
                  <Select defaultValue={member.maritalStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة الاجتماعية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">أعزب</SelectItem>
                      <SelectItem value="married">متزوج</SelectItem>
                      <SelectItem value="divorced">مطلق</SelectItem>
                      <SelectItem value="widowed">أرمل</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation">المهنة</Label>
                  <Select defaultValue={member.occupation}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المهنة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employed">موظف</SelectItem>
                      <SelectItem value="unemployed">عاطل عن العمل</SelectItem>
                      <SelectItem value="student">طالب</SelectItem>
                      <SelectItem value="retired">متقاعد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">الجنس</Label>
                  <Select defaultValue={member.gender}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الجنس" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">ذكر</SelectItem>
                      <SelectItem value="female">أنثى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4 mt-6">
              <Link href="/profile">
                <Button variant="outline">إلغاء</Button>
              </Link>
              <Button onClick={handleSave}>حفظ التغييرات</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 