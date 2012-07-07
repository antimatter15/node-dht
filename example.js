var DHT = require('./lib/dht');
var dht = new DHT.DHT(51414);
var dns = require('dns');

// DHT.debug = true;

// for bootstrapping you need to know a node which already is in the dht
dht.start();
dns.resolve4('router.bittorrent.com', function (err, addresses) {
	dht.bootstrap([ { 'address': addresses[0], 'port': 6881 } ], function(){
		var id = DHT.util.hex2buf("640FE84C613C17F663551D218689A64E8AEBEABE");
		console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
		console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
		console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
		console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
		console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
		console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
		dht.lookup(id, function (peers, finished) {
			console.log("Found more peers: %j", peers);
			if (finished) console.log("Lookup done");
			console.log('-----------------------------------------------------')
			console.log('-----------------------------------------------------')
			console.log('-----------------------------------------------------')
			console.log('-----------------------------------------------------')
			console.log('-----------------------------------------------------')
			console.log('-----------------------------------------------------')
		});
	});
})

