export const currencyFormatter = (amount: number) => {

    return amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

};

