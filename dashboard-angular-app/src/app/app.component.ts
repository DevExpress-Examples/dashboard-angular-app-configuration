import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { DashboardControl, DashboardControlArgs } from 'devexpress-dashboard';
import { TextBoxItemEditorExtension } from 'devexpress-dashboard/designer/text-box-item-editor-extension';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DxDashboardControlModule, DevExtremeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DashboardAngularApp';
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