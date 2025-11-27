'use client';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { classNames } from 'primereact/utils';
import { useRef, useState, useEffect } from 'react';
import type { DataTable as DataTableType } from 'primereact/datatable';
import type { Toast } from 'primereact/toast';
import type { ClassMember } from '@/constants/TEST_DATA';
import { getCaseData, type ClassMember as ClassMemberType } from '@/constants/TEST_DATA';
import type { CaseItem } from '@/constants/caseList';

interface ClassMemberDataTableProps {
  selectedCase: CaseItem | null;
  toastRef?: React.RefObject<Toast | null>;
}

export const ClassMemberDataTable = ({ selectedCase, toastRef }: ClassMemberDataTableProps) => {
  const [members, setMembers] = useState<ClassMember[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<ClassMember[]>([]);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [memberDialog, setMemberDialog] = useState<boolean>(false);
  const [bulkEditDialog, setBulkEditDialog] = useState<boolean>(false);
  const [deleteMemberDialog, setDeleteMemberDialog] = useState<boolean>(false);
  const [deleteMembersDialog, setDeleteMembersDialog] = useState<boolean>(false);
  const [member, setMember] = useState<ClassMemberType>({} as ClassMemberType);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const dt = useRef<DataTableType<ClassMember[]>>(null);

  // Load data when case changes
  useEffect(() => {
    if (selectedCase) {
      const caseData = getCaseData(selectedCase.caseId);
      setMembers(caseData);
      setSelectedMembers([]); // Clear selection when case changes
    } else {
      setMembers([]);
      setSelectedMembers([]);
    }
  }, [selectedCase]);

  const emptyMember: ClassMemberType = {
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    ssn: '',
    dateOfBirth: '',
    caseId: selectedCase?.caseId || 0,
  };

  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const openNew = () => {
    setMember(emptyMember);
    setSubmitted(false);
    setMemberDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setMemberDialog(false);
  };

  const hideBulkEditDialog = () => {
    setSubmitted(false);
    setBulkEditDialog(false);
  };

  const hideDeleteMemberDialog = () => {
    setDeleteMemberDialog(false);
  };

  const hideDeleteMembersDialog = () => {
    setDeleteMembersDialog(false);
  };

  const saveMember = () => {
    setSubmitted(true);

    if (member.name.trim()) {
      let _members = [...members];
      let _member = { ...member };

      if (member.id) {
        // Update existing
        const index = findIndexById(member.id);
        _members[index] = _member;
        toastRef?.current?.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Member Updated',
          life: 3000,
        });
      } else {
        // Create new
        _member.id = createId();
        _member.caseId = selectedCase?.caseId || 0;
        _members.push(_member);
        toastRef?.current?.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Member Created',
          life: 3000,
        });
      }

      setMembers(_members);
      setMemberDialog(false);
      setMember(emptyMember);
    }
  };

  const editMember = (member: ClassMember) => {
    setMember({ ...member });
    setMemberDialog(true);
  };

  const confirmDeleteMember = (member: ClassMember) => {
    setMember(member);
    setDeleteMemberDialog(true);
  };

  const deleteMember = () => {
    let _members = members.filter((val) => val.id !== member.id);
    setMembers(_members);
    setDeleteMemberDialog(false);
    setMember(emptyMember);
    toastRef?.current?.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Member Deleted',
      life: 3000,
    });
  };

  const findIndexById = (id: string) => {
    let index = -1;
    for (let i = 0; i < members.length; i++) {
      if (members[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  const createId = (): string => {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${selectedCase?.caseId || 0}-${id}`;
  };

  const confirmDeleteSelected = () => {
    setDeleteMembersDialog(true);
  };

  const deleteSelectedMembers = () => {
    let _members = members.filter((val) => !selectedMembers.includes(val));
    setMembers(_members);
    setDeleteMembersDialog(false);
    setSelectedMembers([]);
    toastRef?.current?.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Members Deleted',
      life: 3000,
    });
  };

  const openBulkEdit = () => {
    setBulkEditDialog(true);
  };

  const saveBulkEdit = () => {
    // For now, just show a toast - bulk edit logic can be added later
    toastRef?.current?.show({
      severity: 'info',
      summary: 'Bulk Edit',
      detail: `Editing ${selectedMembers.length} members`,
      life: 3000,
    });
    setBulkEditDialog(false);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const val = (e.target && e.target.value) || '';
    let _member = { ...member };
    (_member as any)[name] = val;
    setMember(_member);
  };

  const onInputTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
    const val = (e.target && e.target.value) || '';
    let _member = { ...member };
    (_member as any)[name] = val;
    setMember(_member);
  };

  const onDateChange = (e: any, name: string) => {
    const val = e.value;
    let _member = { ...member };
    (_member as any)[name] = val ? val.toISOString().split('T')[0] : '';
    setMember(_member);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} disabled={!selectedCase} />
        <Button
          label="Bulk Edit"
          icon="pi pi-pencil"
          severity="info"
          onClick={openBulkEdit}
          disabled={!selectedMembers || selectedMembers.length === 0}
        />
        <Button
          label="Bulk Delete"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedMembers || selectedMembers.length === 0}
        />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} disabled={!selectedCase || members.length === 0} />
    );
  };

  const actionBodyTemplate = (rowData: ClassMember) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          onClick={() => editMember(rowData)}
          aria-label="Edit"
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteMember(rowData)}
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
          disabled={!selectedCase}
        />
      </IconField>
    </div>
  );

  const memberDialogFooter = (
    <>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveMember} />
    </>
  );

  const bulkEditDialogFooter = (
    <>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideBulkEditDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveBulkEdit} />
    </>
  );

  const deleteMemberDialogFooter = (
    <>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteMemberDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteMember} />
    </>
  );

  const deleteMembersDialogFooter = (
    <>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteMembersDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedMembers} />
    </>
  );

  if (!selectedCase) {
    return (
      <div className="card">
        <div className="flex align-items-center justify-content-center" style={{ minHeight: '20rem' }}>
          <p className="text-xl text-color-secondary">Please select a case to view class member data</p>
        </div>
      </div>
    );
  }

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

      {/* Edit/Create Member Dialog */}
      <Dialog
        visible={memberDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header={member.id ? 'Edit Member' : 'New Member'}
        modal
        className="p-fluid"
        footer={memberDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <InputText
            id="name"
            value={member.name}
            onChange={(e) => onInputChange(e, 'name')}
            required
            autoFocus
            className={classNames({ 'p-invalid': submitted && !member.name })}
          />
          {submitted && !member.name && <small className="p-error">Name is required.</small>}
        </div>
        <div className="field">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <InputText id="email" value={member.email} onChange={(e) => onInputChange(e, 'email')} />
        </div>
        <div className="field">
          <label htmlFor="phone" className="font-bold">
            Phone
          </label>
          <InputText id="phone" value={member.phone} onChange={(e) => onInputChange(e, 'phone')} />
        </div>
        <div className="field">
          <label htmlFor="address" className="font-bold">
            Address
          </label>
          <InputTextarea id="address" value={member.address} onChange={(e) => onInputTextAreaChange(e, 'address')} rows={2} />
        </div>
        <div className="formgrid grid">
          <div className="field col">
            <label htmlFor="city" className="font-bold">
              City
            </label>
            <InputText id="city" value={member.city} onChange={(e) => onInputChange(e, 'city')} />
          </div>
          <div className="field col">
            <label htmlFor="state" className="font-bold">
              State
            </label>
            <InputText id="state" value={member.state} onChange={(e) => onInputChange(e, 'state')} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="zipCode" className="font-bold">
            Zip Code
          </label>
          <InputText id="zipCode" value={member.zipCode} onChange={(e) => onInputChange(e, 'zipCode')} />
        </div>
        <div className="field">
          <label htmlFor="ssn" className="font-bold">
            SSN
          </label>
          <InputText id="ssn" value={member.ssn} onChange={(e) => onInputChange(e, 'ssn')} />
        </div>
        <div className="field">
          <label htmlFor="dateOfBirth" className="font-bold">
            Date of Birth
          </label>
          <Calendar
            id="dateOfBirth"
            value={member.dateOfBirth ? new Date(member.dateOfBirth) : null}
            onChange={(e) => onDateChange(e, 'dateOfBirth')}
            dateFormat="yy-mm-dd"
            showIcon
          />
        </div>
      </Dialog>

      {/* Bulk Edit Dialog */}
      <Dialog
        visible={bulkEditDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Bulk Edit Members"
        modal
        className="p-fluid"
        footer={bulkEditDialogFooter}
        onHide={hideBulkEditDialog}
      >
        <div className="field">
          <p>You are editing {selectedMembers.length} member(s).</p>
          <p className="text-color-secondary text-sm">Bulk edit functionality will be implemented in a future update.</p>
        </div>
      </Dialog>

      {/* Delete Member Dialog */}
      <Dialog
        visible={deleteMemberDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Confirm"
        modal
        footer={deleteMemberDialogFooter}
        onHide={hideDeleteMemberDialog}
      >
        <div className="confirmation-content flex align-items-center">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {member && <span>Are you sure you want to delete <b>{member.name}</b>?</span>}
        </div>
      </Dialog>

      {/* Delete Members Dialog */}
      <Dialog
        visible={deleteMembersDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Confirm"
        modal
        footer={deleteMembersDialogFooter}
        onHide={hideDeleteMembersDialog}
      >
        <div className="confirmation-content flex align-items-center">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          <span>Are you sure you want to delete the selected {selectedMembers.length} member(s)?</span>
        </div>
      </Dialog>
    </div>
  );
};
