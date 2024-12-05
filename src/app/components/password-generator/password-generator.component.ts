import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
	copied: boolean = false;

	constructor(private passwordService: PasswordService) {}

	generatePassword() {
		this.generatedPassword = this.passwordService.generatePassword(
			this.passwordLength,
			this.includeAlphabets,
			this.includeNumbers,
			this.includeSpecial
		);
	}

	copyToClipboard() {
		navigator.clipboard.writeText(this.generatedPassword);
		this.copied = true;

		setTimeout(() => {
			this.copied = false;
		}, 2000);
	}
}
