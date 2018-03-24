from flask import render_template
from flask import Response
from flask import request
from digWrapper import RunDig
from app import app

@app.route('/')
@app.route('/index')
def index():
    query = request.args.get("q","")
    queryOutput = ""
    if len(query) > 0 :
        queryOutput = "> dig {0} \n".format(query)
        queryOutput += "".join(RunDig(query))

    return render_template('index.html', initialQuery=queryOutput)


@app.route('/q', methods=['GET', 'POST'])
def query():
    output = RunDig(request.values["command"])
    return Response("".join(output), mimetype="text/plain")
