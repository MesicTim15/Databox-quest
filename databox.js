var Databox = require("databox");
var Util    = require("util");

exports.load = function(payload) {
  var client = new Databox({
    push_token: process.env.4kg9y1178jgg8osook4404gcw80co4ws
  });
  var insertAllAsync = Util.promisify(client.insertAll).bind(client);

  return insertAllAsync(payload);
}
