const URL = " https://cat-fact.herokuapp.com"

const factPara = document.querySelector("#fact");
const getFact = async ()=>{
    // console.log("getFact...")
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json()
    console.log(data[0].text)
    // factPara.innerText = data[1].text;
}
getFact()
// let promise = fetch(URL)
// console.log(promise)