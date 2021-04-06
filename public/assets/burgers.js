$(function() {
    $(".change-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {}
      }).then(
        function() {
          console.log("changed devour to", newDevour);
        }
      );
      
      location.href = "/";
    });
  
    $("#submit").on("click", function(event) {
      event.preventDefault();
  
      var newBurger = $("#bu").val().trim();
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: {burger_name: newBurger}
      }).then(function() {
          console.log("created new burger");
        }
      );
      
      location.href = "/";
    });
    
    $(".delete-burger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });