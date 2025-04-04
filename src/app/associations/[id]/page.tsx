'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute';
import JoinAssociationModal from '@/components/JoinAssociationModal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { joinAssociation } from '@/store/slices/membershipsSlice';
import { getAssociationById } from '@/lib/dataService';

export default function AssociationProfile() {
  const params = useParams();
  const associationId = params.id as string;
  const dispatch = useDispatch();
  
  const { user } = useSelector((state: RootState) => state.auth);
  const memberships = useSelector((state: RootState) => state.memberships);
  
  const isAdmin = user?.is_staff || user?.is_superuser;
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const isMember = memberships[associationId] || false;

  const association = getAssociationById(associationId);

  const handleJoinSubmit = (data: any) => {
    // Here you would typically send the join request to your backend
    console.log('Join request data:', data);
    dispatch(joinAssociation(associationId));
    setIsJoinModalOpen(false);
  };

  if (!association) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 font-[800]">
                الجمعية غير موجودة
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
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={association.banner}
                  alt={association.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end">
                  <div className="w-full p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white font-[800]">
                      {association.name}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={isAdmin ? "md:col-span-2" : "md:col-span-3"}>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[800]">
                      الأنشطة
                    </h2>
                    <div className="space-y-4">
                      {association.activities.map((activity) => (
                        <div
                          key={activity.id}
                          className="bg-gray-50 rounded-lg p-6"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-2 font-[800]">
                            {activity.title}
                          </h3>
                          <p className="text-gray-600 mb-2 font-[400]">
                            {activity.description}
                          </p>
                          <div className="text-sm text-gray-500 font-[400]">
                            التاريخ: {activity.date}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {isAdmin && (
                  <div className="md:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                      <h2 className="text-xl font-bold text-gray-900 mb-4 font-[800]">
                        إجراءات سريعة
                      </h2>
                      <div className="space-y-4">
                        <Link
                          href={`/associations/${association.id}/activities/new`}
                          className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out font-[600]"
                        >
                          إضافة نشاط جديد
                        </Link>
                        <Link
                          href={`/associations/${association.id}/members`}
                          className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out font-[600]"
                        >
                          عرض الأعضاء
                        </Link>
                        <Link
                          href={`/associations/${association.id}/requests`}
                          className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out font-[600]"
                        >
                          عرض الطلبات
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <JoinAssociationModal
          isOpen={isJoinModalOpen}
          onClose={() => setIsJoinModalOpen(false)}
          onSubmit={handleJoinSubmit}
          associationName={association.name}
        />
      </div>
    </ProtectedRoute>
  );
} 