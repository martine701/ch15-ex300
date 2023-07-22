import { Component, OnInit, Input } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'car',
  template: `
    <h3>{{name}} Is Supercharged:{{supercharged}}</h3>
    `,
 styles: [],
  providers: []
})
export class CarComponent implements OnInit {
 @Input() name: any;
 supercharged: string = '';
 constructor(private service: CarService) { }
  ngOnInit(): void {
   this.supercharged = this.service.isSuperCharged(this.name);
  }
}

@Component
 ({
   selector: 'app-root',
   template: `
   <car name="Ford GT"></car>
   <car name="Corvette Z06"></car>`,
   styles: [],
   providers:[]
 })
export class AppComponent {
 title = 'app works'
}





