# dig-web
dig web console - simple but powerful web console for the BIND’s Domain Information Groper (dig) Tool - the powerful lookup tool for the DNS.
beside dig, it offers the delv DNSSEC analyzer / validator too.

(dig-web is a fork of avasylev/dig-net - thx to avasylev)

dig-web is coded in Python3 as Flask project. 
For user security reasons, all elements are bundled with the code.


# usage

for (default) dig mode
> dig egov.eu <more options>

or for "delv mode" 

> dig delv egov.eu <more options>


# changes

- 1.0
 * added "delv mode" - support for delv DNSSEC check tool
 * added support for "dig" in input line

- v0.8
 * localize external references (JSS, CSS etc.)
 * additional Shell Escape Filtering
 * bug fixes 
 * compatibility improvements

