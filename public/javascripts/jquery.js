
$(document).ready(function () {
    $(".deleteButton").on('click', (e) => {
        var id = $(e.target).closest('.row').find(".userId").val();

        $.ajax({
            type: "DELETE",
            url: `/api/users/${id}`,
            success: (response) => {
                if (response.success) {
                    window.location.href = response.thisUserIsRemoved  ? "/api/users/login" : response.isAdmin ? "/api/users" : "/api/addUser"
                }
            }
        });

    });

    $(".editButton").on('click', e => {
        var email = $(e.target).closest('.row').find(".email");
        var id = $(e.target).closest('.row').find(".userId").val();
        alert('dziala')

        $.ajax({
            type: "PATCH",
            url: `/api/users/${id}`,
            contentType : 'application/json',
            data: {
                email: email
            },
            success: (response) => {
                if (response.success) {
                    window.location.href = response.isAdmin ? "/api/users" : "/api/addUser"
                }
            }
        });
    })
    $(".infoButton").on('click', e => {
        var id = $(e.target).closest('.row').find(".userId").val();
        window.location.href = `/api/users/${id}`
    })

    $(window).on('load', e => {
        const logout = document.querySelector(".logout-menu")
        const login = document.querySelector(".login-menu")
        if (document.cookie.includes('user=')) {
            const id = document.cookie.replace("user=", "");
            console.log('jest', id);

            if (logout) {
                logout.setAttribute('href', `/api/logout/${id}`);
                login.style.display = 'none';
                logout.style.display = 'block';
            }
        }

        else  {
            login.style.display = 'block';
            logout.style.display = 'none';
        }
    })
})
