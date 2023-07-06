import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: number | string | undefined = 'Sin definir';

  clientes: any[] = [];

  // Guardamos los datos del cliente
  guardar(): void {

    if (this.grupo == 'Sin definir') {
      this.grupo = undefined;
    }

    let newCliente = {
      "nombre": this.nombre,
      "cif": this.cif,
      "direccion": this.direccion,
      "grupo": this.grupo
    }
    
    this.clientes.push(newCliente);
  }

  // Elimina el último cliente
  eliminarUltimo(): void {
    this.clientes.pop();
  }
}