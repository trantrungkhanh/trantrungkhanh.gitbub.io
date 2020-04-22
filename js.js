var pos_tr = 1;
var d_tr = 50;



function move2() {
    var tr = document.getElementById('trash');
    console.log(d_tr);

    var id_tr = setInterval(frame2, d_tr);


    function frame2() {


        if (pos_tr != 0) {
            pos_tr++;
            tr.style.left = pos_tr + 'vh';
            if (pos_tr == 51) {
                // clearInterval(id_tr);
                tr.style.left = pos_tr - 51 + 'vh';
                pos_tr = 1;
            }
        }
    }
}
var point = 0;
var d_ball = 5;

function move() {

    var elem = document.getElementById('ball');
    var pos = 90;
    console.log(d_ball);
    var id = setInterval(frame, d_ball);

    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.top = pos + "vh";
            if (pos == 43) {
                if (pos_tr > 20 && pos_tr < 26) {

                    // window.location.reload(true);
                    var e = d_tr + 0.3;
                    var f = d_ball - 0.3;
                    var p = point + 1;
                    point = p;
                    d_ball = f;
                    d_tr = e;
                    console.log(e);
                    console.log(f);
                    move2();
                    //return d_tr;
                    clearInterval(id);
                    elem.style.top = 90 + "vh";
                    document.getElementById('level').innerHTML = p;
                }



            }
            if (pos == 0) {
                alert('game over');
                elem.style.top = '90vh';
                location.reload(true);
            }

        }
    }
}





window.onload = move2();