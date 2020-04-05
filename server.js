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
require('./shared/CRC.js');
require('./shared/Cvar.js');
require('./shared/Def.js');
require('./shared/ED.js');
require('./server/Host.js');
require('./server/Mod.js');
require('./shared/MSG.js');
require('./server/NET.js');
require('./server/NET_Datagram.js');
require('./server/NET_WEBS.js');
require('./shared/PF.js');
require('./shared/PR.js');
require('./shared/Protocol.js');
require('./shared/Q.js');
require('./server/SV.js');
require('./server/Sys.js');
require('./shared/SZ.js');
require('./shared/V.js');
require('./shared/Vec.js');

Sys.main();