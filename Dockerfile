FROM nginx

RUN rm -rf /usr/share/nginx/html/*
COPY alt.html /usr/share/nginx/html/index.html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY favicon.png /usr/share/nginx/html/favicon.png 
COPY apple-touch-icon.png /usr/share/nginx/html/apple-touch-icon.png 
