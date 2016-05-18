import * as _ from 'lodash';
import { Component, ViewChild } from 'angular2/core';
import { FORM_DIRECTIVES, ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';

@Component({
	selector: 'rl-textbox',
	templateUrl: 'source/components/textbox/textbox.html',
	directives: [FORM_DIRECTIVES],
})
export class Textbox {
	control: Control;
	error: string;
	
	constructor(formBuilder: FormBuilder) {
		const form: ControlGroup = formBuilder.group(null);
		this.control = new Control('', validator);
		this.control.statusChanges.subscribe((value: any): void => {
			this.setError();
		});
		form.addControl('myInput', this.control);
		console.log(form);
	}
	
	setError(): string {
		if (!this.control) {
			return;
		}
		
		this.error = <any>_.first(_.values(this.control.errors));
	}
}

function validator(control: Control): any {
	if (control.value && control.value === 'valid') {
		return null;
	}
	return { validator: 'Some error' };
}