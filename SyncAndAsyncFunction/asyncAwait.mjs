

function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("데이터")
        },2000);
    })
}


async function main() {
    console.log("데이터 요청")
    const data = await fetchData();
    console.log(data);
}
main();