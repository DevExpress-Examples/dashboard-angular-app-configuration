# Dashboard Angular Example

This example illustrates how to use the Angular-based `dx-dashboard-control` component for displaying and editing dashboards. We manipulate with the [dashboardId](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_dashboardid) and [workingMode](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_workingmode) options using Angular bindings. In addition, we subscribe to the [onBeforeRender](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_onbeforerender) event to [Enable Text Editor Functionality](https://docs.devexpress.com/Dashboard/401572/web-dashboard/create-dashboards-on-the-web/designing-dashboard-items/text-box/enable-text-editor-functionality) in code. See the following files for implementation details:

- [app.component.html](./dashboard-angular-app/src/app/app.component.html)
- [app.component.ts](./dashboard-angular-app/src/app/app.component.ts)

The example uses a modular approach that based on the client-server model. You need a server (backend) project and a client (frontend) application that includes all the necessary styles, scripts and HTML-templates. Note that the script version on the client should match with libraries version on the server up to a minor version.

- The [asp-net-core-server](asp-net-core-server) folder contains an ASP.NET Core 3.1 Dashboard application.
- The [dashboard-angular-app](dashboard-angular-app) folder contains a client application.

## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```

In the **dashboard-angular-app** folder, run the following commands:

```
npm install
npm start
```

Open ```http://localhost:4200/``` in your browser to see the result.

## Documentation
- [Add Web Dashboard to an Angular CLI Application](https://docs.devexpress.com/Dashboard/400409?v=20.2)
- [Dashboard Component for Angular](https://docs.devexpress.com/Dashboard/401976?v=20.2)

## Examples
- [Dashboard Client-Side Application (Angular)](https://github.com/DevExpress-Examples/dashboard-angular-app)
- [Dashboard Client-Side Application (React)](https://github.com/DevExpress-Examples/dashboard-react-app)
- [Dashboard Client-Side Application (Vue)](https://github.com/DevExpress-Examples/dashboard-vue-app)
