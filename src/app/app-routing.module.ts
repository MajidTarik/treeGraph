import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeTrackingComponent } from "./tree-tracking/tree-tracking.component";
import { LandingComponent } from "./landing/landing.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sweethome',
    pathMatch: 'full'
  },
  {
    path: 'treeTracking',
    component: TreeTrackingComponent
  },
  {
    path: 'sweethome',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
