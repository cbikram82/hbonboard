//const {db} = require('.dbtest');

$(document).ready(function () {
  $("#btn").on("click", function (event) {
    alert("working!!" + $("#email").val());
    // const data = import {dbq.dbquery($('#email').val())};
    //"http://localhost:9229/user/"
    //console.log(res1);
    var email = $.get(
      "https://r5v1ktsk87.execute-api.us-east-1.amazonaws.com/dev/" +
        $("#email").val(),
      function (data, status) {
        location.href = data + ".html";
        //    // alert(data);
            alert(status);
      }
    );
    // const data = "employee";
    //location.href=data+'.html';
    // var url = 'https://qssqlhxrof574kkug7gwvn7wsu0eoljh.lambda-url.us-east-1.on.aws/?email='+$('#email').val()+'&password='+$('#pwd').val();
    // var url = "https://www.google.com/?email="+$('#email').val()+'&password='+$('#pwd').val();

    // $.get(url, function(data, status){
    //     location.href=data+'.html'
    //    // alert(data);
    //    // alert(status);
    // });
  });
});
