FROM nginx

COPY app.conf /etc/nginx/conf.d/default.conf

COPY /certs/certificate.crt /etc/ssl/certs/
COPY /certs/private.key /etc/ssl/private/

RUN mkdir /etc/log

EXPOSE 443