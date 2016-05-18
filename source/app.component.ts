import { Component, provide } from 'angular2/core';
import { NG_VALIDATORS } from 'angular2/common';
import { HeroFormComponent } from './form/hero-form.component';
import { Validator } from './form/validator';

@Component({
	selector: 'my-app',
	template: '<hero-form></hero-form>',
	directives: [HeroFormComponent, Validator],
	// providers: [
	// 	provide(NG_VALIDATORS, { useValue: validator, multi: true }),
	// ],
})
export class AppComponent { }
