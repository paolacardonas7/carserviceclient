# Explicación de la solución del laboratorio

## Componentes
Para llevar a cabo las tareas propuestas fue necesario crear los siguientes componetes:
owner-list: permite mostrar la lista de propietarios(owners) y poder seleccionar uno o más propietarios para eliminar. 
owner-edit: permiter crear, editar y eliminar un propietario.

## Servicios
Se creó el archivo owner.service para crear los diferentes servicios que permitieron consumir los datos de la API de los propietarios. Estos son:
getAll(): Permite obtener el objeto JSON que proporciona la API de propietarios.
getByLink(link): Obtiene a un propietario en específico, mediante su respectivo link(href).
save(owner): Guarda a un propietario en la API o lo actualiza si ya existe.
remove(href, ownerDni): Elimina a un propiestario de la API (para lo cual se usa el href), a la vez que elimina la relación que este tenga con un carro (para lo cual, se busca en la lista de carros, los carros cuyos ownerDni fueran igual al DNI del propietario a eliminar).

# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
