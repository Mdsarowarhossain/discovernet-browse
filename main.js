
$(".btn").click(function (){
  if($(".url").val()=="")
  {
    $(".alert").show(1500);
  }
  else {
    if($(".url").val().match("://")){
    var url =  $(".url").val().replace("://","/");
    } else{
          $(".alert").show(1500);

    }
  window.location.href = "https://www.0.discoverapp.com/"+url
    
  }
});
setInterval(function(){
  $(".alert").hide(1300)
},1800)