let tg = window.Telegram.WebApp;
let order = document.getElementById("order");
tg.expand();

let product_name = document.getElementById('product_name');

function buy(){
    let data = {
        product_name : product_name,
        price : 997000
    }

    tg.sendData(JSON.stringify(data));

    tg.close();
}

