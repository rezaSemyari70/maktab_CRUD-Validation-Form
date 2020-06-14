$(document).ready(function () {

    // let name = $('#name').val();
    // let password = $('#password').val();
    // let confirm = $('#confirm').val();
    // let email = $('#email').val();
    // let phone = $('#phone').val();

    //---------Save Data-------------

    $('#saveData').click(function (e) {
        e.preventDefault();
        $('span').remove();

        isAlphaNumeric();
        validatePassword();
        isConfirm();
        isEmail();
        validPhone();

        createContact();
        $("#exampleModal").modal("hide");
        $(":input").val("");



    });

    //***************  check alphanumeric username  ***************

    function isAlphaNumeric() {
        let name = $('#name').val();

        let res = /^([a-z]{5,20})$/.test(name.trim())
        // pattern = new RegExp(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]$/);
        if (res) {
            successMode($('#name'));
        } else {
            errorMode($('#name'));
        }
    }


    //***************  validation Password  ***************

    function validatePassword() {
        let password = $('#password').val();
        res = /^.{5,}$/.test(password.trim());
        if (res) {
            successMode($('#password'));
        } else {
            errorMode($('#password'));
        }
    }

    //***************  Confirm Password  ***************

    function isConfirm() {
        let confirm = $('#confirm').val();
        if (confirm === $('#password').val()) {
            successMode($('#confirm'));
        } else {
            errorMode($('#confirm'));
        }
    }

    //***************  validation email  ***************

    function isEmail() {
        let email = $('#email').val().trim();

        let res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.trim());

        if (res) {
            successMode($('#email'));
        } else {
            errorMode($('#email'));
        }
    }

    //**************  Validation Phone number  ***************

    function validPhone() {

        let phone = $('#phone').val();

        let res = /^(\+98?)?{?(0?9[0-9]{9,}}?)$/.test(phone);
        if (res) {
            successMode($('#phone'));
        } else {
            errorMode($('#phone'));
        }
    }

    //---------Show Error-------------

    function errorMode(input) {
        resetData();
        const formControl = $(input).parent();
        formControl.children("span").remove();
        $(input).css({
            "border-color": "red",
            "background-color": "lightpink"
        });

        if ($(input).val() == "") {
            $(input).after(
                $(`<span class="error">this field is Empty!</span>`)
            );
        } else {
            formControl.after(
                $(`<span class="error">data entered is not valid!</span>`)
            );
        }
    }

    //---------Show Success-------------

    function successMode(input) {
        const formControl = $(input).parent();

        formControl.children("span").remove();
        input.css({
            "border-color": "green",
            "background-color": "lightgreen"
        });
        $(input).parent().after(
            $(`<span class="pass">valid data</span>`)
        );
    }

    //--------- Reset Inputs-------------

    function resetData() {
        $('#resetData').click(function () {
            $('span').remove();
            $('input').css({
                "border-color": "#ddd",
                "background-color": "white"
            })
        })
    }



    // **************   Create Contact   **************


    function createContact() {
        let rowTable = $(":input").serializeArray();
        $('#content-table').append(`
            <tbody><tr><td>${rowTable[0].value}</td><td>${rowTable[1].value}</td><td>${rowTable[4].value}</td><td>${rowTable[5].value}</td><td><button class="bg-primary"><i class="fa fa-edit"></i></button> <button class="bg-danger"><i class="fa fa-trash"></i></button></td></tr></tbody>
        `)
    }


})