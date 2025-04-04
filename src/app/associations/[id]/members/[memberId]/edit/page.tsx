import { getMemberById, getAssociationById } from '@/lib/dataService';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface MemberEditPageProps {
  params: {
    id: string;
    memberId: string;
  };
}

export default function MemberEditPage({ params }: MemberEditPageProps) {
  const member = getMemberById(params.memberId);
  const association = getAssociationById(params.id);

  if (!member || !association) {
    return <div>Member not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 px-4">
        <div className="max-w-7xl mx-auto py-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">تعديل معلومات العضو</h1>
            </div>
            <Link href={`/associations/${params.id}/members/${params.memberId}`}>
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                العودة
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">المعلومات الشخصية</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">الاسم</Label>
                  <Input id="name" defaultValue={member.name} />
                </div>
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" defaultValue={member.email} />
                </div>
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" defaultValue={member.phone} />
                </div>
                <div>
                  <Label htmlFor="gender">الجنس</Label>
                  <Select defaultValue={member.gender}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الجنس" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">ذكر</SelectItem>
                      <SelectItem value="female">أنثى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="maritalStatus">الحالة الاجتماعية</Label>
                  <Select defaultValue={member.maritalStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة الاجتماعية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">أعزب</SelectItem>
                      <SelectItem value="married">متزوج</SelectItem>
                      <SelectItem value="divorced">مطلق</SelectItem>
                      <SelectItem value="widowed">أرمل</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="occupation">المهنة</Label>
                  <Select defaultValue={member.occupation}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المهنة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employed">موظف</SelectItem>
                      <SelectItem value="student">طالب</SelectItem>
                      <SelectItem value="unemployed">عاطل عن العمل</SelectItem>
                      <SelectItem value="retired">متقاعد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">معلومات العضوية</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="status">الحالة</Label>
                  <Select defaultValue={member.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">نشط</SelectItem>
                      <SelectItem value="inactive">غير نشط</SelectItem>
                      <SelectItem value="pending">قيد الانتظار</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="role">الدور</Label>
                  <Select defaultValue={member.role}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الدور" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">مدير</SelectItem>
                      <SelectItem value="member">عضو</SelectItem>
                      <SelectItem value="volunteer">متطوع</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="contributions">عدد المساهمات</Label>
                  <Input id="contributions" type="number" defaultValue={member.contributions} />
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-6 flex justify-end">
            <Button>حفظ التغييرات</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 