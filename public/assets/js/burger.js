$(function(){
    $(".devoured").on("click", function(event){
        var id = this.id;

        var burgerDevoured = {
            devoured: 1,
            id: id
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerDevoured
          }).then(
            function() {
              location.reload();
              console.log("devoured burger "+id);
            }
          );
    });

    $(".create-burger").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burger-name").val().trim(),
          devoured: 0
        };
        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("changed to "+ newBurger);
              location.reload();
            }
          );
      });
    
});