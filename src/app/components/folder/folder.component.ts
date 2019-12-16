import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() title: string;
  @Input() unread: number;
  @Input() active: boolean | undefined;
  constructor() { }

  ngOnInit() {
  }

}
