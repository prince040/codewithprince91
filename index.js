

let ul = document.getElementById("ul");
let btn = document.querySelectorAll(".topic-button");
 let loader = document.getElementById("loader");
 let logo = document.getElementById("logo");
let tricksBtn = document.querySelectorAll(".tricks-btn");

let ctrl = true;
    btn.forEach((buttons)=>{

       
buttons.addEventListener("click",(e)=>{
          let data = e.target.id;
          if(ctrl){
            collapse()
            ctrl = false;
          }
          loader.style.display = "grid";
       
    // console.log(data)

    document.getElementsByClassName('proBtn')[0].style.display = "flex";
    tricksBtn[0].id = data;
    tricksBtn[1].id = `${data}Tricks`;
    tricksBtn[2].id = `${data}Projects`;
     
    tricksBtn.forEach((trickBtn)=>{
        trickBtn.addEventListener("click",(a)=>{
           let tData = a.target.id;
        //   console.log(tData)
         ul.innerHTML = null;     

          fetchFun(`${tData}`)
        loader.style.display = "grid";

        })
    })
    
   

    // console.log(newData)
    
    fetchFun(`${data}`)

document.getElementById('subject').innerHTML = data + " Topics"
    // console.log(data + "ji")
   

    ul.innerHTML = null;     
  }) 
});




function fetchFun(data,e){
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

        },100)
}





  let bars = document.getElementsByClassName("fa-bars")[0];
  let sidebar = document.getElementsByClassName("alltopics")[0];
 

  function collapse(){
  
        sidebar.classList.toggle("collpse")
    
  }

  bars.onclick = ()=>{
    collapse()
    ctrl = false

    };
