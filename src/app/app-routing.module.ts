import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'public' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
