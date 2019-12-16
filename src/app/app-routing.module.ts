import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';

const routes: Routes = [{
  path: 'inbox',
  component: InboxComponent
}, {
  path: '', redirectTo: '/inbox', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
