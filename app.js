var weedClient = require("node-seaweedfs");
const fs = require('fs');
 
var seaweedfs = new weedClient({
   server:		"158.69.27.129",
   port:		9333
});
 
console.log("Sending file")
seaweedfs.write("./DummyFile.txt").then(function(fileInfo) {   
   console.log(fileInfo);
   seaweedfs.read(fileInfo.fid, fs.createWriteStream("dummyreturned.txt"));
}).catch(function(err) {
    console.log(err)
});