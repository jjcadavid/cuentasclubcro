let table1;
let table2;
let filasEgresos,filasIngresos;
let imagenIngresos;
let imagenEgresos;
let logo;
let saldo;

function preload() {
  table1 = loadTable("/Cuentas/ingresosCRO.csv", "csv", "header");
  table2 = loadTable("/Cuentas/egresosCRO.csv", "csv", "header");
  imagenIngresos = loadImage("/Imagenes/IngresosCRO.PNG");
  imagenEgresos = loadImage("/Imagenes/egresoCRO.PNG");
  logo = loadImage("Imagenes/logo2.png");
  saldo=loadImage("Imagenes/saldoCRO.PNG");
}
function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1920, 1080);
  background(255);
  
  filasIngresos = table1.getRowCount();
  filasEgresos = table2.getRowCount();
  for (let i = 0; i < filasIngresos; i++) {
    //tabla.rows[i].arr[0];
    //tabla.rows[i].arr[5];

    for (let j = 0; j < 4; j++) {
      //listadoPreguntas[i].respuestas[j] = tabla.rows[i].arr[j + 1];
    }
  }
  //print(filasIngresos);
  //print(filasEgresos);
  //print(table1.rows[0].arr[0]);
  //text(tabla.rows[0].arr[5],0,20);
}

function draw() {
  background(255);
  mostrarLogo();
  mostrarIngresos(0,0);
  mostrarEgresos(0,height*0.35);
  mostrarSaldo(0,height*0.7);
  
}

function mostrarLogo(){
   imageMode(CENTER);
  push();
  translate(width*0.28,height*0.75);
  scale(1.2);
  image(logo,0,0);
  pop();
  noStroke();
  fill(255,200);
  rect(0,0,width,height); 
}

function mostrarIngresos(posx,posy){
  fill(0);
  strokeWeight(3);
  textSize(30);
  text("INGRESOS",width*0.02+posx,height*0.1+posy)
  strokeWeight(5);
  stroke(0);
  for(let i=0;i<=filasIngresos+1;i++){
    line(width*0.02+posx,height*0.13+posy+i*31,width*0.47+posx,height*0.13+posy+i*31);
  }
  
  strokeWeight(0);
  textAlign(LEFT,CENTER);
  textSize(20);
  strokeWeight(1);
  text("FECHA",width*0.02+posx,height*0.15+posy);
  strokeWeight(0);
  for(let i=0;i<filasIngresos;i++){
    text(table1.rows[i].arr[0],width*0.02+posx,height*0.15+(i+1)*30+posy);
  }
  strokeWeight(1);
  text("CONCEPTO",width*0.1+posx,height*0.15+posy);
  strokeWeight(0);
  for(let i=0;i<filasIngresos;i++){
    text(table1.rows[i].arr[1],width*0.1+posx,height*0.15+(i+1)*30+posy);
  }
  strokeWeight(1);
  text("ENCARGADO",width*0.2+posx,height*0.15+posy);
  strokeWeight(0);
  for(let i=0;i<filasIngresos;i++){
    if(i==filasIngresos-1)strokeWeight(1);
    text(table1.rows[i].arr[2],width*0.2+posx,height*0.15+(i+1)*30+posy);
  }
  strokeWeight(1);
  text("CANTIDAD",width*0.3+posx,height*0.15+posy);
  strokeWeight(0);
  for(let i=0;i<filasIngresos;i++){
    text(table1.rows[i].arr[3],width*0.3+posx,height*0.15+(i+1)*30+posy);
  }  
  strokeWeight(1);
  text("UTILIDAD",width*0.4+posx,height*0.15+posy);
  strokeWeight(0);
  for(let i=0;i<filasIngresos;i++){
    if(i==filasIngresos-1)strokeWeight(1);
    text(table1.rows[i].arr[9],width*0.4+posx,height*0.15+(i+1)*30+posy);
  }  
}

function mostrarEgresos(px,py){
  fill(0);
  strokeWeight(3);
  textSize(30);
  text("EGRESOS",width*0.02+px,height*0.1+py)
  strokeWeight(5);
  stroke(0);
  for(let i=0;i<=filasIngresos+1;i++){
    line(width*0.02+px,height*0.13+py+i*31,width*0.47+px,height*0.13+py+i*31);
  }
  textAlign(LEFT,CENTER);
  textSize(20);
  strokeWeight(1);
  text("FECHA",width*0.02+px,height*0.15+py);
  strokeWeight(0);
  for(let i=0;i<filasEgresos;i++){
    text(table2.rows[i].arr[0],width*0.02+px,height*0.15+(i+1)*30+py);
  }
  strokeWeight(1);
  text("CONCEPTO",width*0.1+px,height*0.15+py);
  strokeWeight(0);
  for(let i=0;i<filasEgresos;i++){
    if(i==filasIngresos-1)strokeWeight(1);
    text(table2.rows[i].arr[1],width*0.1+px,height*0.15+(i+1)*30+py);
  }
  strokeWeight(1);
  text("ENCARGADO",width*0.3+px,height*0.15+py);
  strokeWeight(0);
  for(let i=0;i<filasEgresos;i++){
    text(table2.rows[i].arr[2],width*0.3+px,height*0.15+(i+1)*30+py);
  }
  strokeWeight(1);
  text("COSTO",width*0.4+px,height*0.15+py);
  strokeWeight(0);
  for(let i=0;i<filasEgresos;i++){
    if(i==filasIngresos-1)strokeWeight(1);
    text(table2.rows[i].arr[3],width*0.4+px,height*0.15+(i+1)*30+py);
  }  
}

function mostrarSaldo(px,py){
  fill(0);
  strokeWeight(3);
  textSize(30);
  text("SALDO",width*0.02+px,height*0.1+py)
  strokeWeight(5);
  let selecIn=filasIngresos;
  let dato2=table2.getRows();
  let dato1=table1.getRows();
  let totIngresos=dato1[filasIngresos-1].get(9);
  let totEgresos=dato2[filasEgresos-1].get(3);
  stroke(0);
  let disponible="$527.000";
  strokeWeight(0);
  text(disponible, width*0.085+px,height*0.1+py);
  
}

function mostrarImagenes(){
  image(logo,-width*0.1,height*0.02,width*0.5,height*0.4);
  image(imagenIngresos, width * 0.05, height * 0.15);
  image(imagenEgresos, width * 0.05, height * 0.4);
  image(saldo,width * 0.27, height * 0.65);
}
