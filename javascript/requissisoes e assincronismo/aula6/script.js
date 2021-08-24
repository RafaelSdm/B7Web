async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'testando');
    body.append('arquivo', arquivo);

    console.log(arquivo);

    let req = await fetch('#', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}