import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component'; //Incluir
import { HttpClientModule  } from '@angular/common/http';
import { ConcatenarTextoPipe } from './concatenar-texto.pipe';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';//Incluir
import { ListadosModule } from './listados/listados.module';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { MatGridListModule,} from '@angular/material/grid-list';
import { MatCardModule,} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ProductofilterPipe } from './pages/home/producto-filter.pipe';













@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    RegistroComponent,
    ConcatenarTextoPipe,
    LoginComponent,
    DetalleComponent,
    FooterComponent,
    BienvenidaComponent,
    ProductofilterPipe




    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListadosModule,
    HttpClientModule, //Incluir
    FormsModule, //Incluir
    ReactiveFormsModule, 
    BrowserAnimationsModule, //Incluir
    ButtonsModule,
    WavesModule,
    CardsModule,
    MatChipsModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule,
   
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
