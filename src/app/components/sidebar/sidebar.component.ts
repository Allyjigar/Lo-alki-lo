import { viewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public miNumero: number;
  constructor() { }
  
  seleccionar(n: number) {
    this.miNumero = n;
  }
  cambiarClass(id : string) {
    if (id === "perfil") {
      document.querySelector(id).className = "active";
      document.getElementById("misProduc").className = "desactive";
      document.getElementById("chat").className = "desactive";
      document.getElementById("valoraciones").className = "desactive";
      document.getElementById("subirProduc").className = "desactive";
      document.getElementById("favoritos").className = "desactive";
      
    } else if (id === "misProduc") {
      document.getElementById(id).className = "active";
      document.getElementById("perfil").className = "desactive";
      document.getElementById("chat").className = "desactive";
      document.getElementById("valoraciones").className = "desactive";
      document.getElementById("subirProduc").className = "desactive";
      document.getElementById("favoritos").className = "desactive";
    } else if (id === "chat") {
      document.getElementById(id).className = "active";
      document.getElementById("perfil").className = "desactive";
      document.getElementById("misProduc").className = "desactive";
      document.getElementById("valoraciones").className = "desactive";
      document.getElementById("subirProduc").className = "desactive";
      document.getElementById("favoritos").className = "desactive";
    } else if (id === "valoraciones") {
      document.getElementById(id).className = "active";
      document.getElementById("perfil").className = "desactive";
      document.getElementById("misProduc").className = "desactive";
      document.getElementById("chat").className = "desactive";
      document.getElementById("subirProduc").className = "desactive";
      document.getElementById("favoritos").className = "desactive";
    } else if (id === "subirProduc") {
      document.getElementById(id).className = "active";
      document.getElementById("perfil").className = "desactive";
      document.getElementById("misProduc").className = "desactive";
      document.getElementById("chat").className = "desactive";
      document.getElementById("valoraciones").className = "desactive";
      document.getElementById("favoritos").className = "desactive";
    } else if (id === "favoritos") {
      document.getElementById(id).className = "active";
      document.getElementById("perfil").className = "desactive";
      document.getElementById("misProduc").className = "desactive";
      document.getElementById("chat").className = "desactive";
      document.getElementById("valoraciones").className = "desactive";
      document.getElementById("subirProduc").className = "desactive";
    }

  }
  ngOnInit(): void {
  }

}
