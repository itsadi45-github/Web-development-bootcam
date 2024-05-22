/* 
 settle means resolve or reject
 
 resolve means promise has settled successfully 
 reject means promise has not settled successfully
*/

/* 
async function getData() {
// simulate getting data from the server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world !")
        }, 3000);
    })
}
*/
// Fetch API 
async function getData() {
    // simulate getting data from the server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                       title: 'foo',
                       body: 'bar',
                       userId: 1,
                 }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
               },
           })

    let data = await x.json()
    // let data = await x.text()
    // console.log(data)
    return data
}
async function main() {

    console.log('loading modules');

    console.log('Do something else');

    console.log('load data');

    let data = await getData()

    console.log(data);
    console.log('Process data');

    console.log("task 2");
}
main()
/* 
// Example POST method implementation:
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {asy
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data);
  });
/*
/*
data.then((v) => {
    console.log(data);
    console.log('Process data');
    
    console.log("task 2");
    
   })
*/