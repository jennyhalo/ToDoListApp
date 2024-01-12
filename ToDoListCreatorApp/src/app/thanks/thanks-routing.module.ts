import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThanksPage } from './thanks.page';

const routes: Routes = [
  {
    path: '',
    component: ThanksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThanksPageRoutingModule {}
