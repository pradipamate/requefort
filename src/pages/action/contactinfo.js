
export function Contactformdata(bodyFormData){
    console.log("post data",bodyFormData);
    return dispatch => {
        // console.log(data);
        // dispatch(dataAdding("Adding"));
    //     return fetch('http://192.168.43.71/Society/api/contactinfo',{
    //         method:'post',
    //         body:data,
    //        // body:JSON.stringify({
    //        //     name: 'pradip',
    //        //     email: 'pradp@ha.com',
    //        //   })
    //      })
    //    .then(result=>result.json())
    //    .then((data)=>{
    //        console.log("Added",data);
    //    })

     //for axios method
     const axios = require('axios');
     axios('http://192.168.43.71/Society/api/contactinfo',{
                    // name: 'Fred',
                    // email: '23',
                    method: 'post', 
                    data:bodyFormData, 
                //   data:{ name: 'pradip', email: 'pradp@ha.com'},
                  headers:{'Content-Type': 'x-www-form-urlencoded'
                }
            })
        .then(function(response) {
            console.log(response);
            return response.json()
            })
       }
}

export function fetchstudent(){   
    return dispatch=>{
        console.log("fetchng");
        dispatch(datafetchstart());
        // return fetch("http://192.168.43.71/Society/api/showallrecord")
        return fetch("https://fakerestapi.azurewebsites.net/api/Books")
        .then(result=>result.json())
        .then((result)=>{
           console.log("Allfakedata", result)
           dispatch(datafetchsuccessfully(result))
        })
    }
}
export const datafetchstart=()=>({
    type:"Data_fetch_start",
 })

export const datafetchsuccessfully=(data)=>({
   type:"Data_fetch",
   payload:data
})