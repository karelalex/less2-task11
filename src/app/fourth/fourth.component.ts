import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  template: `
    <p>
      fourth works!
    </p>
  `,
  styles: [ 'p {background-color: aquamarine}'
  ]
})
export class FourthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
