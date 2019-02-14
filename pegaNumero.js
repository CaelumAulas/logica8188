function pegaNumero(texto) {
    return Number(
        prompt(texto)
            .replace(",", ".")
            .replace("o",0)
            .replace("O", 0)
    )
}
