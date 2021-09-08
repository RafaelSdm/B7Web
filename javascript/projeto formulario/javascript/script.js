
let validator = {
    handleSubmit:(event) =>{
        event.preventDefault();


        let send = true;

        let inputs = form.querySelectorAll('input');


        validator.clearErrors();

        for(let i =0; i<inputs.length;i++){
            let input = inputs[i];
           // console.log(input);
            let check = validator.checkInput(input);

            if(check !== true){
                send = false;
                // exibir o erro
                console.log(check);
                validator.showError(input, check);
            }
        }


       

        if(send){
            form.submit();
        }

    },

    checkInput:(input) =>{

        let rules = input.getAttribute("data-rules");

        if(rules !== null){

            rules = rules.split('|');
            for(let k in rules){
                let rDetails =rules[k].split("=");
                
                switch(rDetails[0]){
                    case'required':
                        if(input.value == ''){
                            return "campo nao pode ser vazio";
                        }
                    break;

                    case 'min':

                    break;
                }
            }

        }

        return true;


    },

    showError:(input, error)=>{
        input.style.borderColor = 'red';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibline);
    },

    clearErrors:()=>{

        let inputs = form.querySelectorAll('input');

        for(let j =0; j<inputs.length;j++){
            inputs[j].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for(let i =0; i<errorElements.length;i++){
            errorElements[i].remove();
        }
    }

}


let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);