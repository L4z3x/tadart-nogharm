'use client'

import React from 'react';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function ProfilePage() {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 font-[800]">
                لم يتم العثور على بيانات المستخدم
              </h1>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Sidebar />
            </div>
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 font-[800]">
                  الملف الشخصي
                </h1>
                <p className="text-gray-600 font-[400]">
                  إدارة معلومات حسابك وإعداداته
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 font-[800]">
                    المعلومات الشخصية
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-[600]">
                        الاسم الكامل
                      </label>
                      <p className="mt-1 text-gray-900 font-[400]">
                        {user.first_name || ''} {user.last_name || ''}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-[600]">
                        البريد الإلكتروني
                      </label>
                      <p className="mt-1 text-gray-900 font-[400]">
                        {user.email || 'غير محدد'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-[600]">
                        رقم الهاتف
                      </label>
                      <p className="mt-1 text-gray-900 font-[400]">
                        {user.phone || 'غير محدد'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-[600]">
                        تاريخ الميلاد
                      </label>
                      <p className="mt-1 text-gray-900 font-[400]">
                        {user.birth_date || 'غير محدد'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-[600]">
                        الجنس
                      </label>
                      <p className="mt-1 text-gray-900 font-[400]">
                        {user.gender === 'M' ? 'ذكر' : user.gender === 'F' ? 'أنثى' : 'غير محدد'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 font-[800]">
                    إعدادات الحساب
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-[600]">
                        نوع الحساب
                      </label>
                      <p className="mt-1 text-gray-900 font-[400]">
                        {user.is_superuser ? 'مدير النظام' : user.is_staff ? 'موظف' : 'مستخدم عادي'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-[600]">
                        حالة الحساب
                      </label>
                      <p className="mt-1 text-gray-900 font-[400]">
                        نشط
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-[600]">
                        تاريخ التسجيل
                      </label>
                      <p className="mt-1 text-gray-900 font-[400]">
                        {new Date().toLocaleDateString('ar-SA')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 