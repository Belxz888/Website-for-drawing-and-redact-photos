//PROMISE ... => EVERYTHING ABOUT IT

//var promise = new Promise(=>(resolve, reject) {
    




// метод для навешивания обработчиков promise.then(onFulfilled, onRejected)
    
    
    
    
    
    
    
    
    /*onFulfilled – функция, которая будет вызвана с результатом при resolve.
onRejected – функция, которая будет вызвана с ошибкой при reject.*/

// Создаётся объект promise
/*let promise = new Promise((res, rej) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    res("result");
  }, 5000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
     document.write("<h2>" + "Fulfilled: " +  result +"</h2>"); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );*/
  //завтра вернее буду дальше изучать

   //methods splice,slice,concat методы массивов
   //Gosha.concat(arr) соеденили массивы арр и Гоша



  //var arr = ["Hello","World",100,100,5,true]
  // var Gosha = [2,3,5,2,4,1,3]
   //arr.splice(2,2)//находит и удаляет значения 1 цифра в скобках указывет очередность 2 цифра сколько цифр нужно удалить после нее
   //var get = arr.slice(-2) удаляет все до определенного в скобках айтема
   
   //
   //метод массива foreach
   /*
   arr.forEach(function(item, index, array){
  });
  ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} имеет позицию ${index} в ${array}`);
  });*/
  
  //var rex = document.getElementById("#arr")

  //метод массива indexof он перебирает массив с права на лево from to 
  // ищет искомый эелемент если он не находит возвращает -1
  //var arr = ["Bilbo", "Gandalf", "Nazgul",true,140,]
  //arr.IndexOf(2,1)


//метод массива filter
/*let users = [
  {id: 100, name: "Вася"},
  {id: 200, name: "Петя"},
  {id: 343, name: "Маша"} 
];*/

// возвращает массив, состоящий из двух первых пользователей
//let someUsers = users.filter(item => item.id < 200 );

//alert(someUsers); // 1
/*то есть у нас имеется обьект со значениями внутри
массива и нам нужно выбрать людей с айди меньше 3
  воспользуемся фильтром */
  /* метод массива map вызывает функцию для каждого элемента массива и возвращает
   массив результатов выполнения этой функции.
  let lengths = ["Nekelodeon", "Gandalfseofersonnedoe", "Nazgulbieashterbunnen"].map(item => item.length);// 5,7,6*/
  
  
  // метод sort() cортирует элементы массива 
   //var arr = [1, -2, 15, 2, 0, 8].sort();

   // метод reverse()самый простой просто переворачивает массив задом 
   //var arr = [1, -2, 15, 2, 0, 8].reverse() 8 0 2 15 -2 1

   //методы split и join()
   // split() разбивает строку на массив по заданному разделителю в скобках 
   //например (','). не работает с обычным массивом
   //join работает просто и понятно логичный синтаксис
  // let arr = ['Gosha', 'Петя', 'Маша',""];

//let arrs = arr.join('  dog ++ ');//Gosha dog ++ Петя dog ++ Маша dog ++
 


//let arr = [1, 2, 3, 4, 5];

//let result = arr.reduce((sum, current) => sum + current, 0);//sum первый элемент массива 
//current последний элемент то есть мы их складываем с помощью с стрелочной функции
//var facts = ["20","10"];
//var news= facts.reduce((sum,current)=> sum + current)
//массивы основаны на обьектах
//var type = (typeof [])//object
  //rex.innerHTML = document.write("<h1>"+type+ "</h1>");
  //продолжу завтра 
  //методы массивов
 /* let tempArr = [];

for (let i = 1; i <= 100; i++) {
  tempArr.push((i <=99) ? `${i} - молодой` : '');
  tempArr.push((i >i/2 ) ? `${i} - старый` : '');
}

function doevery(arr) {
  arr.sort(i => document.write("<h1>"+ i + "</h1>"))
}

doevery(tempArr);
*/
//notifications workk

/*function check(){
  var notification = new Notification('Вы зашли на сайт как вам ?',
{ body: 'Вопrосы?', dir: 'auto', icon: 'https://kai.ru/documents/11956846/12076583/лого+с+подписью+2вар..jpg/e0470d2f-5b51-4d9d-90c0-6482692cd6c3?t=1629362050487' }
);


}*/
/*let mainmas = []
let input  = document.getElementById("super")
input.addEventListener("input",function give(e){
  const collector ={
    data : Date.now,
    text: e.target.value
  }
  mainmas.push(collector)
  const all = e.target.value;
  all.collector.data
  let news = document.getElementById("new")
  news.innerText = all
})
function maket(){
let news = document.getElementById("new")
  news.innerText = mainmas.text
}*/
// тодо лист на js
/*
document.querySelector('#sub').onclick = function made(){
  if(document.querySelector('#super').value.length == 0){//
    console.log("Please Enter a Task")
  }

  else{
    //ОТРИСОВКА ТАСКА
      document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('#super').value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt">DELETE</i>
              </button>
              <input type="checkbox"  id="check">
          </div>
      `;
      document.querySelector('#super').value = ''
//DELETE BUTTON CODE
      let current_tasks = document.querySelectorAll(".delete");
      for(var index=0; index<current_tasks.length; index++){
          current_tasks[index].onclick = function(){
              this.parentNode.remove();
          }
      }
  }
  const  checkinp = document.getElementById("check");
     const complmes = document.getElementById("comp")
      complmes.innerText = '  not completed';
          checkinp.onchange  = function dode (){
            if (checkinp.checked){
              complmes.style.visibility = 'visible';
    complmes.innerText = 'completed';
            }
            else{
    complmes.innerText  = 'not completed';

            }
          }
}*/
/*const arrsup = [1212,6382,121,93934,31231]
function othermap(arr,fun){
  const newarr = [] //нулевой массив
  for(let index of arr){
    newarr.push(fun(index))
  }
  return newarr
}
const map = document.querySelector(".map")
const final = othermap(arrsup,(index)=>index+23100)
map.innerHTML =`<p class="map">${final}</p>`;*/
/*const filterarr = [2,722,995,1050]
const otherfilter =(arr,fun) =>{
  const filterfun = []
  for(let index of arr){
if (fun(index)){
filterfun.push(index)
}
return filterfun;
  }
}
console.log(otherfilter(filterarr , (index) => index % 2 ==0))
*/
const filter = document.querySelector(".filter")
let main = document.getElementById("change-color")
let backgroundcolor = document.getElementById("change-bck")
main.addEventListener("input",function getcolor(event){
filter.innerHTML = event.target.value;
const colors = event.target.value;
filter.style.color = colors;
const element = document.querySelector(".min")
/*element.innerHTML = `<p class="text-ex">Loren de petson kuer <br>
Jueer ldfef kdien lode <br>
Leue nene opere likur
 </p>
`*/})


//element.innerHTML = `<p> ${norm} px</p>`

const download = document.getElementById("download")
const linewid = document.getElementById("change-line")
const canvas = document.querySelector(".maincan")
const retpain = document.getElementById("dissmove")
const morecanvas = document.getElementById("more")
const eraserButton = document.getElementById('smove');
canvas.width = 700 
canvas.height = 400
 let width = canvas.width;
 let height =canvas.height
const context = canvas.getContext("2d")
let isDrawing = false;
let isErasing =false;
let isSecPaint = false;
let lastX 
let lastY 
let stateStack = [];
  function startDrawing(event) {
    const { offsetX, offsetY } = event;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    isDrawing = true;
  }
  
  function draw(event) {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event;
    context.strokeStyle = main.value;
  context.lineCap = "round";
  context.lineWidth = linewid.value;
    if (!isErasing) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else {
      context.clearRect(offsetX - 5, offsetY - 5, 10, 10);
    }
    if (isSecPaint && !isErasing) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } 
    saveState();
  }
  
  function stopDrawing() {
    isDrawing = false;
  }
  function saveState() {
    stateStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
  }
  function restoreState() {
    if (stateStack.length > 0) {
      context.putImageData(stateStack.pop(), 0, 0);
    }
  }
  const bc = document.getElementById("nug").addEventListener("click",()=>{
    restoreState();
  })
  function toggleErasing() {
    isErasing = true;
   canvas.style.cursor = "cell"
  }
  download.style.backgroundColor
  function stopErasing(){
    isErasing = false;
   isSecPaint = true
   canvas.style.cursor = "crosshair"
  }
  function backchange(){
    canvas.style.backgroundColor = backgroundcolor.value
  }
  const back = document.getElementById("bck")
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
  back.addEventListener("click",backchange)
  eraserButton.addEventListener('click', toggleErasing);
  retpain.addEventListener("click",stopErasing)

//кнопка полного стирания
const deleteit = () =>{
  context.clearRect(0, 0, width,height)
  canvas.style.backgroundColor = "dimgray"
}

/*const  otkl= (e) =>{
    isErasing = false;
    isDrawing= true;
    context.moveTo(-10,-50);
  context.lineTo(-10,-50);

  }*/

//eraserButton.addEventListener("click",steret)
//retpain.addEventListener("click",otkl)
//
//canvas.style.fontSize= `${linewid.value}px`
/*рандом
function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}*/
//обработка скачивания изображения
download.addEventListener('click', function(e) {
  console.log(canvas.toDataURL());
  const link = document.createElement('a');
  link.download = 'youredactor.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
//оценка с джсона
/*
const itog = document.getElementById("itog")
const ozhenka = () =>{
  fetch('/main.json').then(response => response.json())
  .then(data => {data.forEach(give =>{console.log(give.powers)})})
}*/
//Функция увеличения и уменьшения канваса
const buttoncount = document.getElementById("other")
buttoncount.addEventListener("click",()=>{canvas.width +=10; canvas.height+=10; context.save()})
//добавить добавление фоток и сделать сливающиеся канвасы также дать возможность добавлять фигуры
const buttondiscount = document.getElementById("this")
buttondiscount.addEventListener("click",()=>{canvas.width -=10; canvas.height-=10; context.save();  })
const add = document.getElementById("fileimg")
const imgwidth = document.getElementById("width")
const imgheight = document.getElementById("height")
let photo = 0 
var reader = new FileReader();
var img = new Image();
// Функция, которая будет вызвана при загрузке изображения
reader.onload = function(event){
    // Создаем новый объект изображения
    var img = new Image();
    // Устанавливаем источник изображения на выбранный файл
    img.src = event.target.result;
    // Когда изображение загружено, рисуем его на канвасе
    img.onload = function(){
      var width = img.width;
      var height = img.height;
      // Максимальная ширина и высота, которые могут быть нарисованы на канвасе
      var maxWidth = imgwidth.value;
      var maxHeight =imgheight.value;
    
      // Если ширина и высота изображения больше максимальных значений, то измените их соответственно
      if (width > maxWidth) {
       
        width = maxWidth;
      }
      if (height > maxHeight) {
        height = maxHeight ;
      }
      /*  context.drawImage(img,0,0,width,height);
        canvas.style.background = img*/
      };
      canvas.addEventListener("click",(event) =>{
        photo+=1
        if(photo>1){
          event.stopPropagation()
          //context.drawImage(0);
        }
        const { offsetX, offsetY } = event;
        context.drawImage(img,offsetX,offsetY,imgwidth.value,imgheight.value);
      
      })
};

// Функция, которая будет вызвана при изменении элемента input
add.addEventListener('change',function(event){
    // Получаем файл, выбранный пользователем
    var file = event.target.files[0];
    // Если файл был выбран
    if(file){
        // Читаем файл как URL-адрес
        reader.readAsDataURL(file);
    }
});
/*window.addEventListener('resize', function() {
  // Сохраняем текущее изображение на канвасе
  var dataURL = canvas.toDataURL();

  // Устанавливаем новые размеры канваса
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Отрисовываем сохраненное изображение на канвасе
  var img = new Image();
  img.src = dataURL;
  img.onload = function() {
    context.drawImage(img, 0, 0, width,height);
  };
});*/
let tip = document.getElementById("tip")
// добвление текста
let textinput = document.getElementById("text-input")
textinput.addEventListener("input",(e) =>{
  const lengt = e.target.value
  if(lengt.length>=2){tip.innerText = "Нажмите 2 раза чтобы добавить "
  tip.style.display = "block"}
  else{
    tip.style.display = "none"}
  }
)
const text = textinput.value
canvas.addEventListener('fullscreenchange',()=>{
  alert("fuck")
})
canvas.addEventListener('dblclick',(event)=>{
  const { offsetX, offsetY } = event;
  context.fillText(textinput.value,offsetX,offsetY)
})