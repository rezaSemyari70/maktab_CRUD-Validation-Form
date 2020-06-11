$(document).ready(function () {

    // let name = $('#name').val();
    // let password = $('#password').val();
    // let confirm = $('#confirm').val();
    let email = $('#email').val();
    let phone = $('#phone').val();


    //---------Save Data-------------

    $('#saveData').click(function (e) {
        e.preventDefault();
        console.log(email);
        
        // isAlphaNumeric(name);
        // validatePassword(password);
        // isConfirm(confirm);
        isEmail(email);
        // validPhone(phone);
    });

    //***************  check alphanumeric username  ***************

    function isAlphaNumeric(name) {
        pattern = new RegExp(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]$/);
        if (pattern.test(name)) {
            successMode(name);
        } else {
            errorMode(name);
        }
    }


    //***************  validation Password  ***************

    function validatePassword(password) {
        pattern = new RegExp(
            /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)
        if (pattern.text(password)) {
            successMode(password);
        } else {
            errorMode(password);
        }
    }

    //***************  Confirm Password  ***************

    function isConfirm(confirm) {
        if (confirm === password) {
            successMode(confirm);
        } else {
            errorMode(confirm);
        }
    }

    //***************  validation email  ***************

    function isEmail(email) {
        pattern = new RegExp( /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        res = pattern.test();

        return res;
        

        if (res) {
            successMode($('#email'));
        } else {
            errorMode($('#email'));
        }
    }

    //**************  Validation Phone number  ***************

    function validPhone(phone) {
        let res = /^(\+98?)?{?(0?9[0-9]{9,}}?)$/.test(phone);
        if (res) {
            successMode($('#phone'));
        } else {
            errorMode($('#phone'));
        }
    }

    //---------Show Error-------------

    function errorMode(input) {
        console.log(input);
        resetData();
        $(input).css({
            "border-color": "red",
            "background-color": "lightpink"
        });
        const formControl = $(input).parent();
        formControl.children("span").remove();
        if ($(input).val() == "") {
            $('#formEmail').after(
                $(`<span class="error">this field is Empty!</span>`)
            );
        } else {
            $('#formEmail').after(
                $(`<span class="error">data entered is not valid!</span>`)
            );
        }
    }

    //---------Show Success-------------

    function successMode(input) {
        
        const formControl = $(input).parent();
        formControl.children("span").remove();
        $('#email').css({
            "border-color": "green",
            "background-color": "lightgreen"
        });
        $('#formEmail').after(
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

})