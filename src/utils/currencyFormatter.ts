// export const currencyFormatter = (amount: number) => {
//     const formatter = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'PHP',
//         maximumFractionDigits: 0,
//     });

//     return formatter.format(amount);
// };

// const currencyFormatter = (amount: number) => {
//     return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
//   };