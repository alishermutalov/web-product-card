let tg = window.Telegram.WebApp;
let tg_user = window.Telegram.WebApp

let order = document.getElementById("order");
tg.expand();

let product_name = document.getElementById('product_name').textContent;

function buy(){
    let data = {
        product_name : product_name,
        price : 997000
    }
    console.log()
    tg.sendData(JSON.stringify(data));
    tg.sendData(JSON.stringify({query_id : tg.query_id}))
    tg.close();
}

