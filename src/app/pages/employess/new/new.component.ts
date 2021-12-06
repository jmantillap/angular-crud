import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  template: `<app-employees-form></app-employees-form>`
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}