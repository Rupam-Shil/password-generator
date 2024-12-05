import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { PasswordService } from '../../services/password.service';

@Component({
	selector: 'app-password-generator',
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: './password-generator.component.html',
	styleUrls: ['./password-generator.component.css'],
})
export class PasswordGeneratorComponent {
	passwordLength: number = 12;
	includeAlphabets: boolean = true;
	includeNumbers: boolean = false;
	includeSpecial: boolean = false;
	generatedPassword: string = '';

	constructor(
		private passwordService: PasswordService,
		private toastr: ToastrService
	) {}

	generatePassword() {
		this.generatedPassword = this.passwordService.generatePassword(
			this.passwordLength,
			this.includeAlphabets,
			this.includeNumbers,
			this.includeSpecial
		);
	}

	copyToClipboard() {
		if (!this.generatedPassword) return;
		
		navigator.clipboard.writeText(this.generatedPassword).then(() => {
			this.toastr.success('Password copied to clipboard!', 'Success');
		}).catch(() => {
			this.toastr.error('Failed to copy password', 'Error');
		});
	}
}
