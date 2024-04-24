
function fetchData(callback) {
    setTimeout(()=> {
        callback("데이터")
    })
}

function printData(data) {
    console.log(data);
}

console.log("데이터 요청")

fetchData(printData);
