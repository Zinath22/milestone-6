const numbers = [1, 5, 6, 4, 15];
const player = [75, 65, 67, 72, 95, 55, 60];
// const selected = player.filter(p => p > 70);
// const selected = player.filter(p => p > 90);
const selected = player.filter(p => p % 2 === 1);
// console.log(selected)

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const oldFriend = friends.filter(friend => friend.length > 4 )
console.log(oldFriend)