from __future__ import print_function
import subprocess

def RunDig(paramString):
    popenParams = ["dig"]
    popenParams += paramString.split(" ")
    
    p = subprocess.Popen(popenParams, shell=False, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    return p.stdout.readlines()


#for line in RunDig("www.bing.com AAAA +short"):
#     print(line, end='')

