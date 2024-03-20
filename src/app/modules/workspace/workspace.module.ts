import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from './workspace/workspace.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WorkspaceComponent],
  imports: [CommonModule, RouterModule],
})
export class WorkspaceModule {}
