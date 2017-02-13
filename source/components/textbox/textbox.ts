import * as _ from 'lodash';
import { Component, ViewChild, Directive, EventEmitter, Output, Provider, forwardRef } from 'angular2/core';
import { FORM_DIRECTIVES, ControlGroup, Control, NgControl, Validators, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR } from 'angular2/common';

const CUSTOM_VALUE_ACCESSOR: Provider = new Provider(NG_VALUE_ACCESSOR, {
	useExisting: forwardRef(() => TextboxValueAccessor),
	multi: true,
});

@Component({
	selector: 'rl-textbox',
	templateUrl: 'source/components/textbox/textbox.html',
	directives: [FORM_DIRECTIVES],
})
export class Textbox {
	control: Control;
	error: string;
	@Output() change: EventEmitter<string> = new EventEmitter();
	private _value: string;
	
	set value(value: string) {
		this._value = value;
		if (this.input) {
			this.input.valueAccessor.writeValue(value);
		}
	}
	
	@ViewChild('input') input: NgControl;
	
	constructor(formBuilder: FormBuilder) {
		const form: ControlGroup = formBuilder.group(null);
		this.control = new Control('', validator);
		this.control.statusChanges.subscribe((value: any): void => {
			this.setError();
		});
		form.addControl('myInput', this.control);
		console.log(form);
	}
	
	ngAfterViewInit(): void {
		this.input.valueAccessor.registerOnChange((value: string) => this.change.emit(value));
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

@Directive({
	selector: 'rl-textbox',
	host: { '(change)': 'onChange($event)' },
	providers: [CUSTOM_VALUE_ACCESSOR],
})
export class TextboxValueAccessor implements ControlValueAccessor {
	onChange = (_) => { };
	onTouched = () => { };

	constructor(private host: Textbox) {

	}

	writeValue(value: any): void {
		this.host.value = value;
	}

	registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
	registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}