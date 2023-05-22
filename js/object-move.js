const scoretxt =document.querySelector('h2');

class Object{
    obj;
    Y=(window.innerHeight-100)*Math.random();
    X=window.innerWidth-100;
    dx=Math.random()*5;
    
    constructor(){
        this.obj =document.createElement('div');
        this.obj.classList.add('moving-object');
        document.body.append(this.obj);
        this.obj.style.top=`${this.Y}px`;
        this.obj.style.left=`${this.X}px`;
    }
    
    moving() {
        this.X=this.X-this.dx;
        this.obj.style.left=`${this.X}px`;
        if(this.X<=0) {
            this.Y=(window.innerHeight-100)*Math.random();
            this.X=window.innerWidth-100;
            this.obj.style.top=`${this.Y}px`;
        };

        if(right<=this.X+100 && (right+150)>=this.X+100 && y<=this.Y-50 && (y+150)>=this.Y-50){
            this.Y=(window.innerHeight-100)*Math.random();
            this.X=window.innerWidth-100;
            this.obj.style.top=`${this.Y}px`;
            this.obj.style.left=`${this.X}px`;
            
            add();
        };   
    };
    
};

let score=0;
function add(){
    score++;
    scoretxt.innerHTML=`Score : ${score}` ;
}
const elm1=new Object();
const elm2=new Object();
const elm3=new Object();

setInterval(() => {
    elm1.moving(score);
    elm2.moving(score);
    elm3.moving(score);
  
}, 10);
