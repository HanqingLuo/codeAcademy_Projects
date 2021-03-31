

<u>XHR Get Diagram:</u> 

![image-20210328190159433](C:\Users\kukum\AppData\Roaming\Typora\typora-user-images\image-20210328190159433.png)



<u>XHR POST Requests</u>

![image-20210328192325202](C:\Users\kukum\AppData\Roaming\Typora\typora-user-images\image-20210328192325202.png)

```js
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

xhr.onreadystatechange = () =>{
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('POST', url);
xhr.send(data)
```

<u>fetch() GET</u>

![image-20210328201456672](C:\Users\kukum\AppData\Roaming\Typora\typora-user-images\image-20210328201456672.png)

```js
fetch('https://api-to-call.com/endpoint').then(
    response => {
        if (response.ok) {
            return response.json();
        } throw new Error('Request failed!');
    },
    networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        return jsonResponse;
    })
```

fetch() POST

![image-20210328203106400](C:\Users\kukum\AppData\Roaming\Typora\typora-user-images\image-20210328203106400.png)

```js
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'}),
}).then(
  response =>{
    if(response.ok){
      return response.json();
    } throw new Error('Request failed!');
  }, networkError =>{
    console.log(networkError.message);
  }
).then(
  jsonResponse => {
    return jsonResponse;
  }
)
```



<u>**async GET Requests**</u>

- Using an `async` function that will return a promise.
- `await` can only be used in an `async` function. `await` allows a program to run while waiting for a promise to resolve.
- In a `try...catch` statement, code in the `try` block will be run and in the event of an exception/error, the code in the `catch` statement will run.

![image-20210328211235162](C:\Users\kukum\AppData\Roaming\Typora\typora-user-images\image-20210328211235162.png)

```js
const getData = async () => {
  try{
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok){
      const jsonResponse = await response.json()
      return jsonResponse
    } throw new Error('Request failed!')
  }catch(error){
    console.log(error)
  }
}
```



<u>*async POST Requests*</u>



![image-20210328212422731](C:\Users\kukum\AppData\Roaming\Typora\typora-user-images\image-20210328212422731.png)

```js
const getData = async () =>{
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200}),
    });
    if (response.ok){
      const jsonResponse = await response.json()
      return jsonResponse
    } throw new Error('Request failed!')
  } catch (error)  {
    console.log(error)
  }
}
```

