// let time = 10 
// undefined
// setInterval ( function(){
//     if(time >= 0){
//     console.log(time)
//     time = time - 1
//     }
// },1000);
// setInterval 은 타임 간격만큼 반봅하는 내장함수  ex) 1000 1초마다 반복 


let time = 180
setInterval(function(){

    if(time >= 0 ){
        let min = Math.floor( time / 60 )
        let sec = String(time % 60).padStart(2,"0") // padStart나머지가 2자리가 아닐경우에 앞에 9을 넣어줌 
        console.log( min + ":" + sec)
        time = time-1
    }

    
},1000);

