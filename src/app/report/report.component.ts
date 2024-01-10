import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  sortable:any;
}
// $(function() {

//   $( ".column" ).sortable({
//     connectWith: ".column",
//     handle: ".portlet-header",
//     cancel: ".portlet-toggle",
//     placeholder: "portlet-placeholder ui-corner-all"
//   } as any);

//   $( ".portlet" )
//     .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
//     .find( ".portlet-header" )
//       .addClass( "ui-widget-header ui-corner-all" )
     

//   $( ".portlet-toggle" ).click(function() {
//     var icon = $( this );
//     icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
//     icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
//   });
// });
