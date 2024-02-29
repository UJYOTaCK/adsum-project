import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  
  // Aqui esta el meollo, a aprtir de angular 16 los modulos ya no son requeridos pero se seguian usando (y todavia), pero en la v 17 ya no, son opcionales

  // antes se necesitaba un modulo de inicio, pero con angular 17 solo se necesita un componente de inicio,
  // en ete caso AppComponent no e sun modulo, por lo tanto debe estar como standalone. true