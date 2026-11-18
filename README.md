# dig-web
dig + delv + WHOIS web console - simple but powerful web console for the BIND’s Domain Information Groper (dig) Tool - the powerful lookup tool for the DNS from ISC

Beside dig, it offers the delv DNSSEC analyzer / validator too.

(dig-web bases on flask and a fork of avasylev/dig-net - thx to avasylev)

dig-web is coded in Python3 as Flask project. 
For user security reasons, all elements are bundled with the code.

## demo
check out out demo at https://dig.sysip.de

thx to <a href="https://www.syndicat.com">SYNDICAT IT & Internet</a> for <a href="https://www.syndicat.com">hosting</a>

## usage

for (default) dig mode

`dig egov.eu <more options>`

or for "delv mode" 

`dig delv egov.eu <more options>`

or for "whois mode" 

`dig whois <more options> egov.eu`

## screenshot
```
---------------------------------------

      dP oo          
      88             
 d888b88 dP .d8888b. 
88    88 88 88    88 
88.  .88 88 88.  .88 
 88888P8 dP  8888P88 
                 .88 
             d8888P -WEB 
by Niels Dettenbach <nd@syndicat.com>
---------------------------------------
web interface for the "dig" DNS tool
 - write "-h" for detailed dig options 
 - write "delv ..." for delv (DNSSEC)
 - write "delv -h" for delv help
 - write "whois ..." to call WHOIS
 - write "whois -h" for WHOIS help
---------------------------------------
        
        
> dig egov.eu
; <<>> DiG 9.18.49-1~deb12u1-Debian <<>> egov.eu
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 57070
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 4, ADDITIONAL: 1
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 8a487c43c76dd93c010000006afda83974bf046ceebaf25a (good)
;; QUESTION SECTION:
;egov.eu.           IN  A
;; ANSWER SECTION:
egov.eu.        0   IN  A   62.146.88.146
;; AUTHORITY SECTION:
egov.eu.        0   IN  NS  ns4.syndicat.co.za.
egov.eu.        0   IN  NS  ns1.syndicat.com.
egov.eu.        0   IN  NS  ns2.syndicat.com.
egov.eu.        0   IN  NS  ns3.syndicat.com.
;; Query time: 6 msec
;; SERVER: 127.0.0.1#53(127.0.0.1) (UDP)
;; WHEN: Wed Nov 18 14:29:29 CET 2026
;; MSG SIZE  rcvd: 178
> dig 


```
## installation
Copy the full source tree - then run the installer to establish the flask web application including its own micro webserver.
```
cd /var/www/dig-web/
chmod 755 install.sh
./install.sh
```
### as WSGI behind NGINX
To run dig-web as WSGI per systemd, use / load the provided systemd file into your systemd.

On your nginx, a minimum config looks like:
```
server {
        server_name dig.sysip.de;
        root /var/www/dig-web;
        location / { try_files $uri @dig_web; }
        location @dig_web {
                include uwsgi_params;
                uwsgi_pass unix:/tmp/dig-web.sock;
        }
}
```
but you should add SSL for proper work with any browser.

### run your own BIND
We recommend to run your own local instance of BIND with the provided configuration (named.conf) to avoid unwanted caching effects or potential manipulations on your resolution path. 

use /etc/resolv.conf
```
nameserver 127.0.0.1
nameserver ::1
```

## changes
- 1.2
 * added a optimized recursively resolving BIND config
 * added demo in README

- 1.1
 * added whois support
 
- 1.0
 * added "delv mode" - support for delv DNSSEC check tool
 * added support for "dig" in input line

- v0.8

## contributions
contributions are welcome.
 * localize external references (JSS, CSS etc.)
 * additional Shell Escape Filtering
 * bug fixes 
 * compatibility improvements


