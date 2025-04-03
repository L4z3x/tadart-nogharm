'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useSelector((state: RootState) => state.auth)

  const isActive = (path: string) => pathname === path

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-indigo-100">
      <nav className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            اساسيات
          </h3>
          <div className="space-y-1">
            <Link
              href="/"
              className={`flex items-center space-x-3 space-x-reverse p-2 rounded-md transition duration-150 ease-in-out ${
                isActive('/')
                  ? 'text-indigo-700 font-medium'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>الرئيسية</span>
            </Link>

            <Link
              href="/associations"
              className={`flex items-center space-x-3 space-x-reverse p-2 rounded-md transition duration-150 ease-in-out ${
                isActive('/associations')
                  ? 'text-indigo-700 font-medium'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span>الجمعيات</span>
            </Link>

            <Link
              href="/my-associations"
              className={`flex items-center space-x-3 space-x-reverse p-2 rounded-md transition duration-150 ease-in-out ${
                isActive('/my-associations')
                  ? 'text-indigo-700 font-medium'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>جمعياتي</span>
            </Link>

            <Link
              href="/profiles"
              className={`flex items-center space-x-3 space-x-reverse p-2 rounded-md transition duration-150 ease-in-out ${
                isActive('/profiles')
                  ? 'text-indigo-700 font-medium'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>معلوماتي</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            إعدادات الحساب
          </h3>
          <div className="space-y-1">
            <Link
              href="/profile"
              className={`flex items-center space-x-3 space-x-reverse p-2 rounded-md transition duration-150 ease-in-out ${
                isActive('/profile')
                  ? 'text-indigo-700 font-medium'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>الملف الشخصي</span>
            </Link>

            <Link
              href="/requests"
              className={`flex items-center space-x-3 space-x-reverse p-2 rounded-md transition duration-150 ease-in-out ${
                isActive('/requests')
                  ? 'text-indigo-700 font-medium'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span>الطلبات</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
} 