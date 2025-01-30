import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private basket = { x: 250, y: 350, width: 110, height: 20, speed: 70 };
  private stars: any[] = [];
  private score = 0;
  private gameOver = false;
  private gameRunning = false;
  private animationFrameId: any;
  private starIntervalId: any;

  ngAfterViewInit(): void {
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
  }

  startGame() {
    if (this.gameRunning) return;

    this.resetGame();
    this.gameRunning = true;
    this.starIntervalId = setInterval(() => this.createStar(), 1000);
    this.updateGame();
  }

  stopGame() {
    this.gameRunning = false;
    clearInterval(this.starIntervalId);
    cancelAnimationFrame(this.animationFrameId);
  }

  private resetGame() {
    this.basket.x = 250;
    this.stars = [];
    this.score = 0;
    this.gameOver = false;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private createStar() {
    let star = { x: Math.random() * this.canvas.width, y: 0, radius: 10, speed: 2.5 + Math.random() * 2 };
    this.stars.push(star);
  }

  private drawBasket() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.basket.x, this.basket.y, this.basket.width, this.basket.height);
  }

  private drawStars() {
    this.ctx.fillStyle = 'yellow';
    this.stars.forEach((star) => {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private updateGame() {
    if (!this.gameRunning) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.stars.forEach((star, index) => {
      star.y += star.speed;

      // Check if star is caught
      if (
        star.y + star.radius > this.basket.y &&
        star.x > this.basket.x &&
        star.x < this.basket.x + this.basket.width
      ) {
        this.stars.splice(index, 1);
        this.score++;
      }

      // Check if star reaches the bottom
      if (star.y > this.canvas.height) {
        this.gameOver = true;
        this.stopGame();
        alert(`Game Over! You caught ${this.score} stars.`);
      }
    });

    this.drawBasket();
    this.drawStars();

    if (!this.gameOver) {
      this.animationFrameId = requestAnimationFrame(() => this.updateGame());
    }
  }

  private moveBasket(event: KeyboardEvent) {
    if (!this.gameRunning) return;

    if (event.code === 'ArrowLeft' && this.basket.x > 0) this.basket.x -= this.basket.speed;
    if (event.code === 'ArrowRight' && this.basket.x + this.basket.width < this.canvas.width) this.basket.x += this.basket.speed;
  }

  constructor() {
    document.addEventListener('keydown', (event) => this.moveBasket(event));
  }
}
