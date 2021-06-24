import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer-backend',
  templateUrl: './footer-backend.component.html',
  styleUrls: ['./footer-backend.component.css']
})
export class FooterBackendComponent implements OnInit {

  backendStyle = [
    "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",

    "..assets/house-rental-master-backendplugins/fontawesome-free/css/all.min.css",

    "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",

    "..assets/house-rental-master-backend/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css",

    "..assets/house-rental-master-backend/plugins/icheck-bootstrap/icheck-bootstrap.min.css",

    "..assets/house-rental-master-backend/plugins/jqvmap/jqvmap.min.css",

    "..assets/house-rental-master-backend/dist/css/adminlte.min.css",

    "..assets/house-rental-master-backend/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",

    "..assets/house-rental-master-backend/plugins/daterangepicker/daterangepicker.css",

    "..assets/house-rental-master-backend/plugins/summernote/summernote-bs4.min.css",
  ];

  backendScript = [
     "..assets/house-rental-master-backend/plugins/jquery/jquery.min.js",

     "..assets/house-rental-master-backend/plugins/jquery-ui/jquery-ui.min.js",



     "..assets/house-rental-master-backend/plugins/bootstrap/js/bootstrap.bundle.min.js",

     "..assets/house-rental-master-backend/plugins/chart.js/Chart.min.js",

     "..assets/house-rental-master-backend/plugins/sparklines/sparkline.js",

     "..assets/house-rental-master-backend/plugins/jqvmap/jquery.vmap.min.js",
     "..assets/house-rental-master-backend/plugins/jqvmap/maps/jquery.vmap.usa.js",

     "..assets/house-rental-master-backend/plugins/jquery-knob/jquery.knob.min.js",

     "..assets/house-rental-master-backend/plugins/moment/moment.min.js",
     "..assets/house-rental-master-backend/plugins/daterangepicker/daterangepicker.js",

     "..assets/house-rental-master-backend/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js",

     "..assets/house-rental-master-backend/plugins/summernote/summernote-bs4.min.js",

     "..assets/house-rental-master-backend/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js",

     "..assets/house-rental-master-backend/dist/js/adminlte.js",

     "..assets/house-rental-master-backend/dist/js/demo.js",

     "..assets/house-rental-master-backend/dist/js/pages/dashboard.js",
  ];

  

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const CustomJsList = document.querySelectorAll('#custom_js');
        if (CustomJsList.length > 0) {
          CustomJsList.forEach((customJs) => {
            customJs.remove();
          });
        }
        this.load();
      }
    });
  }

  load() {
    if (window.location.pathname.startsWith('/admin')) {
      this.loadStyles(this.backendStyle);
      this.loadScripts(this.backendScript);
    } else {
      this.loadStyles(this.backendStyle);
      this.loadScripts(this.backendScript);
    }
  }
  loadStyles(styles: string[]) {
    for (let i = 0; i < styles.length; i++) {
      const node = document.createElement('link');
      node.type = 'text/css';
      node.rel = 'stylesheet';
      node.href = styles[i];
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  loadScripts(scripts: string[]) {
    for (let i = 0; i < scripts.length; i++) {
      const node = document.createElement('script');
      node.type = 'text/javascript';
      node.async = false;
      node.id = 'custom_js';
      node.src = scripts[i];
      document.getElementsByTagName('body')[0].appendChild(node);
    }

}

}
