from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

@app.route('/api/insert', methods=['POST'])
def cequetuveux():
    #communiquer avec la bdd postegre
    db_config = {
    'host': 'db_users',
    'database': 'DB_USERS',
    'user': 'ADMIN',
    'password': 'ADMIN'
    }
    db = psycopg2.connect(**db_config)
   
    cursor1 = db.cursor()
    cursor1.execute("INSERT INTO users (username,password,height) VALUES ('test1','Plage',162)")
    db.commit()
    cursor1.close()
    db.close()

    return "", 200


@app.route('/getInsert', methods=['GET'])
def cequetuveux2():
    #td4 consigne
    return "", 200


if __name__ == '__main__':
    app.run(port=8080,host="0.0.0.0")
