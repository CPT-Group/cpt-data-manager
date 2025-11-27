'use client';

import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';
import { CPTButton } from '@cpt-group/cpt-prime-react';
import { useTheme } from '@/providers/ThemeProvider';
import { dummyCaseList, type CaseItem } from '@/constants/caseList';
import { useState } from 'react';
import Image from 'next/image';

export const DataManagerToolbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const handleLogoClick = () => {
    alert('Test icon clicked');
  };

  const startContent = (
    <div className="flex align-items-center">
      <CPTButton
        onClick={handleLogoClick}
        className="p-button-text p-button-plain"
        aria-label="CPT Logo"
      >
        <Image
          src="/icons/CPT-Logo-PNG-24-sticky-x2.png"
          alt="CPT Logo"
          width={56}
          height={56}
        />
      </CPTButton>
    </div>
  );

  const centerContent = (
    <div className="flex align-items-center justify-content-center gap-3">
      <label htmlFor="case-selector" className="font-semibold">
        Case:
      </label>
      <Dropdown
        id="case-selector"
        value={selectedCase}
        onChange={(e) => setSelectedCase(e.value)}
        options={dummyCaseList}
        optionLabel="label"
        placeholder="Select a case"
        className="w-12rem"
      />
    </div>
  );

  const endContent = (
    <div className="flex align-items-center">
      <CPTButton
        icon={theme === 'light' ? 'pi pi-sun' : 'pi pi-moon'}
        onClick={toggleTheme}
        className="p-button-rounded p-button-text"
        tooltip={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        tooltipOptions={{ position: 'bottom' }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        style={{
          width: '3rem',
          height: '3rem',
          fontSize: '1.5rem',
        }}
      />
    </div>
  );

  return <Toolbar start={startContent} center={centerContent} end={endContent} />;
};

