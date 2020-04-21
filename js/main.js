$(function() {
  $(".sub-menu").hover(
    function() {
      $(this)
        .find("ul")
        .css({
          visibility: "visible"
        });
    },
    function() {
      $(this)
        .find("ul")
        .css({
          visibility: "hidden"
        });
    }
  );
  $(".tab-search-home").click(function() {
    if (!$(this).hasClass("active")) {
      $(this)
        .parent()
        .find(".active")
        .removeClass("active");
      $(this).addClass("active");
    }
  });

  $("body").scroll(function() {
    if ($("body").scrollTop() > 100) {
      $("#main-header").css({
        "background-color": "#767676",
        color: "black",
        top: 0,
        right: 15,
        "z-index": "1000"
      });
      if ($("body").scrollTop() > 500) {
        $(".header-news").css({
          position: "fixed",
          top: 0
        });
      } else {
        $(".header-news").css({
          position: "relative",
          top: 0
        });
      }
    } else {
      $("#main-header").css({
        "background-color": "transparent",
        color: "#ffffff"
      });
    }
  });
  $(".icon-menu-mobile").click(function() {
    $(".main-nav-menu").css({ display: "block" });
  });
  $(".close-menu-mobile").click(function() {
    $(".main-nav-menu").css({ display: "none" });
  });
  $(".sub-menu-mobile").click(function() {
    if (
      !$(this)
        .find("ul")
        .hasClass("menu-mobile-active")
    ) {
      if (
        $(".sub-menu-mobile")
          .find("ul")
          .hasClass("menu-mobile-active")
      ) {
        $(".sub-menu-mobile")
          .find("ul")
          .removeClass("menu-mobile-active");
      }
      $(this)
        .find("ul")
        .addClass("menu-mobile-active");
    } else {
      $(this)
        .find("ul")
        .removeClass("menu-mobile-active");
    }
  });
  $("#more-button").click(function() {
    $(".content-wrapper").css({ height: "auto" });
    $("#more-button").css({ display: "none" });
    $("#collapse-button").css({ display: "inline-block" });
  });
  $("#collapse-button").click(function() {
    $(".content-wrapper").css({ height: "300px" });
    $("#more-button").css({ display: "inline-block" });
    $("#collapse-button").css({ display: "none" });
  });
});
$(function() {
  $(".dropdown-title").click(function() {
    const $menu = $(this).parent();
    $(document).mouseup(e => {
      if (
        !$menu.is(e.target) && // if the target of the click isn't the container...
        $menu.has(e.target).length === 0
      ) {
        // ... nor a descendant of the container
        $menu.find(".menu").css({ display: "none" });
      }
    });
    // console.log("aaa");
    // let isOpen = $menu.find(".menu").css("display");
    // if (isOpen == "block") {
    //   $menu.find(".menu").css({ display: "none" });
    // }
    $menu.find(".menu").toggle();
  });
  $(".sort-group-title").click(function() {
    const $menu = $(this).parent();
    $(document).mouseup(e => {
      if (
        !$menu.is(e.target) && // if the target of the click isn't the container...
        $menu.has(e.target).length === 0
      ) {
        $menu.find(".sort-list").css({ display: "none" });
      }
    });
    $menu.find(".sort-list").toggle();
  });
  $(".tab-sell-buy").click(function() {
    console.log("aaa");
    if (!$(this).hasClass("active")) {
      $(this)
        .parent()
        .find(".active")
        .removeClass("active");
      $(this).addClass("active");
    }
  });
});
//------------------------------Active-------------------

$(function() {
  var loc = window.location.href;
  console.log(loc);
  $("#menu-nav-news")
    .find("a")
    .each(function() {
      $(this).toggleClass("active-page", $(this).attr("href") == loc);
    });
});
