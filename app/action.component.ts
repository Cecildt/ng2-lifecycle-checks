import {Component, OnChanges, OnInit, 
    DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
    AfterViewChecked, OnDestroy} from 'angular2/core';

@Component({
    selector: 'my-actions',
    template: '<h1>My Actions</h1>',
    styles: ['h1 { border-color: blue; border-width: 1px; border-style: solid; }']
})
export class ActionComponent implements OnChanges, OnInit, 
    DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
    AfterViewChecked, OnDestroy {
    
    ngOnChanges(){
        console.log('Actions component OnChanges.');
    }
    
    ngOnInit(){
        console.log('Actions component Init.');
    }
    
    ngDoCheck(){
        console.log('Actions component DoCheck.');
    }
    
    ngAfterContentInit(){
        console.log('Actions component AfterContentInit.');
    }
    
    ngAfterContentChecked(){
        console.log('Actions component ContentChecked.');
    }
    
    ngAfterViewInit(){
        console.log('Actions component ViewInit.');
    }
    
    ngAfterViewChecked(){
        console.log('Actions component ViewChecked.');
    }
    
    ngOnDestroy(){
        console.log('Actions component OnDestroy.');
    }
 }