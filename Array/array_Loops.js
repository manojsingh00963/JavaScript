// ===============Loop in Array==============

const array = ['Python','JavaScript','C','C++','Java','HTML','CSS'];
console.log(array)

array.forEach((value,Index,array)=>{
    console.log(Index,value,array)//
})

//==========================================================//


let CPU_parts = ['ALU','CU','IP','Resister','Micro-Processor'];

for (let i = 0; i < CPU_parts.length; i++) {
    const element = CPU_parts[i];
    // console.log(element)
    
}

// CPU_parts.forEach((e)=>{
//     console.log(e);
// })


for (const element of CPU_parts) {
    
    // console.log(element)
}


for (const key in CPU_parts) {
    if (Object.prototype.hasOwnProperty.call(CPU_parts, key)) {
        const element = CPU_parts[key];
        // console.log(element)
        // console.log(key,element)
    }
}

for (const key in CPU_parts) {
    // console.log(CPU_parts);
    // console.log(`Index:${key} of ${CPU_parts}, `);
}


const games = ['pubg','bgmi','freefire','COD','COC'];

for (const key in games) {
    if (Object.prototype.hasOwnProperty.call(games, key)) {
        const element = games[key];
        // console.log(element)
    }
}


// ----------------------------------------------------------------//

const Users = ["user1",'user2','user3','user4','user5']

for (const user of Users) {
    // console.log(user)
    
}


const games2 = ['pubg','bgmi','freefire','COD','COC'];
for(const gm of games2){
    // console.log(gm)
    // console.log(gm);
}

games2.forEach(function(e){
    // console.log(e);
    
});

for (const key in games2) {
    if (Object.prototype.hasOwnProperty.call(games2, key)) {
        const element = games2[key];
        // console.log(key)
        // console.log(element)
        console.log('No-'+key+" Game is:"+element+',');
    }
}


let rohan = ['r','o','h','a','n']

rohan.forEach((Index,e)=>{
    // console.log(e);
    console.log(e,Index)
});