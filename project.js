function displayBlock(){
  var cardChoosen= $(this).attr("id");
  console.log(cardChoosen);
  $(".info-"+cardChoosen).css("display", "block");
  $("body").addClass("bodyActiveProjects");
  $(".album").addClass("active");
}

function displayNone(){
  $(".info-text").css("display", "none");
  $(".album").removeClass("active");
  $("body").removeClass("bodyActiveProjects");
}


$(".card").on("click", displayBlock)
$(".fas").on("click", displayNone)
