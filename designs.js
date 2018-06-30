var color, width, height;


// submits size as speified by the user
$('#sizePicker').on('submit', function(event){
event.preventDefault();
color= $('#colorPicker').val();
width= $('#inputWeight').val();
height= $('#inputHeight').val();
makeGrid(height, width);
});


// produces grid as specified by the user
function makeGrid(x,y) {

$('tr').remove();
for (n=1;n<=x; n++){
   $('#pixelCanvas').append('<tr id=table'+n+'></tr>');
   for(m=1;m<=y;m++){
       $('tr').filter(':last').append('<td></td>');
          }
}

// adds color to rid cells as specified by the user
$('td').click(function addColor(){
   color = $('#colorPicker').val();
   if ($(this).attr('style')) {
       $(this).removeAttr('style')
   } else {
       $(this).css('background-color',color);
   }
})
}
