'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {Textarea}  from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import Navigation from '@/components/Navigation'

export default function CreateAssociationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    associationName: '',
    purpose: '',
    vision: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log('Form submitted:', formData)
    // For now, just redirect back to associations page
    router.push('/associations')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto p-4">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">إنشاء جمعية جديدة</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium">
                الاسم الكامل
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="أدخل الاسم الكامل"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="associationName" className="block text-sm font-medium">
                اسم الجمعية
              </label>
              <Input
                id="associationName"
                name="associationName"
                value={formData.associationName}
                onChange={handleChange}
                required
                placeholder="أدخل اسم الجمعية"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="purpose" className="block text-sm font-medium">
                الغرض
              </label>
              <Textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                placeholder="أدخل غرض الجمعية"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="vision" className="block text-sm font-medium">
                الرؤية
              </label>
              <Textarea
                id="vision"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                required
                placeholder="أدخل رؤية الجمعية"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium">
                الوصف
              </label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="أدخل وصف الجمعية"
                className="min-h-[100px]"
              />
            </div>

            <div className="flex justify-end space-x-4 space-x-reverse">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/')}
              >
                إلغاء
              </Button>
              <Button type="submit">
                إنشاء الجمعية
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
} 