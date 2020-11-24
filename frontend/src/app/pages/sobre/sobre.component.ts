import { Component, OnInit } from '@angular/core';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  faFortAwesome = faFortAwesome
  faGithub = faGithub
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
       
  }

  scrollTop() {
    window.scroll(0, 0);
  }
}