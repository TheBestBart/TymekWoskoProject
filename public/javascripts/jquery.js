$(document).ready(function () {
  $(".deleteButton").on("click", (e) => {
    var id = $(e.target).closest(".row").find(".userId").val();

    $.ajax({
      type: "DELETE",
      url: `/api/users/${id}`,
      success: (response) => {
        if (response.success) {
          window.location.href = response.thisUserIsRemoved
            ? "/api/users/login"
            : response.isAdmin
            ? "/api/users"
            : "/api/addUser";
        }
      },
    });
  });

  $(".editButton").on("click", (e) => {
    var email = $(e.target).closest(".row").find(".email").val();
    var id = $(e.target).closest(".row").find(".userId").val();
    console.log("email", email);

    fetch(`/api/users/${id}`, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
    .then(res => res.json())
    .then(data => {
      console.log('data', data);
      if (data.success) {
          window.location.href = data.userId
            ? `/api/users/${data.userId}`
            : "/api/addUser";
        }
    })
    .catch(error => console.log('error: ', error));
  });

  $(".infoButton").on("click", (e) => {
    var id = $(e.target).closest(".row").find(".userId").val();
    window.location.href = `/api/users/${id}`;
  });
});
