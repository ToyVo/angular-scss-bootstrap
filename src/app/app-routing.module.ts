import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingViewComponent } from "./landing-view/landing-view.component";

const routes: Routes = [
  { path: "landing", component: LandingViewComponent },
  {
    path: "main",
    loadChildren: () =>
      import("./main-view/main-view.module").then(m => m.MainViewModule)
  },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
