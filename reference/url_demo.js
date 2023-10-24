const url=require('url');

const myUrl=new URL('http://mywebsite.com/hello.html?id=100&status=active')


//Serialized url
console.log(myUrl.href);

console.log(myUrl.toString());

//Host(root domain)

console.log(myUrl.host)

//host name(doesnt get port)

console.log(myUrl.hostname)

//pathname
console.log(myUrl.pathname)

//serialized query

console.log(myUrl.search)

console.log(myUrl.searchParams)

//Add params
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams)

//Loop through params

myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));