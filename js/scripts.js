$(document).ready(function(){
    $("form.add").submit(function(event){
      event.preventDefault();
      var beverage = parseInt($("#beverage").val());
      console.log (beverage);
      $("#output").text(beverage);
  });
});
