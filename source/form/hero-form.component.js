System.register(['lodash', 'angular2/core', 'angular2/common', './hero', './validator', '../components/textbox/textbox'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var _, core_1, common_1, hero_1, validator_1, textbox_1;
    var HeroFormComponent;
    return {
        setters:[
            function (_1) {
                _ = _1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (validator_1_1) {
                validator_1 = validator_1_1;
            },
            function (textbox_1_1) {
                textbox_1 = textbox_1_1;
            }],
        execute: function() {
            HeroFormComponent = (function () {
                function HeroFormComponent() {
                    this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
                    this.model = new hero_1.Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                }
                HeroFormComponent.prototype.onSubmit = function () {
                    console.log('submitted');
                    this.submitted = true;
                };
                HeroFormComponent.prototype.ngAfterViewInit = function () {
                    console.log(this.form);
                };
                HeroFormComponent.prototype.onSubmitAttempt = function () {
                    _.each(this.form.controls, function (control) {
                        if (control.errors) {
                            console.log(control.errors);
                        }
                    });
                    if (this.form.valid) {
                        this.form.onSubmit();
                    }
                    else {
                        alert(_.first(_.map(this.form.controls, function (control) { return _.first(_.values(control.errors)); })));
                    }
                };
                __decorate([
                    core_1.ViewChild('form'), 
                    __metadata('design:type', common_1.NgForm)
                ], HeroFormComponent.prototype, "form", void 0);
                HeroFormComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-form',
                        templateUrl: 'source/form/hero-form.component.html',
                        directives: [validator_1.Validator, textbox_1.Textbox],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroFormComponent);
                return HeroFormComponent;
            }());
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});
//# sourceMappingURL=hero-form.component.js.map