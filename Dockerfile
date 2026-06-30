FROM php:8.2-apache

# 1. Instalar extensiones nativas de MySQL indispensables para el curso
RUN docker-php-ext-install pdo pdo_mysql mysqli

# 2. Copiar todo el código fuente local al servidor
COPY . /var/www/html/

# 3. Configurar el puerto obligatorio para la capa gratuita de Google Cloud Run
EXPOSE 8080
RUN sed -i 's/Listen 80/Listen 8080/g' /etc/apache2/ports.conf /etc/apache2/sites-available/*.conf