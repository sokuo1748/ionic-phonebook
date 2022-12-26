import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatecustomerPage } from './createcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatecustomerPageRoutingModule {}
