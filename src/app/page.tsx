"use client"

import React, { useState } from 'react'
import { fetchAssociations } from '@/lib/mockApi'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import ProtectedRoute from '@/components/ProtectedRoute'
import { 
  CalendarIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  TrophyIcon,
  StarIcon,
  ClockIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
  XMarkIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default async function HomePage() {
  const associations = await fetchAssociations()
  
  // Mock data for statistics
  const stats = {
    totalAssociations: 24,
    activeMembers: 156,
    upcomingEvents: 8,
    completedActivities: 42
  }

  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "ورشة عمل التطوع",
      date: "2024-04-15",
      time: "10:00 صباحاً",
      location: "مركز المجتمع",
      association: "جمعية التطوع الخيرية"
    },
    {
      id: 2,
      title: "حملة تنظيف الشاطئ",
      date: "2024-04-20",
      time: "08:00 صباحاً",
      location: "شاطئ المدينة",
      association: "جمعية حماية البيئة"
    }
  ]

  return (
    <ProtectedRoute>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        {/* <Navigation /> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="md:col-span-3 space-y-8">
              {/* Welcome Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-indigo-100">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  مرحباً بك في تدارت نوغرم
                </h1>
                <p className="text-gray-600">تابع آخر الأنشطة والفعاليات في الهيئات</p>
              </div>

              {/* Statistics Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-indigo-50">
                      <UserGroupIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">الجمعيات</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalAssociations}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-emerald-50">
                      <ChartBarIcon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">الأعضاء النشطين</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.activeMembers}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-amber-50">
                      <CalendarIcon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">الفعاليات القادمة</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.upcomingEvents}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-blue-50">
                      <TrophyIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">الأنشطة المكتملة</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.completedActivities}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Events Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-indigo-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">الفعاليات القادمة</h2>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    عرض الكل
                  </button>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-indigo-200 transition-colors duration-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-500">{event.association}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <ClockIcon className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{new Date(event.date).toLocaleDateString('ar-SA')}</span>
                        </div>
                        <div className="flex items-center">
                          <StarIcon className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-indigo-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">الأنشطة الأخيرة</h2>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    عرض الكل
                  </button>
                </div>
                <div className="space-y-6">
                  {associations.map((association) =>
                    association.activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:border-indigo-200 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {activity.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <UserGroupIcon className="h-5 w-5 text-indigo-600" />
                            <span className="text-sm text-gray-600">{association.name}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{activity.description}</p>
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-4 w-4 text-indigo-600 mr-2" />
                          <span>{new Date(activity.date).toLocaleDateString('ar-SA')}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}