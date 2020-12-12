import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AnuncioComponent } from './pages/home/anuncio/anuncio.component';
import { HomeComponent } from './pages/home/home.component';
import { MyFavoritesComponent } from './pages/profile/my-favorites/my-favorites.component';
import { MyProductsComponent } from './pages/profile/my-products/my-products.component';
import { MyProfileComponent } from './pages/profile/my-profile/my-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ValoracionesComponent } from './pages/profile/valoraciones/valoraciones.component';
import { SubirProductoComponent } from './pages/subir-producto/subir-producto.component';

const routes: Routes = [
  {path: "myfavorites", component: MyFavoritesComponent},
  {path: "myproducts", component: MyProductsComponent},
  {path: "subirproducto", component: SubirProductoComponent},
  {path: "anuncio", component: AnuncioComponent},
  {path: "home", component: HomeComponent},
  {path: "profile", component: ProfileComponent},
  {path: "chat", component: ChatComponent},
  {path: "auth", component: AuthComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path:"profileLayout", component: ProfileLayoutComponent},
  {path: "myprofile", component: MyProfileComponent},
  {path: "valoraciones", component: ValoracionesComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }