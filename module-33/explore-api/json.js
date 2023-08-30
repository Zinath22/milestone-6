const user ={id: 1, name: 'Gorib Aamir', job: 'actor'};
// javascript object notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user); 
// { id: 1, name: 'Gorib Aamir', job: 'actor' } output
// console.log(stringified)
// {"id":1,"name":"Gorib Aamir","job":"actor"} output


const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
    }

    console.log(shop);
    const shopJSON =JSON.stringify(shop)
    console.log(shopJSON)
    const shopObj = JSON.parse(shopJSON);
    console.log(shopObj)