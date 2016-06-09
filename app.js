var mongo = require('mongodb').MongoClient;

var mongodbUri = "mongodb://127.0.0.1/chat";

mongo.connect (mongodbUri, function (err, db) {

  db.collection('messages', function(err, collection) {
    // open a tailable cursor
    console.log("== open tailable cursor");
    collection.find({}).addCursorFlag('tailable', true)
						.addCursorFlag('awaitData', true)
                      .sort({ $natural: 1 })
                      .each(function(err, doc) {
      console.log(doc);
    })
  });

});