// Implement similar functions to call, apply and bind


function greet(xyz){
    console.log(`${this.animal} "sleep" ${this.duration}  ${xyz} `)
}


const obj = {
    animal: "cat",
    duration: "10 hours"
};


 // apply()



 Function.prototype.myApply = function(obj , arg){

    obj.fun = this;
    const output =obj.fun(...arg);
    delete obj.fun;
    return output;
 };

 greet.myApply(obj, "shbjfsu");

 //call()

 Function.prototype.mycall = function(obj , ...arg){

    obj.fun = this;
    const output =obj.fun(...arg);
    delete obj.fun;
    return output;
 };

 greet.mycall(obj, "shbjfsu");
 //bind()

 Function.prototype.myBind = function(obj, ...arg){

    const fun = this;
    return  function(){
        fun.call(obj, ...arg)
    }
 }

let sayhi = greet.myBind(obj, "shbjfsu");

sayhi();





