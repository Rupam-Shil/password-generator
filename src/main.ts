import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
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

bootstrapApplication(App, {
	providers: [
		provideAnimations(),
		provideToastr({
			timeOut: 3000,
			positionClass: 'toast-top-right',
			preventDuplicates: true,
		}),
	],
});
