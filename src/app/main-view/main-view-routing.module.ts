import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./main-view.component";
import { NextViewComponent } from "./next-view/next-view.component";

const routes: Routes = [
  {
    path: "",
    component: MainViewComponent,
    children: [
      { path: "next", component: NextViewComponent },
      { path: "", redirectTo: "next", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule {}
