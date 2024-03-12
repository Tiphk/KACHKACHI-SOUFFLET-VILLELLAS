

One frontend application
Two backend microservices
Each backend microservice has its own isolated database
We would need at least 5 containers:

# Nb de containers :  

Frontend container

Backend microservice 1 container with its isolated database 

Backend microservice 2 container with its isolated database

Database container for backend microservice 1 : database sur les users

Database container for backend microservice 2 : database sur les acteurs


database : Postgre
front : nginx 

+ faire des volumes pour que les modifications sur la database soient enregistrés
  
sur le front on affiche 2 images de personnes grisées
proportionnellement à leur tailles (par rapport aux infos des databases)
