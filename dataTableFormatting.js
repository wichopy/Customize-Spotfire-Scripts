if($('#my-style').length){
   // do nothing style sheet already exists
} else {
   // add CSS to the body
   $('body').append($('<style id="my-style">\
         .sfpc-row-header {background-color:white;vertical-align: center}\
         .sfpc-column-header {background-color:lightgrey;vertical-align: center}\
		 .sf-element-table-cell.sfpc-section-content{color: green;text-align: center !important;vertical-align: center}\
         .sf-element-table-cell.sfpc-total-value {background-color:white;text-align:center;vertical-align: center}\
		 .sf-element-table-cell{color: black !important;text-align: center !important;vertical-align: center}\
        </style>', {
        id: 'my-style' 
   }));
}
