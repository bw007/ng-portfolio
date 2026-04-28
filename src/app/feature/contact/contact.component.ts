import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { IconComponent } from "@app/shared/ui/icon/icon.component";
import { ButtonComponent } from "@app/shared/ui/button/button.component";

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, IconComponent, ButtonComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  })

  sending = signal(false);
  error = signal<string | null>(null);
  sent = signal(false);

  async sendEmail() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    this.error.set(null);
    this.sent.set(false);

    const templateParams = {
      from_name: this.form.value.name,
      message: this.form.value.message,
      reply_to: this.form.value.email
    };
    
    try {
      const res: EmailJSResponseStatus = await emailjs.send(
        process.env.NG_APP_GMAIL_SERVICE_ID,
        process.env.NG_APP_GMAIL_TEMPLATE_ID,
        templateParams,
        { publicKey: process.env.NG_APP_GMAIL_SERVICE_PUBLIC_KEY }
      );
      console.log(res);
      
      if (res.status === 200) {
        this.sent.set(true);
        this.form.reset();
      };

    } catch (error) {
      const err = error as EmailJSResponseStatus;
      this.error.set(err.text || 'Something went wrong. Please try again later');
      console.error('EmailJS Error:', err);
    } finally {
      this.sending.set(false);
    }
  }
}
