import { Component, HostListener} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AntonioGuardeno';

  isElementDisabled = false;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.checkResolution();
  }
  @HostListener('window:load', ['$event'])
  onWindowLoad(event: any) {
    this.checkResolution();
  }


  checkResolution() {
    // Obtener la resolución actual de la pantalla
    const screenWidth = window.innerWidth;

    // Deshabilitar el elemento si la resolución es menor que un valor determinado
    this.isElementDisabled = screenWidth < 988; // Por ejemplo, deshabilitar para resoluciones menores que 768px
  }
}
