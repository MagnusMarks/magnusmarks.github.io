// noinspection JSValidateTypes
Node = {
	dgram: require('dgram'),
	fs: require('fs'),
	http: require('http'),
	os: require('os'),
	url: require('url'),
	websocket: require('websocket')
};

require('./server/Cmd.js');
require('./server/COM.js');
require('./server/Console.js');
require('./server/CRC.js');
require('./server/Cvar.js');
require('./server/Def.js');
require('./server/ED.js');
require('./server/Host.js');
require('./server/Mod.js');
require('./server/MSG.js');
require('./server/NET.js');
require('./server/NET_Datagram.js');
require('./server/NET_WEBS.js');
require('./server/PF.js');
require('./server/PR.js');
require('./server/Protocol.js');
require('./server/Q.js');
require('./server/SV.js');
require('./server/Sys.js');
require('./server/SZ.js');
require('./server/V.js');
require('./server/Vec.js');

Sys.main();