import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Aplicación Calculadora';
	operatorA: number = 0;
	operatorB: number = 0;
	result: number = 0;

	add(): void {
		this.result = this.operatorA + this.operatorB;
		console.log(this.result)
	}
}
