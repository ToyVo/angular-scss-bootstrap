import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { MainViewComponent } from "./main-view.component";
import { MainViewRoutingModule } from "./main-view-routing.module";
import { NextViewComponent } from "./next-view/next-view.component";

@NgModule({
  imports: [CommonModule, MainViewRoutingModule, CollapseModule.forRoot()],
  declarations: [MainViewComponent, NextViewComponent]
})
export class MainViewModule {}
