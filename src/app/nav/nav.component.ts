import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navSlide() {
    const nav = <HTMLElement>document.querySelector('.nav-links');
    const burger = <HTMLElement>document.querySelector('.burger');
    const navLinks = <HTMLElement>document.querySelectorAll('.nav-links li');
    //Toggle Nav 
    console.log(nav);
    nav.classList.toggle('nav-active');
    // Animate Links 
    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
      }
    });
    // Burger animation 
    burger.classList.toggle('toggle');
  }

}
