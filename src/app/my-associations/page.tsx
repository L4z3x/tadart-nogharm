'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { getAssociations } from '@/lib/dataService';

// Mock data for associations
const associations = getAssociations();
// Mock user memberships - this would come from your backend
interface UserMemberships {
  [key: string]: boolean;
}

const userMemberships: UserMemberships = {
  "1": true,  // User is a member of association with ID 1
  "2": true, // User is not a member of association with ID 2
  "3": false  // User is not a member of association with ID 3
};

export default function MyAssociationsPage() {
  const { user } = useSelector((state: RootState) => state.auth);
  const isAdmin = user?.is_staff || user?.is_superuser;

  // Filter associations to only show those the user is a member of
  const userAssociations = associations.filter(association => userMemberships[association.id]);

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
                  الهيئات التي أنتمي إليها
                </h1>

                {userAssociations.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg font-[400]">
                      لم تنضم إلى أي جمعية بعد
                    </p>
                    <Link
                      href="/associations"
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out font-[600]"
                    >
                      استكشف الهيئات
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userAssociations.map((association) => (
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
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 font-[600]">
                                عضو في الجمعية
                              </span>
                              <span className="text-sm text-gray-500 font-[400]">
                                {association.activities.length} نشاط
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 