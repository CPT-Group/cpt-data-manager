export interface CaseItem {
  id: string;
  label: string;
  caseName: string;
  caseId: number;
}

export const dummyCaseList: CaseItem[] = [
  { id: '1', label: 'Case 001', caseName: 'Sample Case One', caseId: 1 },
  { id: '2', label: 'Case 002', caseName: 'Sample Case Two', caseId: 2 },
  { id: '3', label: 'Case 003', caseName: 'Sample Case Three', caseId: 3 },
  { id: '4', label: 'Case 004', caseName: 'Sample Case Four', caseId: 4 },
  { id: '5', label: 'Case 005', caseName: 'Sample Case Five', caseId: 5 },
];

