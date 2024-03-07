import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-email-section',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './email-section.component.html',
  styleUrl: './email-section.component.scss'
})
export class EmailSectionComponent {
  @Input() linkTarget: string = '';

  contactData = {
    name: " ",
    email: " ",
    message: " ",
    privacyPolice: false,

  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
