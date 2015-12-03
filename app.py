from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def pergunta():
	#Retorna as peguntas ao cliente
	return render_template("index.html")

@app.route("/sucesso", methods=['POST'])
def salva():
	# Salva no servidor
	f = open("tmp/banco_de_dados.txt","a")
	resultado = request.form["mamao"] + ","
	resultado = resultado + request.form["banana"]+"\n"
	f.write(resultado)
	# Retorna uma mensagem ao cliente
	return "Sucesso!"

if __name__ == "__main__":
	app.run()