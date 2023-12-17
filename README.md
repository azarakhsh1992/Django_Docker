"# Django_Docker" 


CONTAINERIZATION:

PostgreSQL and TimescaleDB:
https://hub.docker.com/r/timescale/timescaledb/tags?page=1
https://docs.timescale.com/self-hosted/latest/configuration/docker-config/

docker pull timescale/timescaledb:latest-pg15

docker run -d --name fedge -p 127.0.0.1:5432:5432 -e POSTGRES_USER=fedge -e POSTGRES_PASSWORD=75401614 timescale/timescaledb:latest-pg15

https://docs.timescale.com/self-hosted/latest/install/installation-docker/#install-self-hosted-timescaledb-from-a-pre-built-container


with this guide can the PostgreSQL and Timescale be running on a Docker Container.

When a Container is being deleted, ofcourse all of the data would be lost with it. 


docker-compose up -d --build
docker-compose run web python manage.py makemigrations
docker-compose run web python manage.py migrate
docker-compose run web python manage.py createsuperuser
docker-compose run web python manage.py runserver