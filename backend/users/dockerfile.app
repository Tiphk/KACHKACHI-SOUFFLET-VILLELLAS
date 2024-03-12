FROM python:3.9-slim

WORKDIR /app

COPY api_users.py .

EXPOSE 8080

RUN pip install flask psycopg2-binary
RUN apt-get update && apt-get install -y postgresql postgresql-client
CMD ["python", "api_users.py"]
