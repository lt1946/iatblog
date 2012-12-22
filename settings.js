if(process.env.VCAP_SERVICES){
    var env = JSON.parse(process.env.VCAP_SERVICES);
    console.log(JSON.stringify(env['mongodb-1.8']))
    console.log(env['mongodb-1.8'].length)
    var mongo = env['mongodb-1.8'][0]['credentials'];
}else{
    var mongo = {
        "hostname":"localhost",
        "port":27017,
        "username":"",
        "password":"",
        "name":"",
        "db":"iatblog"
    };
}
// var generate_mongo_url = function(obj){
    // obj.hostname = (obj.hostname || 'localhost');
    // obj.port = (obj.port || 27017);
    // obj.db = (obj.db || 'test');
    // if(obj.username && obj.password){
        // return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
    // }else{
        // return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
    // }
// }

exports.db = require('mongodb');
// exports.mongourl = generate_mongo_url(mongo);
module.exports = {
  cookieSecret: 'iatblogcookieSecret',
  db: mongo.db,
  host: mongo.hostname,
  port: mongo.port,
  password:mongo.password,
  username:mongo.username,
  name:mongo.name,
};
