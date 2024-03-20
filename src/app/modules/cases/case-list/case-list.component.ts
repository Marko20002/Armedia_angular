import { Component, OnInit } from '@angular/core';
import { CaseService } from '../case.service';
import { CaseFile } from '../../models/casefile.model';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {
  caseFiles: CaseFile[] = [];

  constructor(private casesService: CaseService) {}

  ngOnInit(): void {
    this.fetchCaseFiles();
  }

  fetchCaseFiles(): void {
    this.casesService.getAllCaseFiles().subscribe(
      caseFiles => {
        this.caseFiles = caseFiles;
      },
      error => {
        console.error('Failed to fetch case files:', error);
      }
    );
  }
}