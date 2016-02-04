CAVESOFCLARITY = (function (caves) {
  var sandScript = "";
  caves.setSandScript = function(message) {
    sandScript = message;
  };
  return caves;
})(CAVESOFCLARITY);