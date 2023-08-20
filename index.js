

let ul = document.getElementById("ul");
let btn = document.querySelectorAll(".topic-button");
 let loader = document.getElementById("loader");
 let logo = document.getElementById("logo");


let ctrl = true;
    btn.forEach((buttons)=>{

       
buttons.addEventListener("click",(e)=>{
          let data = e.target.id;
          if(ctrl){
            collapse()
            ctrl = false;
          }
          loader.style.display = "grid";
       


         
    
setTimeout(()=>{

    fetch(`${data}/${data}.json`).then((res)=>{

        return res.json()
    }).then((result)=>{
        loader.style.display = "none";
       

        for(let i =0; i<result.length; i++){
            let list = document.createElement("li");
            list.className = "lists";
            ul.appendChild(list);      
        }
        let li = document.querySelectorAll(".lists");   
      
            li.forEach((test,index)=>{
               test.innerHTML = result[index].name; 
               
               
               test.addEventListener("click",(e)=>{
                console.log(e.target.innerHTML);

                let synName = e.target.innerHTML;
                document.getElementById("topic_name").innerHTML = synName;

                fetch(`${data}/${synName}.txt`).then((res)=>{
                    return res.text();
                   }).then((result2)=>{
                    document.getElementById("display_syn").innerHTML = result2;
                    
                   })

               
            collapse()
                   
                   ctrl = true


               })
            });
    });
    // console.clear()
    document.getElementById("subject").innerHTML = e.target.innerHTML + " Topics"
    },100)
    ul.innerHTML = null;     
  }) });

  let bars = document.getElementsByClassName("fa-bars")[0];
  let sidebar = document.getElementsByClassName("alltopics")[0];
 

  function collapse(){
  
        sidebar.classList.toggle("collpse")
    
  }

  bars.onclick = ()=>{
    collapse()
    ctrl = false

    };

    let date = new Date();


    let userdata = date.getDay();

    switch(userdata){
        case 0: console.log("Sunday"); break;
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        default: console.log("nodata") ;
    }




