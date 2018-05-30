
const nodes = process.env.NODES;
const location = process.env.LOCATION;


const fs = require('fs');
const smallGraph = require(`${location}/${nodes}.json`);



let obj = new Map();
let arr = [];
let tmp = [];

let number = 0;
smallGraph.forEach((value)=> {
        // console.log(value[1]);
    if(number == 1){
        tmp.push([]);
    }
    if (value[0] === number) {
        let point = (value[1]);
        arr.push(point);
        }
    else {
        obj.set(number,arr);
        tmp.push(arr);
        arr=[];
        let point = (value[1]);
        arr.push(point);
        number++;
    }
});
obj.set(number,arr);
tmp.push(arr);
//console.log(tmp);

fs.writeFile(`${location}/${nodes}N.json`, JSON.stringify(tmp), 'utf8', (err)=> {
    if (err) throw err;
    console.log('complete');
});
