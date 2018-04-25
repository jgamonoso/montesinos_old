import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { ManagerService } from './services/manager.service';

// shared
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CabeceraComponent } from './components/shared/cabecera/cabecera.component';

// pipes
import { EquiponbaPipe } from './pipes/equiponba.pipe';
import { EquipoligaPipe } from './pipes/equipoliga.pipe';
import { NombretemporadaPipe } from './pipes/nombretemporada.pipe';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Componentes equipo
import { EquipodetalleComponent } from './components/equipo/equipodetalle/equipodetalle.component';
import { OfertasenviadasComponent } from './components/equipo/ofertasenviadas/ofertasenviadas.component';
import { OfertasrecibidasComponent } from './components/equipo/ofertasrecibidas/ofertasrecibidas.component';
import { PujasactivasComponent } from './components/equipo/pujasactivas/pujasactivas.component';
import { WaiversComponent } from './components/equipo/waivers/waivers.component';
import { LesionadosComponent } from './components/equipo/lesionados/lesionados.component';
import { ApuestasComponent } from './components/equipo/apuestas/apuestas.component';

// Componentes liga
import { NoticiasComponent } from './components/liga/noticias/noticias.component';
import { EquipolistaComponent } from './components/liga/equipolista/equipolista.component';
import { ApuestaslistaComponent } from './components/liga/apuestaslista/apuestaslista.component';
import { HistoricoComponent } from './components/liga/historico/historico.component';
import { NormativaComponent } from './components/liga/normativa/normativa.component';

// Componentes mercado
import { MercadojugadoresComponent } from './components/mercado/mercadojugadores/mercadojugadores.component';
import { MercadoderechosComponent } from './components/mercado/mercadoderechos/mercadoderechos.component';
import { MercadodraftpicksComponent } from './components/mercado/mercadodraftpicks/mercadodraftpicks.component';
import { MercadotradingblockComponent } from './components/mercado/mercadotradingblock/mercadotradingblock.component';

// Componentes renovaciones
import { RjugadoresComponent } from './components/renovaciones/rjugadores/rjugadores.component';
import { RpujasactivasComponent } from './components/renovaciones/rpujasactivas/rpujasactivas.component';

// Componentes agencia libre
import { AlseasonjugadoresComponent } from './components/alibre/alseasonjugadores/alseasonjugadores.component';
import { AljugadoresComponent } from './components/alibre/aljugadores/aljugadores.component';
import { AloffseasonjugadoresComponent } from './components/alibre/aloffseasonjugadores/aloffseasonjugadores.component';
import { AloffseasonpujasactivasComponent } from './components/alibre/aloffseasonpujasactivas/aloffseasonpujasactivas.component';

// Componentes draft
import { DraftComponent } from './components/draft/draft/draft.component';

// Componentes comisionado
import { CligaComponent } from './components/comisionado/cliga/cliga.component';
import { CequiposComponent } from './components/comisionado/cequipos/cequipos.component';
import { CjugadoresComponent } from './components/comisionado/cjugadores/cjugadores.component';
import { CdraftComponent } from './components/comisionado/cdraft/cdraft.component';
import { CtradesComponent } from './components/comisionado/ctrades/ctrades.component';
import { CsubastasComponent } from './components/comisionado/csubastas/csubastas.component';
import { CwaiversComponent } from './components/comisionado/cwaivers/cwaivers.component';
import { CsancionesComponent } from './components/comisionado/csanciones/csanciones.component';
import { CbonusComponent } from './components/comisionado/cbonus/cbonus.component';
import { CnoticiasComponent } from './components/comisionado/cnoticias/cnoticias.component';
import { CmatchupComponent } from './components/comisionado/cmatchup/cmatchup.component';

// Componentes admin
import { ManagerlistaComponent } from './components/admin/managerlista/managerlista.component';
import { EquiposabrlistaComponent } from './components/admin/equiposabrlista/equiposabrlista.component';
import { ParametroslistaComponent } from './components/admin/parametroslista/parametroslista.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,

    EquiponbaPipe,
    EquipoligaPipe,
    NombretemporadaPipe,

    EquipodetalleComponent,
    OfertasenviadasComponent,
    OfertasrecibidasComponent,
    PujasactivasComponent,
    WaiversComponent,
    LesionadosComponent,
    ApuestasComponent,

    NoticiasComponent,
    EquipolistaComponent,
    ApuestaslistaComponent,
    HistoricoComponent,
    NormativaComponent,

    MercadojugadoresComponent,
    MercadoderechosComponent,
    MercadodraftpicksComponent,
    MercadotradingblockComponent,

    RjugadoresComponent,
    RpujasactivasComponent,

    AlseasonjugadoresComponent,
    AljugadoresComponent,
    AloffseasonjugadoresComponent,
    AloffseasonpujasactivasComponent,

    DraftComponent,

    CligaComponent,
    CequiposComponent,
    CjugadoresComponent,
    CdraftComponent,
    CtradesComponent,
    CsubastasComponent,
    CwaiversComponent,
    CsancionesComponent,
    CbonusComponent,
    CnoticiasComponent,
    CmatchupComponent,

    ManagerlistaComponent,
    EquiposabrlistaComponent,
    ParametroslistaComponent
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
