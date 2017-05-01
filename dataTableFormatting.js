/*
Modified work from these two sources:
http://spotfireplanet.com/style-cross-table-and-data-table-with-javascript/
http://spotfired.blogspot.ca/2014/12/jquery-accordion.html

This script modifies the default styles for the built in classes.

The below classes are associated with DataTables and CrossTables
sfpc-row-header
sfpc-column-header
sf-element-table-cell.sfpc-section-content
sf-element-table-cell.sfpc-total-value
sf-element-table-cell

To use the script, include it in any text field in your report. It will run when the report loads.

If there are any syntax errors, it will cause all dashboard views that are listed after it to be greyed out and the text field to be inaccessable.
*/
if($('#my-style').length){
   // do nothing style sheet already exists
} else {
   // add CSS to the body
   $('body').append($('\
	<style id="my-style">\
         .sfpc-row-header {background-color:white;vertical-align: center}\
         .sfpc-column-header {background-color:lightgrey;vertical-align: center}\
	 .sf-element-table-cell.sfpc-section-content{color: green;text-align: center !important;vertical-align: center}\
         .sf-element-table-cell.sfpc-total-value {background-color:white;text-align:center;vertical-align: center}\
	 .sf-element-table-cell{color: black !important;text-align: center !important;vertical-align: center}\
        </style>', {
          id: 'my-style' 
   	}
   ));
}
