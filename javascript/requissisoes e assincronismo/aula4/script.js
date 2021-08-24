async function loadPost(){
    document.getElementById("posts").innerHTML = 'carregand0';


    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json();

    montarBlog(json);

    /*

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json();
        })

        .then(function(json){
            montarBlog(json)
         //   document.getElementById('posts').innerHTML = json.length+ 'posts';
        })

        .catch(function(error){
            console.log('ERROR');
        })
        */


    
}


function montarBlog(lista){
    let html = '';


    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>'
        html += lista[i].body+ '<br/>';
        html += '<hr/>';
    }

    document.getElementById("posts").innerHTML = html;
}