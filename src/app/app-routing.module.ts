import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { HomeComponent } from './components/home/home/home.component';
import { ProductComponent } from './components/product/product/product.component';


const routes: Routes = [
  { path: "contact", component: ContactComponent},
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
