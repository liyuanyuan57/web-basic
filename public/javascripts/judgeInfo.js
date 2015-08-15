$(document).ready(function() {
  $('#submitButton').on('click',function(e) {
     var strgrade = $("input[name='stu_name']").val()||[];
     var strname = $("input[name='stu_name']").val()||[];
     var strnumber = $("input[name='stu_name']").val()||[];
  if (strname.length <= 0 || strnumber.length <= 0 || strgrade.length <= 0) {
     $('#myModal').modal('show');
     e.preventDefault();
    }

  });
});
