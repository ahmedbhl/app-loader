# App-Loader


[![github](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/ahmedbhl/app-loader)
[![angular](https://badgen.net/badge/Angular/v%2010/red)](https://github.com/angular/angular-cli)
[![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![StackBlitz ⚡️](https://badgen.net/badge/icon/Edit%20On%20StackBlitz⚡️?icon=slack&label)](https://stackblitz.com/edit/app-loader?file=src%2Fapp%2Fapp.component.ts)
[![Demo](https://badgen.net/badge/Demo/ClicMe/green)](https://app-loader-8b640.web.app/)

<p align="center">
    <img src="https://github.com/ahmedbhl/app-loader/blob/master/src/assets/app-loader.gif?raw=true">
</p>

# Features

   - [X] Automatically show loader for router events.
   - [X] Automatically show loader for http requests.

## Quickstart 

### Clone the project

```console
$ git clone https://github.com/ahmedbhl/app-loader.git
$ cd app-loader
$ npm i
$ npm start

or using CLI to start project after install

$ ng serve
```

## Installation via NPM

Install `app-loader` via NPM, using the command below. 
(soon will be published on npm repository)

```shell
$ npm install --save app-loader

# Or Yarn

$ yarn add app-loader
```
### Automatic

you need to import the `LoaderModule` and the `LoaderInterceptor` if you need activate display the loader automaticly for each request http.

```console
@NgModule({
  imports: [
    ...
    LoaderModule,
  ],
  exports: [LoaderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
```
### Manual : 
All what you need just to import the service `LoaderService` in the constructor of in the component where you want to display loader.

```console
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
    constructor(private readonly loaderService: LoaderService) { 
        this.loaderService.isLoading.next(true) // For display the loader
        this.loaderService.isLoading.next(false) // For hide the loader
    }

```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you like app-loader, please give it a ⭐
