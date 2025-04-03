import React from 'react';
import { fetchAccessRequests, fetchUserProfiles, fetchAssociations } from '@/lib/mockApi';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import ProtectedRoute from '@/components/ProtectedRoute';

export default async function RequestsPage() {
  const [requests, profiles, associations] = await Promise.all([
    fetchAccessRequests(),
    fetchUserProfiles(),
    fetchAssociations(),
  ]);

  const getProfileName = (userId: number) => {
    const profile = profiles.find(p => p.id === userId);
    return profile?.name || 'مستخدم غير معروف';
  };

  const getAssociationName = (associationId: number) => {
    const association = associations.find(a => a.id === associationId);
    return association?.name || 'جمعية غير معروفة';
  };

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
                  طلبات الوصول
                </h1>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-indigo-100">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                       مقدم الطلب
                       </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                         مستقبل الطلب
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
                          {getProfileName(request.userId)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {getAssociationName(request.associationId)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`font-medium ${
                            request.status === 'pending'
                              ? 'text-amber-700'
                              : request.status === 'approved'
                              ? 'text-emerald-700'
                              : 'text-red-700'
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
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 