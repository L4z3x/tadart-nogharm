import { getMemberById, getAssociationById } from '@/lib/dataService';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { AssociationImage } from '@/components/association-image';

interface MemberProfilePageProps {
  params: {
    id: string;
    memberId: string;
  };
}

export default function MemberProfilePage({ params }: MemberProfilePageProps) {
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
              <h1 className="text-2xl font-bold">معلومات العضو</h1>
              <p className="text-muted-foreground">عرض وتعديل معلومات العضو</p>
            </div>
            <Link href={`/associations/${params.id}/members/${params.memberId}/edit`}>
              <Button variant="outline" className="flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                تعديل
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">المعلومات الشخصية</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">الاسم</label>
                  <p className="font-medium">{member.name}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">البريد الإلكتروني</label>
                  <p className="font-medium">{member.email}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">رقم الهاتف</label>
                  <p className="font-medium">{member.phone}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">الجنس</label>
                  <p className="font-medium">{member.gender === 'male' ? 'ذكر' : 'أنثى'}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">الحالة الاجتماعية</label>
                  <p className="font-medium">
                    {member.maritalStatus === 'single' ? 'أعزب' :
                     member.maritalStatus === 'married' ? 'متزوج' :
                     member.maritalStatus === 'divorced' ? 'مطلق' : 'أرمل'}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">المهنة</label>
                  <p className="font-medium">
                    {member.occupation === 'employed' ? 'موظف' :
                     member.occupation === 'student' ? 'طالب' :
                     member.occupation === 'unemployed' ? 'عاطل عن العمل' : 'متقاعد'}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">معلومات العضوية</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">الهيئة</label>
                  <p className="font-medium">{association.name}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">تاريخ الانضمام</label>
                  <p className="font-medium">{member.joinDate}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">الحالة</label>
                  <Badge variant={member.status === 'active' ? 'success' : member.status === 'inactive' ? 'destructive' : 'secondary'}>
                    {member.status === 'active' ? 'نشط' : member.status === 'inactive' ? 'غير نشط' : 'قيد الانتظار'}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">الدور</label>
                  <Badge variant={member.role === 'admin' ? 'admin' : member.role === 'member' ? 'default' : 'secondary'}>
                    {member.role === 'admin' ? 'مدير' : member.role === 'member' ? 'عضو' : 'متطوع'}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">الحالة المادية</label>
                   <Badge variant={member.financialStatus === 'rich' ? 'success' : member.financialStatus === 'poor' ? 'destructive' : 'secondary'}>
                    {member.financialStatus === 'rich' ? 'مكتفي':'معوز'}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">آخر نشاط</label>
                  <p className="font-medium">{member.lastActivity}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 