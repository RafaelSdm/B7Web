async function inserir(){
    document.getElementById("posts").innerHTML = 'carrregando....';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'tittulo de teste',
            body: 'corpo de teste',
            userID: 4
        }),
        headers:{
            'Content-Type': 'applicaton/json'
        }
    });

    let json = await req.json();

    console.log(json);
        

}