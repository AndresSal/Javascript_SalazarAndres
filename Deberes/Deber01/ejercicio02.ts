function medidaTotalDeMegaWatts() {
    let cantidadTotalMW = 0;
    let cantidadMWGeneradorPrincipal = 62;
    let cantidadMWGeneradorSecundario = 124;
    let contadorPrincipal = 1;
    let contadorSecundario = 0;

    while (contadorPrincipal <= 4) {
        cantidadTotalMW = cantidadTotalMW + cantidadMWGeneradorPrincipal;
        console.log('Generador ', contadorPrincipal, ' está prendido, añadiendo ', cantidadMWGeneradorPrincipal, 'MW para un total de ', cantidadTotalMW);
        contadorPrincipal++;
    }
}

medidaTotalDeMegaWatts()