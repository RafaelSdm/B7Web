const c = (el) =>{
    return document.querySelector(el);
}

const cs = (el) =>{
    return document.querySelectorAll(el);
}

pizzaJson.map((item, index) =>{

    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    // preencher as informacoes

    c('.pizza-area').append(pizzaItem);

})