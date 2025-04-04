'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute';
import data from '@/lib/data.json';

interface AccessRequest {
  id: number;
  userId: number;
  userName: string;
  associationId: number;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
  notes: string;
}

interface Association {
  id: string;
  name: string;
  description: string;
}

interface Data {
  associations: Association[];
  members: any[];
  accessRequests: AccessRequest[];
}

const typedData = data as unknown as Data;

export default function AssociationRequestsPage() {
  const params = useParams();
  const associationId = parseInt(params.id as string);
  
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [association, setAssociation] = useState<Association | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the association
    const foundAssociation = typedData.associations.find(
      assoc => parseInt(assoc.id) === associationId
    );
    
    // Get all requests
    const allRequests = typedData.accessRequests;
    
    setAssociation(foundAssociation || null);
    setRequests(allRequests);
    setLoading(false);
  }, [associationId]);

  // Helper function to get association name by ID
  const getAssociationName = (id: number) => {
    const assoc = typedData.associations.find(a => parseInt(a.id) === id);
    return assoc ? assoc.name : 'جمعية غير معروفة';
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">جاري التحميل...</h3>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!association) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-primary mb-2">الجمعية غير موجودة</h3>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

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
                <h1 className="text-3xl font-bold text-primary mb-2">
                  جميع طلبات الوصول
                </h1>
                <p className="text-gray-600">
                  إدارة جميع طلبات الانضمام للجمعيات
                </p>
              </div>
              
              {requests.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-indigo-100 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-2">لا توجد طلبات</h3>
                  <p className="text-gray-600">لا توجد طلبات انضمام حالية</p>
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-indigo-100">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                         مقدم الطلب
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الجمعية
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الحالة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          تاريخ الطلب
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الإجراءات
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {requests.map((request) => (
                        <tr key={request.id} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                            {request.userName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                            {getAssociationName(request.associationId)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              request.status === 'pending'
                                ? 'bg-amber-100 text-amber-800'
                                : request.status === 'approved'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {request.status === 'pending'
                                ? 'قيد الانتظار'
                                : request.status === 'approved'
                                ? 'تم الموافقة'
                                : 'مرفوض'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {new Date(request.requestedAt).toLocaleString('ar-SA')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {request.status === 'pending' && (
                              <div className="space-x-2">
                                <button className="text-emerald-600 hover:text-emerald-900 transition-colors px-2 duration-150">
                                  موافقة
                                </button>
                                <button className="text-red-600 hover:text-red-900 transition-colors duration-150">
                                  رفض
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 