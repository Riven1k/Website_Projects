function toggleVisibility() {
    if ($('nav').is(':visible')) {
        $('nav').hide(1000);
    } else {
        $('nav').show(1000);
    }
}

function toggleinfo() {
    firstInfo = document.getElementById("Info1");
    SecondInfo = document.getElementById("Info2");
    ThirdInfo = document.getElementById("Infor3")
    FourthInfor = document.getElementById("Info4")
    a.style.display = "none";
}
window.onload = toggleinfo;

function toggleinfo1() {
    info1 = getElementById("Info1")
    info1.style.display = "block";    
}

function toggleinfo2() {
    info2 = getElementById("Info2")
    info2.style.display = "block";    
}

function toggleinfo3() {
    info3 = getElementById("Info3")
    info3.style.display = "block";    
}

function toggleinfo4() {
    info4 = getElementById("Info4")
    info4.style.display = "block";    
}


function addtocart() {
    alert("Product added to cart.")
}

var errors;

$(document).ready(function () {
    $('#submit').click(function () {
        errors = '';

        validateElHasValue("FullName")
        validateElHasValue("Email")
        validateElHasValue("Questions")

        if (errors == "") {
            $('#feedback').css('color','green')
            $('#feedback').html("<h3>Form Data Valid!</h3><ul>" + feedback + "</ul>")
        }
        else {
            $('#feedback').css('color','red')
            $('#feedback').html("<h3>Form Data Invalid!</h3><ul>" + errors + "</ul>");
        }
    })
})

function validateElHasValue(name) {
    var value = $('form[name="personalInfo"] input[name=' + name +']').val()
    if (value == "") {
        errors += "<li>" + FullName + " cannot be empty</li>"
    }
    else {
        feedback += "<li>" + FullName + ": " + value + "</li>"
    }
}