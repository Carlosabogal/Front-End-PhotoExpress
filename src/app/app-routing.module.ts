import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientComponent } from './Component/register-client/register-client.component';
import { ListClientComponent } from './Component/list-client/list-client.component';
import { MenuComponent } from './Component/menu/menu.component';

const routes: Routes = [

  { path: 'menu', component: MenuComponent },
  { path: 'register', component:RegisterClientComponent },
  { path: 'list', component:ListClientComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 export const routingComponents = [RegisterClientComponent,ListClientComponent,MenuComponent]
