'use client';

import { DataManagerToolbar } from '@/components/layout';
import { CPTToast } from '@cpt-group/cpt-prime-react';
import { useRef } from 'react';
import type { Toast } from 'primereact/toast';

export default function DataManagerPage() {
  const toast = useRef<Toast>(null);

  return (
    <div className="flex flex-column min-h-screen">
      <CPTToast ref={toast} />
      <DataManagerToolbar toastRef={toast} />
      <div className="flex-1 p-4">
        {/* Main content area - to be developed */}
      </div>
    </div>
  );
}

