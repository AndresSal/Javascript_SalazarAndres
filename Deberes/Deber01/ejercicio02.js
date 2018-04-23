function medidaTotalDeMegaWatts() {
    var cantidadTotalMW = 0;
    var cantidadMWGeneradorPrincipal = 62;
    var cantidadMWGeneradorSecundario = 124;
    var contadorPrincipal = 1;
    var contadorSecundario = 0;
    while (contadorPrincipal <= 4) {
        cantidadTotalMW = cantidadTotalMW + cantidadMWGeneradorPrincipal;
        console.log('Generador ', contadorPrincipal, ' está prendido, añadiendo ', cantidadMWGeneradorPrincipal, 'MW para un total de ', cantidadTotalMW);
        contadorPrincipal++;
    }
}
medidaTotalDeMegaWatts();
