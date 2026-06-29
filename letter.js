const lines = document.querySelectorAll(".line");

lines.forEach((line,index)=>{

    setTimeout(()=>{

        line.classList.add("show");

    },index*1800);

});