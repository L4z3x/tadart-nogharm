'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function AssociationsPage() {
  const { data: associations } = useSelector((state: RootState) => state.associations)
  const { memberships } = useSelector((state: RootState) => state.memberships)

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Sidebar />
            </div>
            <div className="md:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-indigo-100">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  الجمعيات
                </h1>
                <p className="text-gray-600">
                  استكشف الجمعيات المتاحة وانضم إلى ما يهمك
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {associations.map((association) => (
                  <Link
                    key={association.id}
                    href={`/associations/${association.id}`}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-indigo-100"
                  >
                    <div className="relative h-48">
                      <Image
                        src={association.banner}
                        alt={association.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        {association.name}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {association.description}
                      </p>
                      {memberships[association.id] && (
                        <span className="text-emerald-700 font-medium">
                          عضو في الجمعية
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
} 