function fazerRequisicao(url: string, method: 'GET' | 'POST'){

}


//type method = 'GET' | 'POST'

type request ={
    url: string,
    method: 'GET' | 'POST'
}

let req: request = {
    url: "https://google.com.br",
    method: 'GET'
};

fazerRequisicao(req.url, req.method)