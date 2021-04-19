"use strict";

// Get the JSON info from: "https://official-joke-api.appspot.com/jokes/ten"

$.ajax({
  url: "https://official-joke-api.appspot.com/jokes/ten",
  method: "GET",
  dataType: "json",
  success: function (response) {
    console.log(response);
    console.log(response[0].id);
    let jokesSection = $("#jokes");

    for (let i = 0; i < response.length; i++) {
      let resp = response[i];

      let art = $("<article ></article>");
      art.attr("id", resp.id);
      art.attr("data-type", resp.type);

      art.append($("<h2>").text(resp.setup));
      art.append($("<p>").text(resp.punchline));

      jokesSection.append(art);
    }
  },
  error: function (xhr, status, error) {
    console.log(xhr, status, error);
  },
});
