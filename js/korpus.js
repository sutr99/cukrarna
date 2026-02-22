const forms = {
    10:{eggs:3,sugar:90,flour:90,oil:45},
    11:{eggs:4,sugar:120,flour:120,oil:60},
    15:{eggs:5,sugar:150,flour:150,oil:75},
    18:{eggs:6,sugar:180,flour:180,oil:90},
    22:{eggs:7,sugar:210,flour:210,oil:105},
    24:{eggs:8,sugar:240,flour:240,oil:120}
};

const select=document.getElementById("diameter");
for(let d in forms){
    let opt=document.createElement("option");
    opt.value=d;
    opt.text=d+" cm";
    select.appendChild(opt);
}

function calc(){

let d=select.value;
let f=forms[d];

let eggPrice=parseFloat(document.getElementById("eggPrice").value)||0;
let sugarPrice=parseFloat(document.getElementById("sugarPrice").value)||0;
let flourPrice=parseFloat(document.getElementById("flourPrice").value)||0;
let oilPrice=parseFloat(document.getElementById("oilPrice").value)||0;

document.getElementById("eggs").innerText=f.eggs+" ks";
document.getElementById("sugar").innerText=f.sugar+" g";
document.getElementById("flour").innerText=f.flour+" g";
document.getElementById("oil").innerText=f.oil+" ml";

let cost =
(f.eggs*eggPrice)+
((f.sugar/1000)*sugarPrice)+
((f.flour/1000)*flourPrice)+
((f.oil/1000)*oilPrice);

document.getElementById("cost").innerText=cost.toFixed(2);
document.getElementById("sell").innerText=(cost*3).toFixed(2);
}

select.onchange=calc;
document.querySelectorAll("input").forEach(i=>i.oninput=calc);
calc();