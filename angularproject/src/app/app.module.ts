import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { FooterComponent } from './menu/footer/footer.component';
import { BoutiqueComponent } from './Boutique/boutique/boutique.component';
import { PanierComponent } from './Boutique/panier/panier.component';
import { CategorieBoutiqueComponent } from './Boutique/categorie-boutique/categorie-boutique.component';
import { AcceuilComponent } from './Acceuil/acceuil.component';
import { AProposComponent } from './A propos-confidentialité/a-propos/a-propos.component';
import { PolitiqueConfComponent } from './A propos-confidentialité/politique-conf/politique-conf.component';
import { PolitiqueVentComponent } from './A propos-confidentialité/politique-vent/politique-vent.component';
import { ConditionVenteComponent } from './A propos-confidentialité/condition-vente/condition-vente.component';
import { GestionCookiesComponent } from './A propos-confidentialité/gestion-cookies/gestion-cookies.component';
import { AuthComponent } from './login/auth/auth.component';
import { JamonoSchoolComponent } from './pageService/jamono-school/jamono-school.component';
import { JamonoMaxComponent } from './pageService/jamono-max/jamono-max.component';
import { FibreComponent } from './pageService/fibre/fibre.component';
import { GestionCategorieComponent } from './Dashboard/admin/gestion-categorie/gestion-categorie.component';
import { GestionProduitComponent } from './Dashboard/admin/gestion-produit/gestion-produit.component';
import { GestionBoutiqueComponent } from './Dashboard/admin/gestion-boutique/gestion-boutique.component';
import { GestionOffreComponent } from './Dashboard/admin/gestion-offre/gestion-offre.component';
import { DashboardAdminComponent } from './Dashboard/admin/dashboard-admin/dashboard-admin.component';
import { DashboardClientComponent } from './Dashboard/client/dashboard-client/dashboard-client.component';
import { PageServiceComponent } from './pageService/page-service/page-service.component';
import{GestionCommandeComponent} from './Dashboard/client/gestion-commande/gestion-commande.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoutiqueComponent,
    PanierComponent,
    CategorieBoutiqueComponent,
    AcceuilComponent,
    AProposComponent,
    PolitiqueConfComponent,
    PolitiqueVentComponent,
    ConditionVenteComponent,
    GestionCookiesComponent,
    AuthComponent,
    JamonoSchoolComponent,
    JamonoMaxComponent,
    FibreComponent,
    PageServiceComponent,
    DashboardClientComponent,
    DashboardAdminComponent,
    GestionOffreComponent,
    GestionBoutiqueComponent,
    GestionProduitComponent,
    GestionCategorieComponent,
    GestionCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
