import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  template:`<br><br>{{name}}`,
  styleUrls: ['./marvellous-comp.component.css']
})
export class MarvellousCompComponent implements OnInit {

  public name='Marvellous';
  constructor() { }

  ngOnInit() {
  }

}
