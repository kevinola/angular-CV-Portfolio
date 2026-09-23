import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-first-project');
}




/*
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-first-project');
  protected readonly menuOpen = signal(false);

  openNav(): void {
    this.menuOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeNav(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  onWindowResize(): void {
    if (window.innerWidth > 799) {
      this.closeNav();
    }
  }
}
*/