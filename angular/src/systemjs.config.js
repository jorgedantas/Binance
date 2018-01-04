/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles start

      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@json2csv': 'npm:json2csv/dist/json2csv.js',
      '@ngui/auto-complete': 'npm:@ngui/auto-complete/dist/auto-complete.umd.js',
      'ng2-device-detector': 'npm:ng2-device-detector/ng2-device-detector.umd.js',

      //Modulos
      '@tcecommon/shared-module-common': 'http://tce-commondev.tce.govrn/app/shared/shared-common.module.js',
      '@tcecommon/login-common': 'http://tce-commondev.tce.govrn/app/pages/login/login.module.js',

      //SERVICES

      '@tcecommon/abas-service-service': 'http://tce-commondev.tce.govrn/app/shared/services/abas-service.service.js',
      '@tcecommon/autenticacao-service': 'http://tce-commondev.tce.govrn/app/shared/services/autenticacao.service.js',
      '@tcecommon/csv-service': 'http://tce-commondev.tce.govrn/app/shared/services/csv-service.service.js',
      '@tcecommon/masks-service': 'http://tce-commondev.tce.govrn/app/shared/services/masks.service.js',
      '@tcecommon/message-alerts-service': 'http://tce-commondev.tce.govrn/app/shared/services/message-alerts.service.js',
      '@tcecommon/reports-service': 'http://tce-commondev.tce.govrn/app/shared/services/reports.service.js',


      //Components
      '@tcecommon/login': 'http://tce-commondev.tce.govrn/app/pages/login/login/login.component.js',
      '@tcecommon/autenticar': 'http://tce-commondev.tce.govrn/app/pages/login/autenticar/autenticar.component.js',
      '@tcecommon/esqueci-senha': 'http://tce-commondev.tce.govrn/app/pages/login/esqueci-senha/esqueci-senha.component.js',
      '@tcecommon/relogar': 'http://tce-commondev.tce.govrn/app/pages/login/relogar/relogar.component.js',
      '@tcecommon/dashboard-routing': 'http://tce-commondev.tce.govrn/app/dashboard/dashboard.routing.js',
      '@tcecommon/dashboard-profile': 'http://tce-commondev.tce.govrn/app/pages/profile/profile.component.js',

      //Buttons
      '@tcecommon/btn-consultar': 'http://tce-commondev.tce.govrn/app/shared/components/btn-consultar/btn-consultar.component.js',
      '@tcecommon/btn-limpar': 'http://tce-commondev.tce.govrn/app/shared/components/btn-limpar/btn-limpar.component.js',
      '@tcecommon/btn-voltar': 'http://tce-commondev.tce.govrn/app/shared/components/btn-voltar/btn-voltar.component.js',

      //pipes

      '@tcecommon/cpfcnpj-nome-pipe': 'http://tce-commondev.tce.govrn/app/shared/pipes/masks/cpfcnpj-nome.pipe.js',
      '@tcecommon/cpfcnpj-pipe': 'http://tce-commondev.tce.govrn/app/shared/pipes/masks/cpfcnpj.pipe.js',
      '@tcecommon/currency-pipe': 'http://tce-commondev.tce.govrn/app/shared/pipes/masks/currency.pipe.js',
      '@tcecommon/custom-format-pipe': 'http://tce-commondev.tce.govrn/app/shared/pipes/masks/custom-format.pipe.js',
      '@tcecommon/date-pipe': 'http://tce-commondev.tce.govrn/app/shared/pipes/masks/date.pipe.js',
      '@tcecommon/decimal-pipe': 'http://tce-commondev.tce.govrn/app/shared/pipes/masks/decimal.pipe.js',

      '@tcecommon/order-by': 'http://tce-commondev.tce.govrn/app/shared/pipes/order-by/order-by.pipe.js',


      '@tcecommon/filter': 'http://tce-commondev.tce.govrn/app/shared/pipes/filter/filter.pipe.js',

      //Layouts
      '@tcecommon/dashboard': 'http://tce-commondev.tce.govrn/app/dashboard/dashboard.component.js',
      '@tcecommon/header': 'http://tce-commondev.tce.govrn/app/dashboard/header/header.component.js',
      '@tcecommon/menu-side': 'http://tce-commondev.tce.govrn/app/dashboard/menu-side/menu-side.component.js',
      '@tcecommon/menu-modulos-paginas': 'http://tce-commondev.tce.govrn/app/dashboard/menu-side/menu-modulos-paginas/menu-modulos-paginas.component.js',

      //Diretivas
      '@tcecommon/page-view-directive': 'http://tce-commondev.tce.govrn/app/shared/directives/page-view/page-view.directive.js',


      // other libraries
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },


    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);