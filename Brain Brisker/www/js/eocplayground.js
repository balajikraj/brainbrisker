var gameCase = ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10', ];
var textColor = ['#00a651', '#ff0000', '#46cdef', '#721e9e', '#ff7701', '#00a651', '#ff75a4', '#ffe000', '#b0cb00', '#ba7ab1'];
var textName = ['Red', 'Blue', 'Yellow', 'Brown', 'Grey', 'Orange', 'Purple', 'Blue', 'Orange', 'Pink'];
var btnName1 = ['Green', 'Blue', 'Blue', 'Brown', 'Grey', 'Orange', 'Pink', 'Blue', 'Green', 'Lavander'];
var btnName2 = ['Red', 'Red', 'Yellow', 'Purple', 'Orange', 'Green', 'Purple', 'Yellow', 'Orange', 'Pink'];
var btn1 = ['#ff0000', '#ff0000', '#ffe000', '#721e9e', '#ff7701', '#00a651', '#8a00b9', '#ffe000', '#ff7701', '#ff75a4'];
var btn2 = ['#00a651', '#00aeef', '#46cdef', '#874d00', '#898989', '#ff7701', '#ff75a4', '#00a651', '#b0cb00', '#ba7ab1'];
var score = 0;
var total;
var count = 0;

function start() {
    for (var i = 0; i < gameCase.length; i++) {
        (function(i) {
            setTimeout(function() {
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = false;


                document.getElementById("outline").style.border = "1px solid #b3b3b3";
                var elem = document.getElementById("myBar");
                var width = 1;
                var id = setInterval(frame, 30);

                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                    } else {
                        width++;
                        elem.style.width = width + '%';
                    }
                }

                document.getElementById("screenNumber").innerHTML = gameCase[i];
                document.getElementById("displayName").innerHTML = textName[i];
                document.getElementById("displayName").style.color = textColor[i];
                document.getElementById("btn1").value = btnName1[i];
                document.getElementById("btn2").value = btnName2[i];
                document.getElementById("btn1").style.background = btn1[i];
                document.getElementById("btn2").style.background = btn2[i];
                console.log(gameCase[i]);

                count = count + 1;
                console.log(count);
                if (count == 10) {
                    document.getElementById("outline").style.display = "none";
                }
            }, 3000 * i);
        })(i);
        modal.style.display = "none";



    }
}

function button1() {

    if (document.getElementById("btn1").value == document.getElementById("displayName").innerHTML) {
        document.getElementById("outline").style.border = "5px solid #ff0000";

    } else {
        document.getElementById("outline").style.border = "5px solid #00a651";
        score = score + 1;
        total = score * 10;
        //document.getElementById(score);
        //alert(total);
        document.getElementById("score").innerHTML = total




    }

    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;


}

function breakLoop() {
    break;
}

function button2() {
    if (document.getElementById("btn2").value == document.getElementById("displayName").innerHTML) {
        document.getElementById("outline").style.border = "5px solid #ff0000";

    } else {
        document.getElementById("outline").style.border = "5px solid #00a651";
        score = score + 1;
        total = score * 10;
        //document.write(total);
        // console.log(document.getElementById("score").innerHTML = total);
        document.getElementById("score").innerHTML = total

    }
    //alert(document.getElementById("score").innerHTML=total);

    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    // alert(total);
}