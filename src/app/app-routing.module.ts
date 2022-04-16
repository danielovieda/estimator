import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'get-quote',
    component: GetQuoteComponent
  },
  {
    path: 'show-quote',
    component: ShowQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
