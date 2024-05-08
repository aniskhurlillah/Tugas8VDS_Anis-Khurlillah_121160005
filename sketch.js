// dP1/dt =aP1 - b P1P2
// dP2/dt =cP1P2 - dP2
// dengan r merupakan konstanta pertumbuhan
// dan M adalah carrying capacity

let t = [];
// Variabel tak bebas
let P1 = [];
let P2 = [];
// Parameter model
let a;
let b;
let c;
let d;
// Kondisi awal
let P10;
let P20;

let tMax = 200;
let dt = 0.1;

let grafik

function setup() {
  createCanvas(400, 400);
  P10 = createInput("20");
  P10.position(20,410);
  P20 = createInput("40");
  P20.position(100,410);
  a = createSlider(0.1, 2, 0.4, 0.01); //min, max, value, step
  a.position(20,450);
  b = 0.05;
  c = 0.03;
  d = 0.2;
  let p = createP('Kondisi awal');
  p.style('font-size', '14px');
  p.position(20, 380);  
  let q = createP('Parameter a');
  q.style('font-size', '14px');
  q.position(20, 420);
  solve(); 
  grafik = new Chart(this, config);  
  P10.changed(solve); // ketika nilainya berganti panggil fungsi solve
  P20.changed(solve);
  a.changed(solve);
}
function draw() {
  grafik.update()
}
function solve(){
  P1[0] = float(P10.value());
  P2[0] = float(P20.value());
  t[0] = 0;
  as = float(a.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    P1[i+1] = P1[i] + dt*as*P1[i]       -  dt*b*P1[i]*P2[i];
    P2[i+1] = P2[i] + dt*c*P1[i+1]*P2[i] -  dt*d*P2[i];
    t[i+1] = round((i+1)*dt,3);
  }
}
