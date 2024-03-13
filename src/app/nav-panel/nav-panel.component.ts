import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.css',
})
export class NavPanelComponent {
  modulename = 'NavPanel';
}
