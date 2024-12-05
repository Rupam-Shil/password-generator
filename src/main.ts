import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PasswordGeneratorComponent } from './app/components/password-generator/password-generator.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [PasswordGeneratorComponent],
	template: `
		<div class="app-container">
			<app-password-generator></app-password-generator>
		</div>
	`,
	styles: [
		`
			.app-container {
				min-height: 100vh;
				padding: 1rem;
				display: grid;
				place-items: center;
			}
		`,
	],
})
export class App {}

bootstrapApplication(App);
