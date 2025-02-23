FROM nginx:alpine
# Copy entire project content into public_html folder (adjust .dockerignore as needed)
COPY . /usr/share/nginx/html/public_html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
