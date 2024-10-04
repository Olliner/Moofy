import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartazPageRoutingModule } from './cartaz-routing.module';
import { CartazPage } from './cartaz.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartazPageRoutingModule
  ],
  declarations: [CartazPage]
})
export class CartazPageModule {}
