import {Component, OnChanges, OnInit, 
    DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
    AfterViewChecked, OnDestroy} from 'angular2/core';

@Component({
    selector: 'my-welcome',
    template: '<p>Welcome to the lifecycle test of components.</p>',
    styles: ['p { border-color: red; border-width: 1px; border-style: solid; }']
})
export class WelcomeComponent implements OnChanges, OnInit, 
    DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
    AfterViewChecked, OnDestroy {
    
    ngOnChanges(){
        console.log('   Welcome component OnChanges.');
    }
    
    ngOnInit(){
        console.log('   Welcome component Init.');
    }
    
    ngDoCheck(){
        console.log('   Welcome component DoCheck.');
    }
    
    ngAfterContentInit(){
        console.log('   Welcome component AfterContentInit.');
    }
    
    ngAfterContentChecked(){
        console.log('   Welcome component ContentChecked.');
    }
    
    ngAfterViewInit(){
        console.log('   Welcome component ViewInit.');
    }
    
    ngAfterViewChecked(){
        console.log('   Welcome component ViewChecked.');
    }
    
    ngOnDestroy(){
        console.log('   Welcome component OnDestroy.');
    }
 }