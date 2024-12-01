# Test Traefik, Nginx and Whoami
Access the Traefik Dashboard:

Open a browser and go to http://localhost:8080.
You'll see the Traefik dashboard showing active routes and services.


```bash
Copy code
sudo nano /etc/hosts
```

Add the following line:

``` bash
127.0.0.1 whoami.localhost
127.0.0.1 frontend.localhost
```
Save and exit.


Open a browser and go to http://whoami.localhost. You should see a response from the Whoami service displaying its container name and details.


## Restart the services:

```bash
Copy code
docker-compose up -d
```

## Stopping and Cleaning Up
   To stop the services:

```bash
Copy code
docker-compose down
```
To remove all resources (containers, networks, volumes):

```bash
Copy code
docker-compose down -v
```
