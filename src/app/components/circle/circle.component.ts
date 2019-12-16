import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
