import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ManagerService } from './services/manager.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerdetalleComponent } from './components/managerdetalle/managerdetalle.component';
import { AgencialibreComponent } from './components/agencialibre/agencialibre.component';
import { ManagerlistaComponent } from './components/managerlista/managerlista.component';
import { CabeceraComponent } from './components/shared/cabecera/cabecera.component';
import { EquiponbaPipe } from './pipes/equiponba.pipe';
import { EquipoligaPipe } from './pipes/equipoliga.pipe';
import { NombretemporadaPipe } from './pipes/nombretemporada.pipe';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ApuestaslistaComponent } from './components/apuestaslista/apuestaslista.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { NormativaComponent } from './components/normativa/normativa.component';
import { MercadojugadoresComponent } from './components/mercado/mercadojugadores/mercadojugadores.component';
import { MercadoderechosComponent } from './components/mercado/mercadoderechos/mercadoderechos.component';
import { MercadodraftpicksComponent } from './components/mercado/mercadodraftpicks/mercadodraftpicks.component';
import { MercadotradingblockComponent } from './components/mercado/mercadotradingblock/mercadotradingblock.component';
import { OfertasenviadasComponent } from './components/ofertasenviadas/ofertasenviadas.component';
import { OfertasrecibidasComponent } from './components/ofertasrecibidas/ofertasrecibidas.component';
import { PujasactivasComponent } from './components/pujasactivas/pujasactivas.component';
import { WaiversComponent } from './components/waivers/waivers.component';
import { LesionadosComponent } from './components/lesionados/lesionados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ManagerdetalleComponent,
    AgencialibreComponent,
    ManagerlistaComponent,
    CabeceraComponent,
    EquiponbaPipe,
    EquipoligaPipe,
    NombretemporadaPipe,
    NoticiasComponent,
    ApuestaslistaComponent,
    HistoricoComponent,
    NormativaComponent,
    MercadojugadoresComponent,
    MercadoderechosComponent,
    MercadodraftpicksComponent,
    MercadotradingblockComponent,
    OfertasenviadasComponent,
    OfertasrecibidasComponent,
    PujasactivasComponent,
    WaiversComponent,
    LesionadosComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
