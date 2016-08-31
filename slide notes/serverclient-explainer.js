
"HTTP is an asymmetric request-response client-server protocol as illustrated.  An HTTP client sends a request message to an HTTP server.  The server, in turn, returns a response message.  In other words, HTTP is a pull protocol, the client pulls information from the server (instead of server pushes information down to the client)."
https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html

## IMPORTANT THINGS TO NOTE ABOUT HTTP , vs websockets

- NOT DUPLEX
	-

- ASYMMETRIC, PULL PROTOCOL - client has to request info, server cant just send on its own
	- so Google cant send me emails to my computer on its own w HTTP, Id have to open GMAIL in my web browser first to get it
	- WEBSOCKETS allows server to push info

IMAGES:
https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html
https://en.wikipedia.org/wiki/Walkie-talkie
https://en.wikipedia.org/wiki/File:J38TelegraphKey.jpg
https://en.wikipedia.org/wiki/File:WatsonLloydGeorgeTelegram.jpg
https://en.wikipedia.org/wiki/Transatlantic_telegraph_cable

REFERENCE:
https://www.w3.org/standards/techs/http#w3c_all

https://en.wikipedia.org/wiki/Client%E2%80%93server_model
https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol

https://en.wikipedia.org/wiki/WebSocket
https://tools.ietf.org/html/rfc6455
https://www.w3.org/TR/2011/WD-websockets-20110929/
https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
http://www.websocket.org/


So WEBSOCKETS
	- can PUSH to the client without the client requesting anything
	- FULL DUPLEX connection,

	- NOTE: there is the websocket PROTOCOL and the API


## FULL DUPLEX CONNECTIONS

examples:
	- two-lane streets
	- telephone


	HALF DUPLEX EXAMPLES :
	- railroad tracks ... info can go both ways but only 1 at a time!
	- walkie talkie has push-to-talk
		- say "over" when done talking.. find a clip, Stranger Things?
	- sooorta works : telegram or snail mail conversations
	- // https://en.wikipedia.org/wiki/Simplex_communication#cite_ref-2


*** maybe dont talk about duplex vs half duplex... just point out
that websockets allows sending/receiving at the same time and HTTP
is designed to work one at a time more like snail mail or sending telegrams
