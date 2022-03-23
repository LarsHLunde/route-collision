function get_data() {
  $.get("hello", function(data) {
    var out = document.getElementById("output");
    out.placeholder = data;
  })
};

function init() {
  var out = document.getElementById("output");
  out.placeholder = "Starting export...";
  setInterval(get_data, 1000);
};
