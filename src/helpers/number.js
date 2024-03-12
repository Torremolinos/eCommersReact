export const formatPrice = (amount) => {
    return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
        currencyDisplay: "narrowSymbol",
        minimumFractionDigits: 2,
    }).format(amount / 100);
};

export const formatRating = (amount) => {
    return Number(amount).toFixed(1);
}