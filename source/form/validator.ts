import { Directive, provide, forwardRef } from 'angular2/core';
import { Control, NG_VALIDATORS } from 'angular2/common';

export interface IValidationResult {
	[key: string]: any;
}

@Directive({
	selector: '[validator]',
	providers: [
		provide(NG_VALIDATORS, {
			useExisting: forwardRef(() => Validator),
			multi: true,
		})
	]
})
export class Validator {
	constructor() {
		console.log('Init');
	}
	
	validate(control: Control): IValidationResult {
		if (control.value && control.value == 'valid') {
			return null;
		}
		return { 'validator': 'Error' };
	}
}