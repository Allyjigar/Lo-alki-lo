import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MyFavoritesComponent } from './pages/my-favorites/my-favorites.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { ChatComponent } from './pages/chat/chat.component';
import { FindProductsComponent } from './pages/find-products/find-products.component';
import { SubirProductosComponent } from './pages/home/subir-productos/subir-productos.component';
import { SubirProductoComponent } from './pages/subir-producto/subir-producto.component';
import { HeaderLayoutComponent } from './layout/header-layout/header-layout.component';
import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyProductsComponent,
    HeaderComponent,
    FooterComponent,
    MyFavoritesComponent,
    AnuncioComponent,
    ChatComponent,
    FindProductsComponent,
    SubirProductosComponent,
    SubirProductoComponent,
    HeaderLayoutComponent,
    ProfileLayoutComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
