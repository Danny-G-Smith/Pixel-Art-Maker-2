(function ( document ) {
   'use strict';

   // Cache selectors here to avoid redundant DOM lookups.
   let $colorPicker = $( '#colorPicker' );
   let $pixelCanvas = $( '#pixelCanvas' );
   let $sizePicker = $( '#sizePicker' );
   let $widthInput = $( '#inputWidth' );
   let $heightInput = $( '#inputHeight' );

   const init = function () {

      $sizePicker.on( 'submit', function ( event ) {
         event.preventDefault();

         makeGrid();

         const table = document.getElementById( "pixelCanvas" );
         if ( table.firstChild ) {
            while ( table.firstChild ) {
               table.removeChild( table.firstChild );
            }
         }

         // adding color to cell
         $( 'td' ).on( 'click', function () {

            let color = $colorPicker.val();
            $( this ).css( 'backgroundColor', color );
         } );

      } );
   };

   function makeGrid() {

      for ( let rowz = 1; rowz <= $heightInput.val(); rowz++ ) {
         // create row
         let row = $( '<tr></tr>' ).appendTo( $pixelCanvas );

         for ( let col = 1; col <= $widthInput.val(); col++ ) {
            // create table cells (columns)
            row.append( '<td></td>' );
         }
      }
   }

   init();

}( document ));
