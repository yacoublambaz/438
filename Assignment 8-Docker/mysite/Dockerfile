
FROM python:3.11-alpine

COPY . .

RUN pip install -r requirements.txt

RUN python manage.py makemigrations
RUN python manage.py migrate
EXPOSE 8000/tcp

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]