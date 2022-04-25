function CurrencyPipe(value = 0, currency = 'COP') {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    })

    return formatter.format(value)
}

export default CurrencyPipe;