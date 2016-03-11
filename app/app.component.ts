import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {HomeComponent} from './home.component';
import {ActionComponent} from './action.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Lifecycle Checks</h1>
        <nav>
            <a [routerLink]="['Home']">Home</a>
            <a [routerLink]="['Actions']">Actions</a>
        </nav>
        <main>
            <router-outlet></router-outlet>
        </main>
    `,
    styles: ['main { border-color: black; border-width: 1px; border-style: solid; }'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { name: 'Home', path: '/', component: HomeComponent, useAsDefault: true },
    { name: 'Actions', path: '/profile', component: ActionComponent }
])
export class AppComponent implements OnInit {
    
    ngOnInit(){
        console.log('App component Init.');
    }
 }