import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { setTheme } from 'ngx-bootstrap/utils';
import { AppState } from './store/state/app.state';
import { Router } from '@angular/router';
import { GetFolders } from './store/actions/folder.action';
import { selectFolderList } from './store/selectors/folder.selector';
import { selectCircleList } from './store/selectors/circle.selector';
import { GetCircles } from './store/actions/circle.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Inbox';

  constructor(private store: Store<AppState>, private router: Router) {
    setTheme('bs4'); // or 'bs4'
  }
  folders = this.store.pipe(select(selectFolderList));
  circles = this.store.pipe(select(selectCircleList));
  ngOnInit() {
    this.store.dispatch(new GetFolders());
    this.store.dispatch(new GetCircles());
  }
}
