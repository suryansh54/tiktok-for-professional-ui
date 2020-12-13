import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UserSubmittedListComponent } from './comonents/user-submitted-list/user-submitted-list.component';
import { UserSubmittedDataComponent } from './comonents/user-submitted-data/user-submitted-data.component';
import { SelectInterestComponent } from './comonents/select-interest/select-interest.component';

const routes: Routes = [
  {
    path: '',
    component: SelectInterestComponent
  },
  {
    path: 'user-list',
    component: UserSubmittedListComponent
  },
  {
    path: 'user-data/:id',
    component: UserSubmittedDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
