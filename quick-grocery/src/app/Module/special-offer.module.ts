import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOfferComponent } from '../Pages/special-offer/special-offer.component';
import { WeeklyDealsComponent } from '../sub-component/weekly-deals/weekly-deals.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SpecialOfferComponent, WeeklyDealsComponent],
  imports: [
    CommonModule,
    RouterModule
],
  exports :[SpecialOfferComponent, WeeklyDealsComponent]
})
export class SpecialOfferModule { }
