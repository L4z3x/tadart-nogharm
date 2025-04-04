'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssociations } from '@/lib/dataService'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function AssociationsPage() {
  const associations = getAssociations()

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
                <h1 className="text-2xl font-bold text-gray-900 mb-6 font-[800]">
                  جميع الهيئات
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {associations.map((association) => (
                    <Link
                      key={association.id}
                      href={`/associations/${association.id}`}
                      className="group"
                    >
                      <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-150 ease-in-out group-hover:shadow-lg">
                        <div className="relative h-48">
                          <Image
                            src={association.banner}
                            alt={association.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end">
                            <div className="w-full p-4">
                              <h2 className="text-xl font-bold text-white font-[800]">
                                {association.name}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-600 text-sm mb-4 font-[400]">
                            {association.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {association.categories.map((category, index) => (
                                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 font-[600]">
                                  {category}
                                </span>
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 font-[400]">
                              {association.membersCount} عضو
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
} 