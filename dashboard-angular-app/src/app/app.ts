import { Component } from '@angular/core';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { DashboardControl, DashboardControlArgs } from 'devexpress-dashboard';
import { TextBoxItemEditorExtension } from 'devexpress-dashboard/designer/text-box-item-editor-extension';

@Component({
  selector: 'app-root',
  imports: [
    DxDashboardControlModule, 
    DevExtremeModule,
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'dashboard-angular-app';
  workingMode: string = 'Viewer';
  dashboardId: string = 'support';
  dashboards = [
    {"id": "support", "name": "Support"},
    {"id": "products", "name": "Products"},
  ];
  get workingModeText() {
    return 'Switch to ' + this.toggleMode(this.workingMode);
  }
  changeWorkingMode() {    
    this.workingMode = this.toggleMode(this.workingMode);
  }
  toggleMode(mode: string) {
    return mode === 'Viewer' ? "Designer" : "Viewer";
  }
  onBeforeRender(args: DashboardControlArgs) {
    var dashboardControl = args.component;

    dashboardControl.registerExtension(new TextBoxItemEditorExtension(dashboardControl));
  }
}
