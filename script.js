/*function pc(marca,cpu,memoria) {
    this.marca=marca;
    this.cpu=cpu;
    this.memoria=memoria
}

mipc=new pc("gigabite","AMD","1021Mb");
mipc2=new pc("pet","intel","1021Mb");
mipc3=new pc("teta","snapdragon","1021Mb");
console.log("CPU1:"+mipc.cpu+"CPU2:"+mipc2.cpu)

fecha =new Date;
dia=fecha.getDate();
console.log(dia);

meses=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto");
console.log("La matriz meses tiene los siguentes meses:"+meses.join("*"))
console.log("Vacaciones:"+meses.slice(0,5));
///
function menormayor(a,b) {
    return a-b;
}
function mayormenor(a,b) {
    return b-a;
}
numeros =new Array(25,3,88,7,45,81,96,9,2,77,55);
console.log("Numeros de menor a mayor:"+numeros.sort(mayormenor));

jugador=new Array("Jose","Arturo","Moreno","Aguilar");
meses =new Array("Mayo","Junio","Julio");

ferrero=new Array(1005,548,549)
nadal=new Array(6548,3548,188)
moya=new Array(54841,879,214)
federer=new Array(819,8499,578)

total=new Array(ferrero,nadal,moya,federer);
for (let i = 0; i < jugador.length; i++) {
    console.log(jugador[i]);
    for(let j=0; j<3; j++){
        console.log(total[i][j]);
    }
}
var obj1,obj2,ob3,obj4;
obj1=new Boolean();
obj2=new Boolean(false);
obj3=new Boolean(true);
obj4=new Boolean("texto");
console.log("obj1:"+obj1+"\nobj2:"+obj2+"\nobj3:"+obj3+"\nobj4:"+obj4);
var numero_x=10;
var numero_y=20;
console.log(numero_x+numero_y);

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName+" "+ this.id;
    }
  };
nombre=person.fullName();
console.log(nombre);
console.log("Esto fue escrito desde el editor nano de linux");
//perrillo


for (let index = 0; index <= 1000; index++) {
    if(index%3==0 ){
        if(!(index/3==7)){
            console.log(index+"es multiplo de 3")
        }
    }
    if(index%5==0){
        if(!(index/5==7)){
            console.log(index+"es multiplo de 5")
        }
    }
    if(index%10==0){
        if(!(index/10==7)){
            console.log(index+"es multiplo de 10");
        }
        
    }
    if(index%3==0 && index%5==0){
        console.log("perro")
    }
}
//setInterval(calcular_dato,1000);
//document.getElementById("titulo").innerHTML;
function factorial(n){
    if(n%1==0){
        if(n>0){
            return n*factorial(n-1);
        }
        else{
            return 1;
        }
    }
    else{
        return -1;
    }
}*/
//QUnit.test("Prueba funcional factorial",function(assert){assert.equal(factorial(6),720,"!Correcto");});
function request() {
    var pokemon=document.getElementById("txtentrada").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status==200) {
            //print('DONE')
            var json = JSON.parse(xhr.responseText)
            //view.model = json.items
            document.getElementById("imagen").src=json.sprites.other.home.front_default;    
            console.log(json);
        }else{
            document.getElementById("nombre").innerHTML="No se encontro el pockemon";
        }
    }
    xhr.open(`GET","https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    xhr.send();
}
var t="hola";
console.log(t.toUpperCase());
