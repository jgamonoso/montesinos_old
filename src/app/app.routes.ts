
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManagerdetalleComponent } from './components/managerdetalle/managerdetalle.component';
import { AgencialibreComponent} from './components/agencialibre/agencialibre.component';
import { ManagerlistaComponent} from './components/managerlista/managerlista.component';
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

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managerdetalle/:id', component: ManagerdetalleComponent },
  { path: 'agencialibre', component: AgencialibreComponent },
  { path: 'managerlista', component: ManagerlistaComponent },
  { path: 'noticias/:id', component: NoticiasComponent },
  { path: 'apuestaslista', component: ApuestaslistaComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'normativa', component: NormativaComponent },
  { path: 'mercadojugadores', component: MercadojugadoresComponent },
  { path: 'mercadoderechos', component: MercadoderechosComponent },
  { path: 'mercadodraftpicks', component: MercadodraftpicksComponent },
  { path: 'mercadotradingblock', component: MercadotradingblockComponent },
  { path: 'ofertasenviadas', component: OfertasenviadasComponent },
  { path: 'ofertasrecibidas', component: OfertasrecibidasComponent },
  { path: 'pujasactivas', component: PujasactivasComponent },
  { path: 'waivers', component: WaiversComponent },
  { path: 'lesionados/:id', component: LesionadosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
