$(function () {
  console.log("JQuery is loaded !");

  $(".vote > .upvote, .downvote").click(function () {
    let post_id = $(this).parent().data("id");
    let is_upvote = $(this).hasClass("upvote");

    $.ajax({
      url: "/post/vote",
      method: "POST",
      data: {
        post_id: post_id,
        upvote: is_upvote
      },
      success: function () {
        console.log("Success");
      },
    });
  });
});
