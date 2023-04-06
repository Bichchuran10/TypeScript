let num1Element=document.getElementById('num1') as HTMLInputElement //typecasting
let num2Element=document.getElementById('num2') as HTMLInputElement
let buttonElement=document.querySelector('button')! //in strict mode, TypeScript shows buttonElement might be null as it doesn't checks html code
                                                    // that statement could be null theoritically put ! to say that it's not null in our words
const numResults: Array<number>=[]
const textResults: string[] =[]

type NumorString=number | string; //typeScript feature won't display in javascript file

interface ResultObj{ //typeScript feature

    val:number;
    timestamp:Date;

}

buttonElement.addEventListener('click',()=>{
    let num1=num1Element.value 
    let num2=num2Element.value

    const result=add(+num1,+num2)   //as num1,num2 returns a string so we have to convert it to number
    numResults.push(result as number)
    const stringResult=add(num1,num2)
    textResults.push(stringResult as string)
     console.log(numResults)
    console.log(textResults)
    printResult({val: result as number,timestamp: new Date()})

})



function add(num1:NumorString,num2:NumorString) //set type as number //union types number|string
{
    if(typeof num1==='number' && typeof num2==='number')
    {
    return num1+num2
    }
    else if(typeof num1==='string' && typeof num2==='string')
    {
        return num1+' '+num2 
    }
    return +num1+ +num2 //converting it to number
}
function printResult(resultObj:ResultObj){
    console.log(resultObj.val)
}

const myPromise=new Promise<string>((resolve,reject)=>{   //*generic* promise will resolve to string 
    setTimeout(()=>{
        resolve('It worked')

    },2000)
})
myPromise.then((result)=>{
    console.log(result.split('w'))
})
//console.log(add(1,6))

//console.log(add("10","5")) //it will throw an error in the compile time 
//that is why we use typeScript , to write bug free code and to avoid runtime error