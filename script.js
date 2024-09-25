let temperatura = parseFloat(prompt("inforeme a temperatura"))
if (temperatura < 0 ) {
    alert("Muito frio🥶");
} else if(temperatura >= 0 && temperatura <=15) {
    alert("Frio😬");
} else if(temperatura >= 16 && temperatura <=25) {
    alert("Agradavel😁");
} else if(temperatura >= 26 && temperatura <=35) {
    alert("Quente😎");
} else { 
    alert("Muito quente🥵");
}
