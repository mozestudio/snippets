Namespace.forms.fileSelect = (function() {
  // Required HTML markup:
  // <div data-behaviour="file-select">
  //   <ins>+</ins>
  //   <a href="#">Select a file to upload</a>
  //   <span class="selected"></span>
  // </div>
  // <input type="file" name="user_cover_letter" class="hidden" />
  var setup = function() {
    $("[data-behaviour~=file-select] a").on("click", function(e) {
      e.preventDefault();

      $(this).parent().siblings("input[type=file].hidden").trigger("click");
    });

    $("input[type=file].hidden").on("change", function(e) {
      $(this).siblings("[data-behaviour~=file-select]").find(".selected").text(e.target.files[0].name);
    });
  }

  return {
    setup: setup,
  };
})();