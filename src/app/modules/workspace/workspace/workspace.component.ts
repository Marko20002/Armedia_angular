import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PersonCreateComponent } from '../../people/person-create/person-create.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-workspace',
  templateUrl:'./workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent implements OnInit{
  ngOnInit(): void {}
  private modalService = inject(NgbModal);
  activeNavMenu!: string;
  constructor(private router: Router) {}
  openRegisterPage(): void {
    this.router.navigate(['/register']);
  }
  openCreatePersonForm() {
    const modalRef = this.modalService.open(PersonCreateComponent);
    
  }
}
