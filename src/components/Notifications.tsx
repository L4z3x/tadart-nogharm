import React from 'react';
import { fetchAccessRequests } from '@/lib/mockApi';
import Link from 'next/link';

export default async function Notifications() {
  const requests = await fetchAccessRequests();
  const pendingRequests = requests.filter(r => r.status === 'pending');

  if (pendingRequests.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <h3 className="text-lg font-semibold mb-2">طلبات قيد الانتظار</h3>
        <div className="space-y-2">
          {pendingRequests.map(request => (
            <div key={request.id} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                طلب وصول جديد من المستخدم {request.userId}
              </span>
              <Link
                href="/requests"
                className="text-primary-600 hover:text-primary-800 text-sm"
              >
                عرض
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 