const player = {id:101, name:"David Miller", Team:"DC"}
console.log("Player:",player);
const updatePlayer = {...player,Team:"Delhi Capitals"}; // using spread operator to change the Team name
console.log("Updated Player:",updatePlayer);