# Dashboard Angular Example

This example is a ready-to-use client Angular application with the DevExpress Dashboard component.

This example illustrates how to use the React-based `DashboardControl` component for displaying and editing dashboards. The following properties are used to switch the working mode and the currently displayed dashboard: 

- [workingMode](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_workingmode)
- [dashboardId](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_dashboardid)

In addition, the example shows how to use the [onBeforeRender](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_onbeforerender) event to [Enable Text Editor Functionality](https://docs.devexpress.com/Dashboard/401572/web-dashboard/create-dashboards-on-the-web/designing-dashboard-items/text-box/enable-text-editor-functionality) in code. 

See the following files for implementation details:

- [app.component.html](./dashboard-angular-app/src/app/app.component.html)
- [app.component.ts](./dashboard-angular-app/src/app/app.component.ts)

The example uses a modular approach that based on the client-server model. You need a server (backend) project and a client (frontend) application that includes all the necessary styles, scripts and HTML-templates. Note that the script version on the client should match with libraries version on the server.

- The [asp-net-core-server](asp-net-core-server) folder contains an ASP.NET Core 3.1 Dashboard application.
- The [dashboard-angular-app](dashboard-angular-app) folder contains a client application.

## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```
> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). It is insecure, because any website can make cross-origin requests to the app. We recommend you specify the client application's URL directly to prohibit clients from getting access to your personal information on your server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

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
- [ASP.NET Core 3.1 backend for Web Dashboard](https://github.com/DevExpress-Examples/asp-net-core-dashboard-backend)
