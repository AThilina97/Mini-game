
class Object{
    obj;
    Y=(window.innerHeight-100)*Math.random();
    X=window.innerWidth-100;
    dx=Math.random()*5;

    constructor(){
        this.obj =document.createElement('div');
        this.obj.classList.add('moving-object');
        document.body.append(this.obj);
        this.obj.style.top=`${this.Y}px`
        this.obj.style.left=`${this.X}px`
    }
    
    moving() {
        this.X=this.X-this.dx;
        this.obj.style.left=`${this.X}px`;
        if(this.X<=0) {
            this.Y=(window.innerHeight-100)*Math.random();
            this.X=window.innerWidth-100;
            this.obj.style.top=`${this.Y}px`;
        }

        // console.log(this.X);

        
    };

}


const elm1=new Object();
const elm2=new Object();
const elm3=new Object();

// console.log(elm1.X);
// console.log(elm1.X);



setInterval(() => {
    elm1.moving();
    elm2.moving();
    elm3.moving();
  
}, 10);
