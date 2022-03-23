function get_data() {
  $.get("hello", function(data) {
    var out = document.getElementById("output");
    out.value = data;
  })
};

function init() {
  var out = document.getElementById("output");
  out.value = "Starting export...";
  setInterval(get_data, 1000);
};
