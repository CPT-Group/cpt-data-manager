'use client';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { useRef, useState } from 'react';
import type { DataTable as DataTableType } from 'primereact/datatable';
import type { ClassMember } from '@/constants/TEST_DATA';
import { TEST_DATA } from '@/constants/TEST_DATA';

export const ClassMemberDataTable = () => {
  const [members, setMembers] = useState<ClassMember[]>(TEST_DATA);
  const [selectedMembers, setSelectedMembers] = useState<ClassMember[]>([]);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const dt = useRef<DataTableType<ClassMember[]>>(null);

  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Bulk Edit"
          icon="pi pi-pencil"
          severity="info"
          onClick={() => {
            // TODO: Implement bulk edit
            console.log('Bulk edit selected:', selectedMembers);
          }}
          disabled={!selectedMembers || selectedMembers.length === 0}
        />
        <Button
          label="Bulk Delete"
          icon="pi pi-trash"
          severity="danger"
          onClick={() => {
            // TODO: Implement bulk delete
            console.log('Bulk delete selected:', selectedMembers);
          }}
          disabled={!selectedMembers || selectedMembers.length === 0}
        />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const actionBodyTemplate = (rowData: ClassMember) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          onClick={() => {
            // TODO: Implement edit
            console.log('Edit member:', rowData);
          }}
          aria-label="Edit"
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => {
            // TODO: Implement delete
            console.log('Delete member:', rowData);
          }}
          aria-label="Delete"
        />
      </div>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Class Members</h4>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
          placeholder="Search..."
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setGlobalFilter(target.value);
          }}
        />
      </IconField>
    </div>
  );

  return (
    <div className="card">
      <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate} />
      <DataTable
        ref={dt}
        value={members}
        selection={selectedMembers}
        onSelectionChange={(e) => {
          if (Array.isArray(e.value)) {
            setSelectedMembers(e.value);
          }
        }}
        dataKey="id"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} members"
        globalFilter={globalFilter}
        header={header}
        selectionMode="multiple"
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column selectionMode="multiple" exportable={false} />
        <Column field="name" header="Name" sortable style={{ minWidth: '12rem' }} />
        <Column field="email" header="Email" sortable style={{ minWidth: '16rem' }} />
        <Column field="phone" header="Phone" sortable style={{ minWidth: '12rem' }} />
        <Column field="address" header="Address" sortable style={{ minWidth: '14rem' }} />
        <Column field="city" header="City" sortable style={{ minWidth: '10rem' }} />
        <Column field="state" header="State" sortable style={{ minWidth: '8rem' }} />
        <Column field="zipCode" header="Zip Code" sortable style={{ minWidth: '10rem' }} />
        <Column field="ssn" header="SSN" style={{ minWidth: '10rem' }} />
        <Column field="dateOfBirth" header="Date of Birth" sortable style={{ minWidth: '12rem' }} />
        <Column
          body={actionBodyTemplate}
          exportable={false}
          style={{ minWidth: '10rem' }}
          headerStyle={{ textAlign: 'center' }}
          bodyStyle={{ textAlign: 'center' }}
        />
      </DataTable>
    </div>
  );
};

