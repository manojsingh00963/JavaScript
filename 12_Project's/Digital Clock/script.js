const time = document.getElementById('clock')
// time.innerHTML = new Date();



setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    time.innerHTML = date.toLocaleTimeString();
},1000)