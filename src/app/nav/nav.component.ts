import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('navLinks', { static: false }) myNavs: ElementRef;
  @ViewChild('burger', { static: false }) myBurger: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  navSlide() {
    // Step 1: use View Child to get access to the element
    const nav = this.myNavs.nativeElement;
    nav.classList.toggle('nav-active');
    const navLinks = nav.querySelectorAll('.nav-links li');
    console.log(navLinks);
    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      }
    });
    const burger = this.myBurger.nativeElement;
    burger.classList.toggle('toggle');
  }


  // const nav = <HTMLElement>document.querySelector('.nav-links');
  // const burger = <HTMLElement>document.querySelector('.burger');
  // const navLinks = <HTMLElement>document.querySelectorAll('.nav-links li');
  // //Toggle Nav 
  // console.log(nav);
  // nav.classList.toggle('nav-active');
  // // Animate Links 
  // navLinks.forEach((link, index) => {
  //   console.log(index);
  //   if (link.style.animation) {
  //     link.style.animation = ''
  //   } else {
  //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
  //   }
  // });
  // // Burger animation 
  // burger.classList.toggle('toggle');
}

