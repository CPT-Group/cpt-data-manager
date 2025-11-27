'use client';

import { DataManagerToolbar } from '@/components/layout';
import { CPTToast } from '@cpt-group/cpt-prime-react';
import { ClassMemberDataTable } from '@/components/pages/DataManager';
import { useRef, useState } from 'react';
import type { Toast } from 'primereact/toast';
import type { CaseItem } from '@/constants/caseList';

export default function DataManagerPage() {
  const toast = useRef<Toast>(null);
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  return (
    <div className="flex flex-column min-h-screen">
      <CPTToast ref={toast} />
      <DataManagerToolbar toastRef={toast} onCaseChange={setSelectedCase} />
      <div className="flex-1 p-4">
        <ClassMemberDataTable selectedCase={selectedCase} toastRef={toast} />
      </div>
    </div>
  );
}

