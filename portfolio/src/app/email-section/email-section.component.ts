import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterSectionComponent } from '../footer-section/footer-section.component';

@Component({
  selector: 'app-email-section',
  standalone: true,
  imports: [RouterModule, FormsModule, FooterSectionComponent],
  templateUrl: './email-section.component.html',
  styleUrl: './email-section.component.scss'
})
export class EmailSectionComponent {
  @Input() linkTarget: string = '';

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolice: false,
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
