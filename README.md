# Image-Processing-API

It's an Image Processing API application that Udacity assigned to me; this API resizes pictures according on the query parameter specified in the URL; it also includes Jasmine unit and supertests.

# How it works

### Serving the app

```sh
$ npm start
```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder

# Endpoint to access image processing 

```sh
$ http://localhost:3000/api/image?filename=encenadaport&height=3000&width=3000
```
