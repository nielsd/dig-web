from __future__ import print_function
import subprocess
import re

def RunDig(paramString):
    popenParams = ["dig"]
    paramString_clean = re.sub(r'[\?|\$|\;|\!|\#|\'|\"]',r'',paramString)
    popenParams += paramString_clean.split(" ")

    p = subprocess.Popen(popenParams, shell=False, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    return p.stdout.readlines()


#for line in RunDig("www.bing.com AAAA +short"):
#     print(line.decode(), end='')

