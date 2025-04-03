'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Sidebar from '@/components/Sidebar'
import ProtectedRoute from '@/components/ProtectedRoute'
import Link from 'next/link'
import { CalendarIcon, UserGroupIcon, TrophyIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import Navigation from '@/components/Navigation'

export default function ProfilesPage() {
  const user = useSelector((state: RootState) => state.auth.user)
  const associations = useSelector((state: RootState) => state.associations.data)
  const userAssociationsInfo = useSelector((state: RootState) => state.userAssociations.data)

  if (!user) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">لا يوجد بيانات للمستخدم</h1>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  const userAssociations = associations.filter(association => userAssociationsInfo[association.id])

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Sidebar />
            </div>
            <div className="md:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">معلوماتي</h1>
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="h-6 w-6 text-indigo-600" />
                    <span className="font-medium text-indigo-700">{userAssociations.length} جمعية</span>
                  </div>
                </div>
                
                {userAssociations.length > 0 ? (
                  <div className="space-y-8">
                    {userAssociations.map((association) => {
                      const info = userAssociationsInfo[association.id]
                      return (
                        <div key={association.id} className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                          <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{association.name}</h2>
                            <span className={`text-sm font-medium ${
                              info.status === 'نشط' ? 'text-emerald-700' : 
                              info.status === 'معلق' ? 'text-amber-700' : 
                              'text-gray-700'
                            }`}>
                              {info.status || 'غير محدد'}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                              <div className="bg-white rounded-xl p-5 shadow-sm border border-indigo-100 hover:border-indigo-200 transition-colors duration-300">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 mr-3">
                                    <UserGroupIcon className="h-5 w-5 text-indigo-600" />
                                  </div>
                                  معلومات العضوية
                                </h3>
                                <div className="space-y-4">
                                  <div>
                                    <label className="block text-sm font-medium text-gray-600">الدور</label>
                                    <p className="mt-1 text-gray-900 font-medium">{info.role || 'غير محدد'}</p>
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-600">تاريخ الانضمام</label>
                                    <p className="mt-1 text-gray-900 font-medium flex items-center">
                                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 mr-2">
                                        <CalendarIcon className="h-4 w-4 text-indigo-600" />
                                      </div>
                                      {info.join_date || 'غير محدد'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-6">
                              <div className="bg-white rounded-xl p-5 shadow-sm border border-indigo-100 hover:border-indigo-200 transition-colors duration-300">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 mr-3">
                                    <ChartBarIcon className="h-5 w-5 text-indigo-600" />
                                  </div>
                                  الإحصائيات
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-gray-600">الأنشطة</p>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{info.activities_participated || 0}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-600">الفعاليات</p>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{info.upcoming_events || 0}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {info.achievements && info.achievements.length > 0 && (
                            <div className="mt-8">
                              <div className="bg-white rounded-xl p-5 shadow-sm border border-indigo-100 hover:border-indigo-200 transition-colors duration-300">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 mr-3">
                                    <TrophyIcon className="h-5 w-5 text-indigo-600" />
                                  </div>
                                  الإنجازات
                                </h3>
                                <ul className="space-y-3">
                                  {info.achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start">
                                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 mr-2 mt-0.5">
                                        <span className="text-indigo-600 text-sm">•</span>
                                      </div>
                                      <span className="text-gray-700">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 mb-4 border border-indigo-200">
                      <UserGroupIcon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">لا توجد جمعيات مسجلة</h3>
                    <p className="text-gray-500">يمكنك استكشاف الجمعيات المتاحة والانضمام إليها</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
} 