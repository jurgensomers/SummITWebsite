import { Component, OnInit } from '@angular/core';  
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('grow', [
      state('small', style({transform: 'scale(1)'})),
      state('large', style({transform: 'scale(1.2)'})),
      transition('small <=> large', animate('300ms ease-in')),
    ]) 
  ]
})
export class HomeComponent implements OnInit {
 
  stateService:string='small';
  stateCustomers:string='small';
  stateJobs:string='small';
  stateContact:string='small';

  constructor(  ) { }

  ngOnInit() {

  }

  animate(item:string){
    switch(item)
    {
      case 'service': this.stateService = ( this.stateService==='small' ? 'large' : 'small' ); break;
      case 'customers': this.stateCustomers = ( this.stateCustomers==='small' ? 'large' : 'small' );break;
      case 'jobs': this.stateJobs = ( this.stateJobs==='small' ? 'large' : 'small' );break;
      case 'contact':this.stateContact = ( this.stateContact==='small' ? 'large' : 'small' ); break;
    }
  
  }
}
