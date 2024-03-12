from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)


db_config = {
    'host': 'db_users',
    'database': 'DB_USERS',
    'user': 'ADMIN',
    'password': 'ADMIN'
}

def create_connection():
    return psycopg2.connect(**db_config)

@app.route('/api/insert', methods=['POST'])
def cequetuveux():
    #communiquer avec la bdd postegre

    try:
        conn = create_connection()
        with conn.cursor() as cur:
            cur.execute("INSERT INTO users (username,password,height) VALUES ('test2','Montagne',172)")
            conn.commit()  # Valide la transaction
            return "Insertion réussie", 201
    except Exception as e:
        conn.rollback()  # En cas d'erreur, annule la transaction
        return str(e), 500


@app.route('/getInsert', methods=['GET'])
def cequetuveux2():
    try:
        conn = create_connection()
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM users;")
            rows = cur.fetchall()
            # Créer une liste de dictionnaires pour contenir les données
            results = []
            for row in rows:
                # Convertir chaque ligne en un dictionnaire
                result = {
                    'id': row[0],
                    'username': row[1],
                    'password': row[2],
                    'height': row[3]
                }
                results.append(result)
            return jsonify(results), 200
    except Exception as e:
        return str(e), 500


if __name__ == '__main__':
    app.run(port=8080,host="0.0.0.0")
