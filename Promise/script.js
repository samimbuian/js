// JS PROMISE

/*
const promiseOne = new Promise( function (resolve, reject){
    //Do an async task
    //Like - cryptography, DB-CALL, network
    setTimeout(function(){
        console.log("Async task One complete!");
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log("Async task one Resolved");
});
*//*
new Promise(function(resolve, reject){
    //Do an async task
    setTimeout(function(){
        console.log('Async task Two complete!');
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async task Two Resolved");
});
*/

/*
const promiseThree = new Promise( function(resolve, reject){
    //Do an async task
    setTimeout(function(){
        resolve({username: "Sanjida Yesmin", email: "example@gmail.com"});
    },1000);
});

promiseThree.then(function(user){
    console.log(user);
});
*/
/*
const promiseFour = new Promise(function(resolve, reject){
    //Do an async task
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Jone Doe", password: 123});
        } else{
            reject("ERROR: Something went wrong!");
        }
    },1000);
});

//  WRONG WAY
// const username = promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// });
// console.log(username);

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log('The promise is either resolved or rejected');
});
*//*
const promiseFive = new Promise(function(resolve, reject){
    //Do an async task
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({lang: "JavaScript", version: 1.0});
        }else{
            reject("ERROR: This is JavaScript error!");
        }
    },1000);
});

async function consumePromiseFive (){
   try {
    const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
};
consumePromiseFive();
*//* TRY & CATCH
async function getUserData (){
    try {
      const response =  await fetch('https://api.github.com/users/samimbuian');
      const data = await response.json();
      console.log(data);
    } catch (error) {
        console.log("ERROR: ",error);
    }
};
getUserData();
*/

fetch('https://api.github.com/users/samimbuian')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
});

// FETCH IN JS