//const {db} = require('.dbtest');

$(document).ready(function () {
  $("#btn").on("click", function (event) {
    //alert("working!!" + $("#email").val());
    // const data = import {dbq.dbquery($('#email').val())};
    //"http://localhost:9229/user/"
    //console.log(res1);
    var email = $.get(
      "http://localhost:9229/user/" + $("#email").val(),
      function (data, status) {
        location.href = data + ".html";
        //    // alert(data);
        //alert(status);
      }
    );
  });
});
