let dbVersion = 1;
let dbName = 'test';
let idb = window.indexedDB.open(dbName,dbVersion);

idb.onerror=(evt)=>{
    console.log('failed created indexDB');
}
idb.onupgradeneeded = function (evt) {
    let db = evt.target.result;
    let keypath = 'test-unique';
    let store = db.createObjectStore('customers',{keypath})
    store.createIndex("name", "name", { unique: false });
    store.createIndex("email", "email", { unique: true });


    let transaction = db.transaction(["customers"], "readwrite");
}

//删除idb

let delRequest  =  window.indexedDB.deleteDatabase(dbName);

delRequest.onerror = function (evt) {
    console.log('Error delelting database')
}
delRequest.onsuccess = function (evt) {
    console.log(`Delelted database successfully ${delRequest.result}`);
    console.log(delRequest.result);
}

console.log(delRequest.readyState) //pending
