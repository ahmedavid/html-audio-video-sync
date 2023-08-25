FROM arm64v8/nginx:1.25.1-alpine3.17 
WORKDIR /app
COPY src/* *
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 8080
CMD ["sh", "-c", "nginx -g 'daemon off;'"]
