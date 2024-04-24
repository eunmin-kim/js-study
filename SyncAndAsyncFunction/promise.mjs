
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("데이터")
        },2000)
    })
}

console.log("데이터 요청")
fetchData().then((data) => console.log(data));