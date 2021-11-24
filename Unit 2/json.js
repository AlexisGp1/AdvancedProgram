const device = {
    sensonModel: "HC0",
    count: 0,
    date: new Date(),
};


console.log(device.date.getFullYear(), typeof device);

const deviceJSON = JSON.strinify(device);
console.log(deviceJSON, typeof deviceJSON);
// Crear un JSON desde code//

const myJson = '{"name":"Alexis","edad": 21, "friends": ["Rafa", "Angelo"], isMannager: fakse}';
console.log(myJson, typeof myJson);

const myObj = JSON.parse(myJson);
console.log(myObj.name);