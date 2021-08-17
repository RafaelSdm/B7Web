let dia = 30;
let dianome =  '';

switch(dia){

    case 1:
        dianome = 'segunda'
        break;
    
    case 2:
        dianome = 'terca';
        break;
    
    
    case 3:
        dianome = 'quarta';
        break;
    
    case 4:
        dianome = 'quinta';
        break;
    case 5:
        dianome = 'sexta';
        break;
    case 6:
        dianome = 'sabado';
        break;
    case 7:
        dianome = 'domingo';
        break;

    default:
        dianome = 'error';
        break;
    
    

    
}


document.getElementById('dia').innerHTML = dianome;