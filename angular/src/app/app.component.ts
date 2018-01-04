import { Component, OnInit } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';

declare var swal;

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.scss']
})
export class AppComponent implements OnInit {

  deviceInfo: any = null;

  constructor(
    private deviceService: Ng2DeviceService
  ) { }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();

    if (this.deviceInfo.browser == "chrome" && this.deviceInfo.browser_version < "45.0.2454.85") {
      swal("Versão do Navegador", "A versão do chrome não é compatível com a aplicação, entre em contato com o suporte da DIN.", "error")
    }

    /* DESCOMENTAR PARA SISTEMAS OFFLINES */
    window.localStorage.setItem('offline_system', 'true')
  }

  ngOnInit() {
    this.epicFunction();
  }

}
