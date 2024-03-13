import { Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  {
    path: '',
    component: ModalComponent,
  },
  {
    path: '',
    component: NavPanelComponent,
  },
  {
    path: '',
    component:FooterComponent
  }
];
