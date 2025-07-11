# simple-react

This project demonstrates a Spring Boot backend with a React frontend.

## Running the backend

Use Maven to start the backend service:

```bash
./mvnw spring-boot:run
```

## Running the frontend in development

```bash
cd frontend
npm install
npm start
```

## Building the frontend

```bash
cd frontend
npm install
npm run build
```

The build command places the compiled assets into `src/main/resources/static` so
Spring Boot can serve them.
