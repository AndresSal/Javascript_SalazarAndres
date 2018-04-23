function aumentarPoblacionOsos(mesEspecifico){
    let poblacion=1, poblacionMaxima=10000;
    for(let mes=1;mes<=mesEspecifico;mes++){
        poblacion=poblacion*4;
        if(poblacion<=poblacionMaxima){
            console.log('Para el mes ',mes,' se prevee que existan ',poblacion, ' osos');
        }else{
            console.log('Para el mes ',mes,' la poblacion se excedera con ',poblacion-poblacionMaxima, ' osos');
            console.log('Removiendo ',poblacion/2,' osos de la poblacion');
            let nuevaPoblacion=poblacion/2;
            poblacion = nuevaPoblacion;
            console.log('Después del mes ',mes, 'la nueva poblacion de osos sera de ',poblacion)
        }
    }
}

aumentarPoblacionOsos(10);