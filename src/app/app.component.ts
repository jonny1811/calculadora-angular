import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Aplicación Calculadora';

	result: number = 0;

	processResult(result: number): void {
		this.result = result;
	}
}
