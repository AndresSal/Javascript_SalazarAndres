function aumentarPoblacionOsos(mesEspecifico){
    let poblacion=1;
    for(let mes=1;mes<=mesEspecifico;mes++){
        poblacion=poblacion*4;
        console.log('Para el mes ',mes,' se prevee que existan ',poblacion, ' osos');
    }
}

aumentarPoblacionOsos(10);