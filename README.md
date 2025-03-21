# NgvalueBug

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Reproduction steps

1. Install dependencies (`npm ci`)
2. Start the local server (`npm start`)
   - The app initially loads with a `<select>` dropdown and text describing the current selection with its type.
3. **BUG**: Notice that the current selection is `"one"` but the select is not reflecting that. The select's ngModel seems to be using the option text (`one (string)`) instead of the provided `ngValue`.
4. Open the dropdown and click `1 (number)`.
5. **BUG**: The selection is set to the option text of `"1 (number)"` instead of the provided `ngValue` of `1`.
6. Open the dropdown and click `undefined (undefined)`
7. **BUG**: The selection is set to the option text of `"undefined (undefined)"` instead of the provided `ngValue` of `undefined`.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
