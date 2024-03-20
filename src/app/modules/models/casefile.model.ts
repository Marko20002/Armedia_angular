import { Person } from './person.model'; // Assuming you have a Person interface defined

export interface CaseFile {
  id: number;
  caseNumber: number;
  title: string;
  incidentDate: Date;
  person: Person;
}
