'use client';

import { useState } from 'react';
import { getMembers } from '@/lib/dataService';
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
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
interface MembersPageProps {
  params: {
    id: string;
  };
}

export default function MembersPage({ params }: MembersPageProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedFinancialStatus, setSelectedFinancialStatus] = useState<string>('all');
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<string>('all');
  const [selectedOccupation, setSelectedOccupation] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [selectedContributions, setSelectedContributions] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  const members = getMembers();


  const filteredMembers = members
    .filter((member) => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.phone.includes(searchTerm);

      const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus;
      const matchesFinancialStatus = selectedFinancialStatus === 'all' || member.financialStatus === selectedFinancialStatus;
      const matchesMaritalStatus = selectedMaritalStatus === 'all' || member.maritalStatus === selectedMaritalStatus;
      const matchesOccupation = selectedOccupation === 'all' || member.occupation === selectedOccupation;
      const matchesGender = selectedGender === 'all' || member.gender === selectedGender;
      const matchesContributions = selectedContributions === 'all' || 
        (selectedContributions === '0' && member.contributions === 0) ||
        (selectedContributions === '11+' && member.contributions >= 11) ||
        (() => {
          const [min, max] = selectedContributions.split('-').map(Number);
          return member.contributions >= min && member.contributions <= max;
        })();

      return matchesSearch && matchesStatus && matchesFinancialStatus && 
             matchesMaritalStatus && matchesOccupation && matchesGender && 
             matchesContributions;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedStatus('all');
    setSelectedFinancialStatus('all');
    setSelectedMaritalStatus('all');
    setSelectedOccupation('all');
    setSelectedGender('all');
    setSelectedContributions('all');
  };

  const handleRowClick = (memberId: string) => {
    router.push(`/associations/${params.id}/members/${memberId}`);
  };

  return (
    <div>

      <Navigation />
    
    <div className="flex h-screen">
      {/* Filters Sidebar */}
      <div className={`bg-background border-r transition-all duration-300 ${isFiltersOpen ? 'w-80' : 'w-0'}`}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold">التصفية</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={resetFilters}>
                إعادة تعيين
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFiltersOpen(false)}
                className="md:hidden"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-6">

              <div>
                <label className="text-sm font-medium mb-2 block text-right">الحالة</label>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full">
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
                <label className="text-sm font-medium mb-2 block text-right">الحالة المالية</label>
                <Select value={selectedFinancialStatus} onValueChange={setSelectedFinancialStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر الحالة المالية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">الكل</SelectItem>
                    <SelectItem value="poor">معوز</SelectItem>
                    <SelectItem value="rich">مكتفي</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-right">الحالة الاجتماعية</label>
                <Select value={selectedMaritalStatus} onValueChange={setSelectedMaritalStatus}>
                  <SelectTrigger className="w-full">
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
                <label className="text-sm font-medium mb-2 block text-right">المهنة</label>
                <Select value={selectedOccupation} onValueChange={setSelectedOccupation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر المهنة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">الكل</SelectItem>
                    <SelectItem value="employed">موظف</SelectItem>
                    <SelectItem value="student">طالب</SelectItem>
                    <SelectItem value="unemployed">عاطل عن العمل</SelectItem>
                    <SelectItem value="retired">متقاعد</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-right">الجنس</label>
                <Select value={selectedGender} onValueChange={setSelectedGender}>
                  <SelectTrigger className="w-full">
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
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {!isFiltersOpen && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFiltersOpen(true)}
                  className="md:hidden"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
              <h1 className="text-2xl font-bold">الأعضاء ({filteredMembers.length})</h1>
            </div>
            <div className="flex gap-4">
              <Input
                placeholder="بحث..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 text-right"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <Card>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الجنس</TableHead>
                    <TableHead className="text-right">المهنة</TableHead>
                    <TableHead className="text-right">الحالة الاجتماعية</TableHead>
                    <TableHead className="text-right">المساهمات</TableHead>
                    <TableHead className="text-right">آخر نشاط</TableHead>
                    <TableHead className="text-right">الحالة المالية</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">تاريخ الانضمام</TableHead>
                    <TableHead className="text-right">رقم الهاتف</TableHead>
                    <TableHead className="text-right">البريد الإلكتروني</TableHead>
                    <TableHead className="text-right">الاسم</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.map((member) => (
                    <TableRow 
                      key={member.id}
                      className="cursor-pointer hover:bg-accent"
                      onClick={() => handleRowClick(member.id)}
                    >
                      <TableCell className="text-right">
                        {member.gender === 'male' ? 'ذكر' : 'أنثى'}
                      </TableCell>
                      <TableCell className="text-right">
                        {member.occupation === 'employed'
                          ? 'موظف'
                          : member.occupation === 'student'
                          ? 'طالب'
                          : member.occupation === 'unemployed'
                          ? 'عاطل عن العمل'
                          : 'متقاعد'}
                      </TableCell>
                      <TableCell className="text-right">
                        {member.maritalStatus === 'single'
                          ? 'أعزب'
                          : member.maritalStatus === 'married'
                          ? 'متزوج'
                          : member.maritalStatus === 'divorced'
                          ? 'مطلق'
                          : 'أرمل'}
                      </TableCell>
                      <TableCell className="text-right">{member.contributions}</TableCell>
                      <TableCell className="text-right">{member.lastActivity}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={
                            member.financialStatus === 'rich'
                              ? 'success'
                              : 'destructive'
                          }
                        >
                          {member.financialStatus === 'poor'
                            ? 'معوز'
                            : 'مكتفي'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={
                            member.status === 'active'
                              ? 'success'
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
                      <TableCell className="text-right">{member.joinDate}</TableCell>
                      <TableCell className="text-right">{member.phone}</TableCell>
                      <TableCell className="text-right">{member.email}</TableCell>
                      <TableCell className="text-right">{member.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
} 