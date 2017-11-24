var con=1;

var database = firebase.database();
var starCountRef = firebase.database().ref('game/')

b1="b1",b2="b2",b3="b3",b4="b4",b5="b5",b6="b6",b7="b7",b8="b8",b9="b9";
function actions(boton){
    if(boton.className=="buttons"){
        //  alert(boton.name);
        boton.className="clicked";
        var text;
        var color;
        if(con%2==0){
            text="X";
            color = 'red';
        }else{
            text="O";
            color = 'blue';
        }
        boton.value=text;
        boton.appendChild(document.createTextNode(text));
        boton.style.backgroundColor = color;
        boton.setAttribute('who', color)
        con++;
        asignation(text,boton);
    }else{
        //  alert("Yei!!!");
        //  alert(boton.value);
    }
}
function asignation(text,boton){
    if(b1==boton.name){
        b1=text;
    }
    else if(b2==boton.name){
        b2=text;
    }
    else if(b3==boton.name){
        b3=text;
    }
    else if(b4==boton.name){
        b4=text;
    }
    else if(b5==boton.name){
        b5=text;
    }
    else if(b6==boton.name){
        b6=text;
    }
    else if(b7==boton.name){
        b7=text;
    }
    else if(b8==boton.name){
        b8=text;
    }
    else if(b9==boton.name){
        b9=text;
    }
    validation(text);
}
function validation(text){
    var jugador;
    if((b1==b2 && b2==b3)||(b1==b5 && b5==b9)||(b3==b5 && b5==b7)||(b4==b5 && b5==b6)||(b7==b8 && b8==b9)||(b1==b4 && b4==b7)||(b2==b5 && b5==b8)||(b3==b6 && b6==b9)){
        if (text == "O") {
            jugador = "Jugador 1"
        }
        else{
            jugador = "Jugador 2"
        }
        var con = confirm(jugador+" ha ganado!\nDeseas jugar nuevamente?");
        if(con==true){
            window.location.reload();
        }
    }
    asd()
}

function asd() {
    firebase.database().ref('game/').set({
        progress: String(String(document.getElementById('bodyGame').innerHTML)),
        turn: 'X'
  })
}

function asd2() {
    firebase.database().ref('game/').set({
        progress: `
        <div>
             <button id="b11" class="buttons" name="b1" onclick="actions(this)"></button>
             <button id="b12" class="buttons" name="b2" onclick="actions(this)"></button>
             <button id="b13" class="buttons" name="b3" onclick="actions(this)"></button>
             <button id="b21" class="buttons" name="b4" onclick="actions(this)"></button>
             <button id="b22" class="buttons" name="b5" onclick="actions(this)"></button>
             <button id="b23" class="buttons" name="b6" onclick="actions(this)"></button>
             <button id="b32" class="buttons" name="b8" onclick="actions(this)"></button>
             <button id="b31" class="buttons" name="b7" onclick="actions(this)"></button>
             <button id="b33" class="buttons" name="b9" onclick="actions(this)"></button>
         </div>
         `,
        turn: 'X'
  })
}

var starCountRef = firebase.database().ref('game/');
starCountRef.on('value', function(snapshot) {
    let el = snapshot.val()
  document.getElementById('bodyGame').innerHTML = el.progress
});
