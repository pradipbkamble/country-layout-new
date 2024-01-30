const cl=console.log;


const inputdata=document.getElementById("inputdata");
const countryname=document.getElementById("countryname");
const upskey=document.getElementById("upkey");
const capital=document.getElementById("capital");
const upkey=document.getElementById("upkey");
const population=document.getElementById("population");
const cardform=document.getElementById("cardform");


let templating=(data)=>{

    result="";
    data.forEach((ele)=>{
                result+=`
                <div class="col-md-2 mt-4">
                <div class="card  h-100 ">
                        <div class="card-header  h-100">
                            <figure>
                                <img class="countryflag w-100 h-80" src="${ele.flag}" alt="imgcountry">
                            <FIgcaption>
                                <h6 class="text-center text-warning my-2 ">${ele.name}</h6>
                                <p class="para"><span class="font-weight-bold ml-2">capital:</span>${ele.capital || ele.name}</p>
                                    <p class="para"><span class="font-weight-bold ml-2">language:</span>${ele.languages}</p>
                                    <p class="para"><span class="font-weight-bold ml-2">population:</span>${ele.population}</p>

                            </FIgcaption>
                            </figure>
                        </div>
                        </div>
                    </div> 
                    `
    })
    cardform.innerHTML=result;
  }
templating(countries)

let onclickfilter =(arr)=>{
    let keywodinput=arr.value.toLowerCase();
    cl(keywodinput);
    let filterdarray=countries.filter((item)=>{
        if(item.name.toLowerCase().includes(keywodinput)||item.capital?.toLowerCase().includes(keywodinput)||item.languages?.includes(keywodinput)){
            return true
        }
        else{
            return false
        }

        
    })
    templating(filterdarray);
}
    
const onclickname=()=>{
  let shortname=[...countries].sort((n1,n2)=>{
    if(n1.name < n2.name){
      return -1
    }
    else{
      return 1
    }
  })
  templating(shortname);
}

 let onclickcapital=()=>{
    let shortcapital=[...countries].sort((n1,n2)=>{  //spread operator use for shallow copy  boundries removes clone of array
        if(n1.capital < n2.capital){
          return -1
        }
        else{
          return 1
        }
      })
      templating(shortcapital);
}
let onclickpopulation=()=>{
    let shortpopulation=[...countries].sort((n1,n2)=>{
        if(n1.population < n2.population){
          return -1
        }
        else{
          return 1
        }
      })
      templating(shortpopulation);
}
    
    

let sum=(...num)=>{
return num.reduce(( accu,curentval)=>{
if(('add')){
    accu += curentval;
    return accu
}
else if('div'){
    accu -= curentval;
    return accu
}
},0)
}


cl(sum( 'div',2,4))

    
let calc=(calculate,...numb)=>{

}









