var ranting = "";

$("li").on("click", function () {
  if ($(this).hasClass("unselect")) {
    $(this).removeClass("unselect");
    $(this).addClass("select");
    clearAllButtonAtLeastOne(this);
  } else if ($(this).hasClass("select")) {
    $(this).removeClass("select");
    $(this).addClass("unselect");
  }
});

$(".btn").on("click", function () {
  var buttons = document.querySelectorAll("li");
  for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if ($(button).hasClass("select")) {
      ranting = button.innerHTML;
      console.log(ranting);
    }
  }

  $(".rating-card").addClass("hider");

  $(".thaks-card").removeClass("hider");

  $(".rating-select").text("You selected " + ranting + " out of 5");
});

function clearAllButtonAtLeastOne(element) {
  var buttons = document.querySelectorAll("li");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] != element) {
      $(buttons[i]).removeClass("select");
      $(buttons[i]).addClass("unselect");
    }
  }
}
