import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public title: string = 'apprentissage';
  constructor() { }

  ngOnInit(): void {
  }

  hello(val: string): string {
    const a = 'hello word';
    return val+' '+a
  }

}
