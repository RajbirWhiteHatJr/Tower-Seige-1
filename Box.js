// class Box{

//     constructor(x, y, width, height){
       
//         var options = {
//             'restitution':0.8,
//             'friction':1.0,
//             'density':1.0
//         }

//         this.body = Bodies.rectangle(x, y, width, height, options);
//         this.width = width;
//         this.height = height;
//         World.add(world, this.body);
//     }

// display(){

//     push();
//     translate(this.body.position.x, this.body.position.y);
//     imageMode(CENTER);
//     image(this.image, 0, 0, this.width, this.height);
//     pop();
    


// }


// }



class Box {
    constructor(x, y, width, height) {
      var options = {
          //isStatic:true
          'restitution':0.8,
         'friction':1.0,
          'density':1.0
     }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = random(0,255),random(0,255),random(0,255);
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      
      fill(rgb(this.color));
      rect(pos.x, pos.y, this.width, this.height);
    
    }
  };
  

