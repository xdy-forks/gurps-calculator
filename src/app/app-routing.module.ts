import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { JumpingComponent } from './jumping/jumping.component';
import { ThrowingComponent } from './throwing/throwing.component';
import { CollisionsComponent } from './collisions/collisions.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'collisions', component: CollisionsComponent },
  { path: 'dice-roller', component: DiceRollerComponent },
  { path: 'jumping', component: JumpingComponent },
  { path: 'throwing', component: ThrowingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
