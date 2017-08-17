$(document).ready(function(){
      var i=1;
     $("#add_row").click(function(){
      $('#addr'+i).html("</td><td><input name='input-file-preview"+i+"' type='file' class='form-control input-md'/></td>");

      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      i++;
  });
     $("#delete_row").click(function(){
    	 if(i>1){
		 $("#addr"+(i-1)).html('');
		 i--;
		 }
	 });

});

$('#imageUpload').change(function(){
			readImgUrlAndPreview(this);
			function readImgUrlAndPreview(input){
				 if (input.files && input.files[0]) {
			            var reader = new FileReader();
			            reader.onload = function (e) {
			                $('#imagePreview').attr('src', e.target.result);
							};
              reader.readAsDataURL(input.files[0]);
			          }
			     }
		});
