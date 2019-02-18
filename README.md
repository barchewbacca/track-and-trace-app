# Track and Trace App

## Development

1. Install dependencies

```bash
npm install
```

2. Run frontend and backend 

```bash
npm run start
```

3. Navigate to http://localhost:4200

4. MongoDB has 2 parcels inside: their ID's are **111** and **222**, so be sure to use them in the search form in order to get successful result.

5. Run unit tests

```bash
npm run test
```

6. Run integration tests(keep in mind that the app should be running so make sure that #2 is running in another terminal tab)

```bash
npm run e2e
```

## TODOs for the future improvements

- Introduce SSR
- Introduce ngRx
- Add more unit and integration tests
- Handle the 404 error with the ErrorHandler properly.
