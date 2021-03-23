window.addEventListener("load",()=>{
    const sounds = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const effect = document.querySelector(".visual");
    console.log(effect)
    const colors = [
        "#2ECC71",
        "#E74C3C",
        "#3498DB",
        "#F1C40F",
        "#5B2C6F",
        "#B2BABB"
    ];
    pads.forEach((pad,index)=>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles = (index) =>{
        const bubble = document.createElement("div");
        effect.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = "jump 1s ease";
        console.log(bubble);
        bubble.addEventListener("animationend",function(){
            effect.removeChild(this);
        });
    };
});