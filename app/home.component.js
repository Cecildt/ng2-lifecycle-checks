System.register(['angular2/core', './welcome.component'], function(exports_1, context_1) {
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
    var core_1, welcome_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnChanges = function () {
                    console.log('Home component OnChanges.');
                };
                HomeComponent.prototype.ngOnInit = function () {
                    console.log('Home component Init.');
                };
                HomeComponent.prototype.ngDoCheck = function () {
                    console.log('Home component DoCheck.');
                };
                HomeComponent.prototype.ngAfterContentInit = function () {
                    console.log('Home component AfterContentInit.');
                };
                HomeComponent.prototype.ngAfterContentChecked = function () {
                    console.log('Home component ContentChecked.');
                };
                HomeComponent.prototype.ngAfterViewInit = function () {
                    console.log('Home component ViewInit.');
                };
                HomeComponent.prototype.ngAfterViewChecked = function () {
                    console.log('Home component ViewChecked.');
                };
                HomeComponent.prototype.ngOnDestroy = function () {
                    console.log('Home component OnDestroy.');
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-home',
                        template: '<h1>My Home</h1><my-welcome></my-welcome>',
                        styles: ['h1 { border-color: blue; border-width: 1px; border-style: solid; }'],
                        directives: [welcome_component_1.WelcomeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map