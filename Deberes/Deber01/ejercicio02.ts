function medidaTotalDeMegaWatts() {
    let cantidadTotalMW = 0;
    let cantidadMWGeneradorPrincipal = 62;
    let cantidadMWGeneradorSecundario = 124;
    let contadorPrincipal = 1;
    let contadorSecundario;

    while (contadorPrincipal <= 4) {
        cantidadTotalMW = cantidadTotalMW + cantidadMWGeneradorPrincipal;
        console.log('Generador Principal', contadorPrincipal, ' está prendido, añadiendo ', cantidadMWGeneradorPrincipal, 'MW para un total de ', cantidadTotalMW, ' MW');
        for (contadorSecundario = 1; contadorSecundario <= 15; contadorSecundario++) {
            cantidadTotalMW = cantidadTotalMW + cantidadMWGeneradorSecundario;
            console.log('Generador Secundario ', contadorSecundario, ' está prendido, añadiendo ', cantidadMWGeneradorSecundario, 'MW para un total de ', cantidadTotalMW, ' MW');
        }
        contadorPrincipal++;
    }
    console.log('La cantidad total de MW generada fue de: ', cantidadTotalMW);
}

function medidaDeMegaWattsSoloPares() {
    let cantidadTotalMW = 0;
    let cantidadMWGeneradorPrincipal = 62;
    let cantidadMWGeneradorSecundario = 124;
    let contadorPrincipal = 1;
    let contadorSecundario;

    while (contadorPrincipal <= 4) {
        if (contadorPrincipal % 2 == 0) {
            cantidadTotalMW = cantidadTotalMW + cantidadMWGeneradorPrincipal;
            console.log('Generador Principal', contadorPrincipal, ' está prendido, añadiendo ', cantidadMWGeneradorPrincipal, 'MW para un total de ', cantidadTotalMW, ' MW');
            for (contadorSecundario = 1; contadorSecundario <= 15; contadorSecundario++) {
                if (contadorSecundario % 2 == 0) {
                    cantidadTotalMW = cantidadTotalMW + cantidadMWGeneradorSecundario;
                    console.log('Generador Secundario ', contadorSecundario, ' está prendido, añadiendo ', cantidadMWGeneradorSecundario, 'MW para un total de ', cantidadTotalMW, ' MW');
                } else {
                    console.log('Generador Secundario ', contadorSecundario, " esta apagado");
                }
            }
            contadorPrincipal++;
        } else {
            console.log('Generador Principal ', contadorPrincipal, " esta apagado");
            contadorPrincipal++;
        }
    }
    console.log('La cantidad total de MW generada fue de: ', cantidadTotalMW);
}

function medidaDeMegaWattsSoloImpares() {
    let cantidadTotalMW = 0;
    let cantidadMWGeneradorPrincipal = 62;
    let cantidadMWGeneradorSecundario = 124;
    let contadorPrincipal = 1;
    let contadorSecundario;

    while (contadorPrincipal <= 4) {
        if (contadorPrincipal % 2 != 0) {
            cantidadTotalMW = cantidadTotalMW + cantidadMWGeneradorPrincipal;
            console.log('Generador Principal', contadorPrincipal, ' está prendido, añadiendo ', cantidadMWGeneradorPrincipal, 'MW para un total de ', cantidadTotalMW, ' MW');
            for (contadorSecundario = 1; contadorSecundario <= 15; contadorSecundario++) {
                if (contadorSecundario % 2 != 0) {
                    cantidadTotalMW = cantidadTotalMW + cantidadMWGeneradorSecundario;
                    console.log('Generador Secundario ', contadorSecundario, ' está prendido, añadiendo ', cantidadMWGeneradorSecundario, 'MW para un total de ', cantidadTotalMW, ' MW');
                } else {
                    console.log('Generador Secundario ', contadorSecundario, " esta apagado");
                }
            }
            contadorPrincipal++;
        } else {
            console.log('Generador Principal ', contadorPrincipal, " esta apagado");
            contadorPrincipal++;
        }
    }
    console.log('La cantidad total de MW generada fue de: ', cantidadTotalMW);
}

medidaDeMegaWattsSoloImpares()

//medidaDeMegaWattsSoloPares()

//medidaTotalDeMegaWatts()

