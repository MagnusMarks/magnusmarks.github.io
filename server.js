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
require('./client/CRC.js');
require('./client/Cvar.js');
require('./client/Def.js');
require('./client/ED.js');
require('./server/Host.js');
require('./server/Mod.js');
require('./client/MSG.js');
require('./server/NET.js');
require('./server/NET_Datagram.js');
require('./server/NET_WEBS.js');
require('./client/PF.js');
require('./client/PR.js');
require('./client/Protocol.js');
require('./client/Q.js');
require('./server/SV.js');
require('./server/Sys.js');
require('./client/SZ.js');
require('./client/V.js');
require('./client/Vec.js');

Sys.main();