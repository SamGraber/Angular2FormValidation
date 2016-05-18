System.register(['lodash', 'angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var _, core_1, common_1;
    var Textbox;
    function validator(control) {
        if (control.value && control.value === 'valid') {
            return null;
        }
        return { validator: 'Some error' };
    }
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
            }],
        execute: function() {
            Textbox = (function () {
                function Textbox(formBuilder) {
                    var _this = this;
                    var form = formBuilder.group(null);
                    this.control = new common_1.Control('', validator);
                    this.control.statusChanges.subscribe(function (value) {
                        _this.setError();
                    });
                    form.addControl('myInput', this.control);
                    console.log(form);
                }
                Textbox.prototype.setError = function () {
                    if (!this.control) {
                        return;
                    }
                    this.error = _.first(_.values(this.control.errors));
                };
                Textbox = __decorate([
                    core_1.Component({
                        selector: 'rl-textbox',
                        templateUrl: 'source/components/textbox/textbox.html',
                        directives: [common_1.FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], Textbox);
                return Textbox;
            }());
            exports_1("Textbox", Textbox);
        }
    }
});
//# sourceMappingURL=textbox.js.map