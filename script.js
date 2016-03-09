// create the notification popup
var popup = q.create("<div>").appendTo(document.body).addClass("popup").setStyle("border-radius", "5px");

// create the notification API
var notify = function(message, delay, callback) {
  popup.setHtml(message);
  popup.fadeIn().once("animationEnd", function() {
    window.setTimeout(function() {
       popup.fadeOut().once("animationEnd", function() {
         callback && callback.call();
       });
    }, delay);
  });
};

// DEMO
notify("This is ...", 1000, function() {
  notify("... a qx.website notification demo.", 2000);
});