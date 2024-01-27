// Import necessary modules and services
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html', // Replace with the path to your HTML file
  styleUrls: ['./modal.component.css'], // Replace with the path to your CSS file
})
export class ModalComponent implements OnInit {
  modalClosed = true;

  ngOnInit() {
    this.checkAndDisplayModal();
  }

  closeModal() {
    this.modalClosed = true;
  }

  checkAndDisplayModal() {
    let pageViews = localStorage.getItem('pageViews');
    this.closeModal();

    if (!pageViews) {
      pageViews = '1';
    } else {
      const parsedPageViews = parseInt(pageViews, 10);
      pageViews = (parsedPageViews + 1).toString();
    }

    localStorage.setItem('pageViews', pageViews);

    if (parseInt(pageViews, 10) % 100 === 0) {
      this.modalClosed = false;
    }
  }
}
