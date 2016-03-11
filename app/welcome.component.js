System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent() {
                }
                WelcomeComponent.prototype.ngOnChanges = function () {
                    console.log('   Welcome component OnChanges.');
                };
                WelcomeComponent.prototype.ngOnInit = function () {
                    console.log('   Welcome component Init.');
                };
                WelcomeComponent.prototype.ngDoCheck = function () {
                    console.log('   Welcome component DoCheck.');
                };
                WelcomeComponent.prototype.ngAfterContentInit = function () {
                    console.log('   Welcome component AfterContentInit.');
                };
                WelcomeComponent.prototype.ngAfterContentChecked = function () {
                    console.log('   Welcome component ContentChecked.');
                };
                WelcomeComponent.prototype.ngAfterViewInit = function () {
                    console.log('   Welcome component ViewInit.');
                };
                WelcomeComponent.prototype.ngAfterViewChecked = function () {
                    console.log('   Welcome component ViewChecked.');
                };
                WelcomeComponent.prototype.ngOnDestroy = function () {
                    console.log('   Welcome component OnDestroy.');
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-welcome',
                        template: '<p>Welcome to the lifecycle test of components.</p>',
                        styles: ['p { border-color: red; border-width: 1px; border-style: solid; }']
                    }), 
                    __metadata('design:paramtypes', [])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map