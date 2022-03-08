AFRAME .registerComponent('game-play',{
    schema:{
        elementId: { type: "string", default: "#coin1" }, 
    },
        
    isCollided:function(elementId){
        const element= document.querySelector(elementId);
        element.addEventListener("collide",e=>{
            if(elementId.includes("#coin")){
                elementId.setAttribute("visible",false);
                console.log("Detected collision with coin");
            }
            else if(elementId.includes("#fish")){
                console.log("Detected collision with fish");
            }
        });
    }
    
});