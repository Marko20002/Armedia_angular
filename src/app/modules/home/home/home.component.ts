import { Component, OnInit } from '@angular/core';
import { CaseService } from '../../cases/case.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  caseFiles: any[] = [];

  constructor(private casesService: CaseService) { }

  ngOnInit(): void {
    // this.fetchCaseFiles();
  }

  // fetchCaseFiles(): void {
  //   this.casesService.getAllCaseFiles().subscribe(
  //     caseFiles => {
  //       this.caseFiles = caseFiles;
  //     },
  //     error => {
  //       console.error('Failed to fetch case files:', error);
  //     }
  //   );
  // }

}