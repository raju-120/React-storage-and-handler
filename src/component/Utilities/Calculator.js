
/* const numbers =[20,22,24,26,28];
const sumReducer = (previous, current)=> previous + current;
const total= numbers.reduce( sumReducer,0); */

/* const items = [
    {id:1, name: 'Alta', price:100},
    {id:2, name: 'Alta', price:200},
    {id:3, name: 'Alta', price:300},
]

const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer,0);
 */

const getTotalPrice = products =>{
    const reducer = (previous, current) => previous+ current.price;
    const total = products.reduce(reducer,0);
    return total; 
}

export {getTotalPrice as getTotal};
