export const currencyFormatter = (amount) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 0,
    });

    return formatter.format(amount);
};

