import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../Pages/contact/contact.component';
import { MembershipSectionComponent } from '../membership-section/membership-section.component';
import { RegisterNowComponent } from '../sub-component/register-now/register-now.component';

@NgModule({
  declarations: [ContactComponent,MembershipSectionComponent,RegisterNowComponent],
  imports: [
    CommonModule
  ],
  exports:[ContactComponent,MembershipSectionComponent,RegisterNowComponent]
})
export class ContactModule { }
