

const random_color=function(){
const hex='0123456789ABCDEF'

let color='#'
for(let i=0;i<6;i++){
    console.log('loop:',i)
    const randomIndex = parseInt(Math.random() * 16)
    console.log('random',randomIndex)
    const randomHexChar = hex[randomIndex];
    console.log(randomHexChar)
   color+=randomHexChar
}
return color
}
console.log(random_color())






const body_bg=document.querySelector('body')
const start=document.getElementById('btn1')
const stop=document.getElementById('btn2')



// let color_r=0
// let color_g=0
// let color_b=0
start.addEventListener('click',function(e){
   const set_interval=setInterval(function(){
    //   color_r+=30;
    //   color_g+=25;
    //   color_b+=10;
      body_bg.style.backgroundColor=random_color()
    //   if(color_r>255){
    //     color_r=0;
    //     color_r+=80;
    //     body_bg.style.backgroundColor=`rgb(${color_r},${color_g}, ${color_b})`
    //   }
    //   if(color_b>255){
    //     color_b=0;
    //     color_b+=40;
    //     body_bg.style.backgroundColor=`rgb(${color_r},${color_g}, ${color_b})`
    //   }
    //   if(color_g>255){
    //     color_g=0;
    //     color_g+=35;
    //     body_bg.style.backgroundColor=`rgb(${color_r},${color_g}, ${color_b})`
    //   }
    //   console.log(`started:${color_r}'\'`)
    },1000)
    stop.addEventListener('click',function(e){
      clearInterval(set_interval)
    })
})