import * as _ from 'lodash';
import { Component, ViewChild } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { Hero }    from './hero';
import { Validator } from './validator';
import { Textbox } from '../components/textbox/textbox';

@Component({
	selector: 'hero-form',
	templateUrl: 'source/form/hero-form.component.html',
	directives: [Validator, Textbox],
})
export class HeroFormComponent {
	@ViewChild('form') form: NgForm;
	
	powers = ['Really Smart', 'Super Flexible',	'Super Hot', 'Weather Changer'];
	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
	submitted = false;
	
	onSubmit() { 
		console.log('submitted');
		this.submitted = true; 
	}
	
	ngAfterViewInit(): void {
		console.log(this.form);
	}
	
	onSubmitAttempt() { 
		_.each(this.form.controls, (control: any): void => {
			if (control.errors) {
				console.log(control.errors);
			}
		});
		if (this.form.valid) {
			this.form.onSubmit();
		} else {
			alert(_.first(_.map(this.form.controls, (control: any): string => { return <any>_.first(_.values(control.errors)); })));
		}
	}
}
