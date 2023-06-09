import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollegelistComponent } from './collegelist/collegelist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
const routes: Routes = [

  {
    path:"college",
    component:CollegelistComponent
  },

  {
    path:"student",
    component:StudentlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
