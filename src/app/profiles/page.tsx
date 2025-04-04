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
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">لا يوجد بيانات للمستخدم</h1>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  const userAssociations = associations.filter(association => userAssociationsInfo[association.id])

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Sidebar />
            </div>
            <div className="md:col-span-3">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-primary/10">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-2xl font-bold text-primary">معلوماتي</h1>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20">
                      <UserGroupIcon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-medium text-primary">{userAssociations.length} جمعية</span>
                  </div>
                </div>
                
                {userAssociations.length > 0 ? (
                  <div className="space-y-6">
                    {userAssociations.map((association) => {
                      const info = userAssociationsInfo[association.id]
                      return (
                        <div key={association.id} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 hover:border-primary/20 transition-all duration-300">
                          <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-primary">{association.name}</h2>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              info.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' : 
                              info.status === 'معلق' ? 'bg-amber-100 text-amber-700' : 
                              'bg-muted text-muted-foreground'
                            }`}>
                              {info.status || 'غير محدد'}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-xl p-5 border border-primary/10">
                                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 mr-3">
                                    <UserGroupIcon className="h-5 w-5 text-primary" />
                                  </div>
                                  معلومات العضوية
                                </h3>
                                <div className="space-y-4">
                                  <div>
                                    <label className="block text-sm font-medium text-muted-foreground">الدور</label>
                                    <p className="mt-1 text-foreground font-medium">{info.role || 'غير محدد'}</p>
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-muted-foreground">تاريخ الانضمام</label>
                                    <p className="mt-1 text-foreground font-medium flex items-center">
                                      <CalendarIcon className="h-4 w-4 text-primary mr-2" />
                                      {info.join_date || 'غير محدد'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-xl p-5 border border-primary/10">
                                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 mr-3">
                                    <ChartBarIcon className="h-5 w-5 text-primary" />
                                  </div>
                                  الإحصائيات
                                </h3>
                                <div className="space-y-4">
                                  <div>
                                    <label className="block text-sm font-medium text-muted-foreground">الفعاليات المشارك فيها</label>
                                    <p className="mt-1 text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{info.activities_participated || 0}</p>
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-muted-foreground">الفعاليات القادمة</label>
                                    <p className="mt-1 text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{info.upcoming_events || 0}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {info.achievements && info.achievements.length > 0 && (
                            <div className="mt-6">
                              <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-xl p-5 border border-primary/10">
                                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 mr-3">
                                    <TrophyIcon className="h-5 w-5 text-primary" />
                                  </div>
                                  الإنجازات
                                </h3>
                                <ul className="space-y-2">
                                  {info.achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-center text-muted-foreground">
                                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-500 mr-2"></span>
                                      {achievement}
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
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 mb-4">
                      <UserGroupIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-primary mb-2">لم تنضم إلى أي جمعية بعد</h3>
                    <p className="text-muted-foreground">يمكنك استكشاف الجمعيات المتاحة والانضمام إليها</p>
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