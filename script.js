let getBtn = document.querySelector('#get');

function getAll(){
    fetch('https://northwind.vercel.app/api/suppliers')
    .then(res => res.json())
    .then( data => console.log(data))
}


getBtn.addEventListener('click', getAll)

let form = document.querySelector('#myF');

let comNameInp = document.querySelector('#comName');
let nameInp = document.querySelector('#name');
let titleInp = document.querySelector('#title');
let btnTest = document.querySelector('#test');

comNameInp.addEventListener('input',(e)=>{
    if (e.target.value == "ceyhun") {
        btnTest.innerText = 'TESTTTTT'
    }else{
        btnTest.innerText = "Send"
    }
   
})

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     console.log(!comNameInp.value);
//     console.log(!nameInp.value);
//     console.log(!titleInp.value);

//     if (comNameInp.value.trim() && nameInp.value.trim() && titleInp.value.trim()) {
//         let obj = {
//             companyName : comNameInp.value,
//             contactName : nameInp.value,
//             contactTitle : titleInp.value
    
//         }
    
//         axios.post('https://northwind.vercel.app/api/suppliers', obj).then(res=> console.log(res.data))
//     }else{
//         alert("Xanalar boshdur")
//     }
  

// })