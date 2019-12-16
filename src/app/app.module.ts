import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderComponent } from './components/folder/folder.component';
import { CircleComponent } from './components/circle/circle.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducers/app.reducer';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { InboxHeaderComponent } from './components/inbox-header/inbox-header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    CircleComponent,
    CheckboxComponent,
    InboxComponent,
    InboxHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
