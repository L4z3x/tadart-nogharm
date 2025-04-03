'use client'

import React, { useState } from 'react'

interface JoinAssociationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
  associationName: string
}

export default function JoinAssociationModal({
  isOpen,
  onClose,
  onSubmit,
  associationName
}: JoinAssociationModalProps) {
  const [formData, setFormData] = useState({
    motivation: '',
    skills: '',
    availability: '',
    previousExperience: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[800]">
          الانضمام إلى {associationName}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1 font-[500]">
              الدافع للانضمام
            </label>
            <textarea
              id="motivation"
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-[400]"
              rows={3}
              required
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1 font-[500]">
              المهارات والخبرات
            </label>
            <textarea
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-[400]"
              rows={3}
              required
            />
          </div>

          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1 font-[500]">
              مدى التوفر
            </label>
            <input
              type="text"
              id="availability"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-[400]"
              placeholder="مثال: 10 ساعات أسبوعياً"
              required
            />
          </div>

          <div>
            <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-1 font-[500]">
              الخبرات السابقة
            </label>
            <textarea
              id="previousExperience"
              value={formData.previousExperience}
              onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-[400]"
              rows={3}
              required
            />
          </div>

          <div className="flex justify-end space-x-4 space-x-reverse">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out font-[500]"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out font-[600]"
            >
              تقديم الطلب
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 