import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatecustomerPageRoutingModule } from './createcustomer-routing.module';

import { CreatecustomerPage } from './createcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatecustomerPageRoutingModule
  ],
  declarations: [CreatecustomerPage]
})
export class CreatecustomerPageModule {}
