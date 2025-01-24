import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private scrollListener!: () => void;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.onScroll();
  }


  onScroll(){
    
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = () => {
        const navLinks = document.querySelectorAll('nav a');
        if (window.scrollY > 0) {
          navLinks.forEach(link => link.classList.add('text-color'));
        } else {
          navLinks.forEach(link => link.classList.remove('text-color'));
        }
      };
      window.addEventListener('scroll', this.scrollListener);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

}
