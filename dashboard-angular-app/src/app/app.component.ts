import { Component } from '@angular/core';
import { DashboardControl, DashboardControlArgs } from 'devexpress-dashboard';
import { TextBoxItemEditorExtension } from 'devexpress-dashboard/designer/text-box-item-editor-extension';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workingMode: string = 'Viewer';
  dashboardId: string = 'dashboard1';
  dashboards = [
    {"id": "dashboard1", "name": "Sample Dashboard"},
    {"id": "dashboard2", "name": "Invoice Dashboard"},
  ];
  get workingModeText() {
    return 'Switch to ' + this.toggleMode(this.workingMode);
  }
  changeWorkingMode() {    
    this.workingMode = this.toggleMode(this.workingMode);
  }
  toggleMode(mode) {
    return mode === 'Viewer' ? "Designer" : "Viewer";
  }
  onBeforeRender(args: DashboardControlArgs) {
    var dashboardControl = args.component;

    dashboardControl.registerExtension(new TextBoxItemEditorExtension(dashboardControl));
  }  
}