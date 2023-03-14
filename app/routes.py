from flask import render_template
from flask import Response
from flask import request
from app.digWrapper import RunDig
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
    #output = request.values["command"]
    input = request.values["command"]
    if input:
        output_lines	= RunDig(input)
        output          = []
        for my_line in output_lines:
           output.append(my_line.decode())
    else:
        output 		= " "
    return Response("".join(output), mimetype="text/plain")


@app.route('/st/<path:path>')
def static_file(path):
    return app.send_static_file(path)


