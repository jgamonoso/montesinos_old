
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

// equipo
import { EquipodetalleComponent } from './components/equipo/equipodetalle/equipodetalle.component';
import { OfertasenviadasComponent } from './components/equipo/ofertasenviadas/ofertasenviadas.component';
import { OfertasrecibidasComponent } from './components/equipo/ofertasrecibidas/ofertasrecibidas.component';
import { PujasactivasComponent } from './components/equipo/pujasactivas/pujasactivas.component';
import { WaiversComponent } from './components/equipo/waivers/waivers.component';
import { LesionadosComponent } from './components/equipo/lesionados/lesionados.component';
import { ApuestasComponent } from './components/equipo/apuestas/apuestas.component';

// liga
import { NoticiasComponent } from './components/liga/noticias/noticias.component';
import { EquipolistaComponent } from './components/liga/equipolista/equipolista.component';
import { ApuestaslistaComponent } from './components/liga/apuestaslista/apuestaslista.component';
import { HistoricoComponent } from './components/liga/historico/historico.component';
import { NormativaComponent } from './components/liga/normativa/normativa.component';

// mercado
import { MercadojugadoresComponent } from './components/mercado/mercadojugadores/mercadojugadores.component';
import { MercadoderechosComponent } from './components/mercado/mercadoderechos/mercadoderechos.component';
import { MercadodraftpicksComponent } from './components/mercado/mercadodraftpicks/mercadodraftpicks.component';
import { MercadotradingblockComponent } from './components/mercado/mercadotradingblock/mercadotradingblock.component';

// renovaciones
import { RjugadoresComponent } from './components/renovaciones/rjugadores/rjugadores.component';
import { RpujasactivasComponent } from './components/renovaciones/rpujasactivas/rpujasactivas.component';

// agencia libre
import { AlseasonjugadoresComponent } from './components/alibre/alseasonjugadores/alseasonjugadores.component';
import { AljugadoresComponent } from './components/alibre/aljugadores/aljugadores.component';
import { AloffseasonjugadoresComponent } from './components/alibre/aloffseasonjugadores/aloffseasonjugadores.component';
import { AloffseasonpujasactivasComponent } from './components/alibre/aloffseasonpujasactivas/aloffseasonpujasactivas.component';

// draft
import { DraftComponent } from './components/draft/draft/draft.component';

// comisionado
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

// admin
import { ManagerlistaComponent } from './components/admin/managerlista/managerlista.component';
import { EquiposabrlistaComponent } from './components/admin/equiposabrlista/equiposabrlista.component';
import { ParametroslistaComponent } from './components/admin/parametroslista/parametroslista.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'equipodetalle/:id', component: EquipodetalleComponent },
  { path: 'ofertasenviadas', component: OfertasenviadasComponent },
  { path: 'ofertasrecibidas', component: OfertasrecibidasComponent },
  { path: 'pujasactivas', component: PujasactivasComponent },
  { path: 'waivers', component: WaiversComponent },
  { path: 'lesionados/:id', component: LesionadosComponent },
  { path: 'apuestas', component: ApuestasComponent },

  { path: 'noticias/:id', component: NoticiasComponent },
  { path: 'equipolista', component: EquipolistaComponent },
  { path: 'apuestaslista', component: ApuestaslistaComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'normativa', component: NormativaComponent },

  { path: 'mercadojugadores', component: MercadojugadoresComponent },
  { path: 'mercadoderechos', component: MercadoderechosComponent },
  { path: 'mercadodraftpicks', component: MercadodraftpicksComponent },
  { path: 'mercadotradingblock', component: MercadotradingblockComponent },

  { path: 'rjugadores', component: RjugadoresComponent },
  { path: 'rpujasactivas', component: RpujasactivasComponent },

  { path: 'alseasonjugadores', component: AlseasonjugadoresComponent },
  { path: 'aljugadores', component: AljugadoresComponent },
  { path: 'aloffseasonjugadores', component: AloffseasonjugadoresComponent },
  { path: 'aloffseasonpujasactivas', component: AloffseasonpujasactivasComponent },

  { path: 'draft', component: DraftComponent },

  { path: 'cliga', component: CligaComponent },
  { path: 'cequipos', component: CequiposComponent },
  { path: 'cjugadores', component: CjugadoresComponent },
  { path: 'cdraft', component: CdraftComponent },
  { path: 'ctrades', component: CtradesComponent },
  { path: 'csubastas', component: CsubastasComponent },
  { path: 'cwaivers', component: CwaiversComponent },
  { path: 'csanciones', component: CsancionesComponent },
  { path: 'cbonus', component: CbonusComponent },
  { path: 'cnoticias', component: CnoticiasComponent },
  { path: 'cmatchup', component: CmatchupComponent },

  { path: 'managerlista', component: ManagerlistaComponent },
  { path: 'equiposabrlista', component: EquiposabrlistaComponent },
  { path: 'parametroslista', component: ParametroslistaComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
