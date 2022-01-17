import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

	@Output() resultEmmiter = new EventEmitter<number>();

	operatorA: number = 0;
	operatorB: number = 0;

	add(): void {
		let addResult = this.operatorA + this.operatorB;
		this.resultEmmiter.emit(addResult);
	}

	subtract(): void {
		let subResult = this.operatorA - this.operatorB;
		this.resultEmmiter.emit(subResult);
	}

	multiplication(): void {
		let mulResult = this.operatorA * this.operatorB;
		this.resultEmmiter.emit(mulResult);
	}

	division(): void {
		let divResult = this.operatorA / this.operatorB;
		this.resultEmmiter.emit(divResult);
	}
}
