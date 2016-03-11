import {Component, OnChanges, OnInit, 
        DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
        AfterViewChecked, OnDestroy} from 'angular2/core';

import {WelcomeComponent} from './welcome.component'

@Component({
    selector: 'my-home',
    template: '<h1>My Home</h1><my-welcome></my-welcome>',
    styles: ['h1 { border-color: blue; border-width: 1px; border-style: solid; }'],
    directives: [WelcomeComponent]
})
export class HomeComponent implements OnChanges, OnInit, 
    DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
    AfterViewChecked, OnDestroy {
    
    ngOnChanges(){
        console.log('Home component OnChanges.');
    }
    
    ngOnInit(){
        console.log('Home component Init.');
    }
    
    ngDoCheck(){
        console.log('Home component DoCheck.');
    }
    
    ngAfterContentInit(){
        console.log('Home component AfterContentInit.');
    }
    
    ngAfterContentChecked(){
        console.log('Home component ContentChecked.');
    }
    
    ngAfterViewInit(){
        console.log('Home component ViewInit.');
    }
    
    ngAfterViewChecked(){
        console.log('Home component ViewChecked.');
    }
    
    ngOnDestroy(){
        console.log('Home component OnDestroy.');
    } 
 }