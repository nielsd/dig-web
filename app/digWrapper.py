from __future__ import print_function
import subprocess
import re
import codecs

ESCAPE_SEQUENCE_RE      = re.compile(r'''
    ( \\U........      # 8-digit hex escapes
    | \\u....          # 4-digit hex escapes
    | \\x..            # 2-digit hex escapes
    | \\[0-7]{1,3}     # Octal escapes
    | \\N\{[^}]+\}     # Unicode characters by name
    | \\[\\'"abfnrtv]  # Single-character escapes
    )''', re.UNICODE | re.VERBOSE)

def decode_escapes(s):
    def decode_match(match):
        return codecs.decode(match.group(0), 'unicode-escape')

    return ESCAPE_SEQUENCE_RE.sub(decode_match, s)




def RunDig(paramString):
    #popenParams = ["dig"]
    popenParams         = []
    dig_cmd             = ["dig"]
    delv_cmd            = ["delv"]
    paramString_clean   = re.sub(r'[\?|\;|\#|\'|\"]',r'',decode_escapes(paramString))
    paramList           = paramString_clean.split(" ")

    # handle different input versions
    # handle "delv mode"
    if "delv" in paramList[0]:
       paramList.pop(0)
       popenParams      = delv_cmd + paramList
    elif "dig" in paramList[0]:
       paramList.pop(0)
       popenParams      = dig_cmd + paramList
    else:
       popenParams      = dig_cmd + paramList

    p = subprocess.Popen(popenParams, shell=False, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    return p.stdout.readlines()


#for line in RunDig("www.bing.com AAAA +short"):
#     print(line.decode(), end='')

