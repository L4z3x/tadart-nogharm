'use client'

import React from 'react';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pencil } from "lucide-react"
import Link from "next/link"

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

const statusColors = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-red-100 text-red-800",
  pending: "bg-yellow-100 text-yellow-800"
}

const roleColors = {
  admin: "bg-blue-100 text-blue-800",
  member: "bg-gray-100 text-gray-800",
  volunteer: "bg-purple-100 text-purple-800"
}

const financialStatusColors = {
  rich: "bg-green-100 text-green-800",
  poor: "bg-red-100 text-red-800"
}

const maritalStatusColors = {
  single: "bg-gray-100 text-gray-800",
  married: "bg-blue-100 text-blue-800",
  divorced: "bg-red-100 text-red-800",
  widowed: "bg-purple-100 text-purple-800"
}

const occupationColors = {
  employed: "bg-green-100 text-green-800",
  unemployed: "bg-red-100 text-red-800",
  student: "bg-blue-100 text-blue-800",
  retired: "bg-gray-100 text-gray-800"
}

const genderColors = {
  male: "bg-blue-100 text-blue-800",
  female: "bg-pink-100 text-pink-800"
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Sidebar />
          </div>
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">الملف الشخصي</h1>
              <Link href="/profile/edit">
                <Button variant="outline" className="flex items-center gap-2">
                  <Pencil className="h-4 w-4" />
                  تعديل الملف الشخصي
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الأساسية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">الاسم</span>
                    <span className="font-medium">{member.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">البريد الإلكتروني</span>
                    <span className="font-medium">{member.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">رقم الهاتف</span>
                    <span className="font-medium">{member.phone}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">تاريخ الانضمام</span>
                    <span className="font-medium">{member.joinDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">آخر نشاط</span>
                    <span className="font-medium">{member.lastActivity}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الحالة والمعلومات الإضافية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">الحالة</span>
                    <Badge className={statusColors[member.status as keyof typeof statusColors]}>
                      {member.status === 'active' ? 'نشط' : member.status === 'inactive' ? 'غير نشط' : 'قيد الانتظار'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">الدور</span>
                    <Badge className={roleColors[member.role as keyof typeof roleColors]}>
                      {member.role === 'admin' ? 'مدير' : member.role === 'member' ? 'عضو' : 'متطوع'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">الحالة المالية</span>
                    <Badge className={financialStatusColors[member.financialStatus as keyof typeof financialStatusColors]}>
                      {member.financialStatus === 'rich' ? 'ميسور' : 'غير ميسور'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">الحالة الاجتماعية</span>
                    <Badge className={maritalStatusColors[member.maritalStatus as keyof typeof maritalStatusColors]}>
                      {member.maritalStatus === 'single' ? 'أعزب' : 
                       member.maritalStatus === 'married' ? 'متزوج' : 
                       member.maritalStatus === 'divorced' ? 'مطلق' : 'أرمل'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">المهنة</span>
                    <Badge className={occupationColors[member.occupation as keyof typeof occupationColors]}>
                      {member.occupation === 'employed' ? 'موظف' : 
                       member.occupation === 'unemployed' ? 'عاطل عن العمل' : 
                       member.occupation === 'student' ? 'طالب' : 'متقاعد'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">الجنس</span>
                    <Badge className={genderColors[member.gender as keyof typeof genderColors]}>
                      {member.gender === 'male' ? 'ذكر' : 'أنثى'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 