'use client';

import { useState } from 'react';
import { mockMembers } from '@/lib/mockMembers';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [maritalStatusFilter, setMaritalStatusFilter] = useState<string>('all');
  const [occupationFilter, setOccupationFilter] = useState<string>('all');
  const [genderFilter, setGenderFilter] = useState<string>('all');

  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm);

    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    const matchesMaritalStatus = maritalStatusFilter === 'all' || member.maritalStatus === maritalStatusFilter;
    const matchesOccupation = occupationFilter === 'all' || member.occupation === occupationFilter;
    const matchesGender = genderFilter === 'all' || member.gender === genderFilter;

    return matchesSearch && matchesStatus && matchesRole && matchesMaritalStatus && matchesOccupation && matchesGender;
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <h2 className="text-lg font-semibold mb-4">التصفية</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">الحالة</label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="inactive">غير نشط</SelectItem>
                <SelectItem value="pending">قيد الانتظار</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">الدور</label>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الدور" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="admin">مدير</SelectItem>
                <SelectItem value="member">عضو</SelectItem>
                <SelectItem value="volunteer">متطوع</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">الحالة الاجتماعية</label>
            <Select value={maritalStatusFilter} onValueChange={setMaritalStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الحالة الاجتماعية" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="single">أعزب</SelectItem>
                <SelectItem value="married">متزوج</SelectItem>
                <SelectItem value="divorced">مطلق</SelectItem>
                <SelectItem value="widowed">أرمل</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">المهنة</label>
            <Select value={occupationFilter} onValueChange={setOccupationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="اختر المهنة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="employed">موظف</SelectItem>
                <SelectItem value="student">طالب</SelectItem>
                <SelectItem value="unemployed">عاطل</SelectItem>
                <SelectItem value="retired">متقاعد</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">الجنس</label>
            <Select value={genderFilter} onValueChange={setGenderFilter}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الجنس" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="male">ذكر</SelectItem>
                <SelectItem value="female">أنثى</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">الأعضاء</h1>
          <div className="flex gap-4">
            <Input
              placeholder="بحث..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <Button>إضافة عضو جديد</Button>
          </div>
        </div>

        <Card>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الاسم</TableHead>
                  <TableHead>البريد الإلكتروني</TableHead>
                  <TableHead>رقم الهاتف</TableHead>
                  <TableHead>تاريخ الانضمام</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الدور</TableHead>
                  <TableHead>آخر نشاط</TableHead>
                  <TableHead>المساهمات</TableHead>
                  <TableHead>الحالة الاجتماعية</TableHead>
                  <TableHead>المهنة</TableHead>
                  <TableHead>الجنس</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.phone}</TableCell>
                    <TableCell>{member.joinDate}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          member.status === 'active'
                            ? 'default'
                            : member.status === 'inactive'
                            ? 'destructive'
                            : 'secondary'
                        }
                      >
                        {member.status === 'active'
                          ? 'نشط'
                          : member.status === 'inactive'
                          ? 'غير نشط'
                          : 'قيد الانتظار'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          member.role === 'admin'
                            ? 'default'
                            : member.role === 'member'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {member.role === 'admin'
                          ? 'مدير'
                          : member.role === 'member'
                          ? 'عضو'
                          : 'متطوع'}
                      </Badge>
                    </TableCell>
                    <TableCell>{member.lastActivity}</TableCell>
                    <TableCell>{member.contributions}</TableCell>
                    <TableCell>
                      {member.maritalStatus === 'single'
                        ? 'أعزب'
                        : member.maritalStatus === 'married'
                        ? 'متزوج'
                        : member.maritalStatus === 'divorced'
                        ? 'مطلق'
                        : 'أرمل'}
                    </TableCell>
                    <TableCell>
                      {member.occupation === 'employed'
                        ? 'موظف'
                        : member.occupation === 'student'
                        ? 'طالب'
                        : member.occupation === 'unemployed'
                        ? 'عاطل'
                        : 'متقاعد'}
                    </TableCell>
                    <TableCell>
                      {member.gender === 'male' ? 'ذكر' : 'أنثى'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
} 