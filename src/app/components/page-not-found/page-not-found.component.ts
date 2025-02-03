import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

interface Basket {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

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

  private basket: Basket = { x: 250, y: 350, width: 100, height: 15, speed: 60 };
  private stars: Star[] = [];
  private gameOver = false;
  private gameRunning = false;
  private animationFrameId: any;
  private starIntervalId: any;
  private speedMultiplier: number = 1;
  private speedIncreaseRate: number = 0.0001; // Slow and gradual increase
  private maxSpeed: number = 2.3;

  score = 0;
  highScore = this.getHighScoreFromLocalStorage();
  private colors = ['#FF5733', '#33FF57', '#3357FF', '#F4C724', '#C733FF'];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d')!;
      this.setupEventListeners();
      this.updateScoreUI();
      this.setCanvasSize();
      
    }
  }

  private setCanvasSize() {
    // Adjust canvas size based on container's actual width/height
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.basket.x = this.canvas.width / 2 - this.basket.width / 2;
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
    this.speedMultiplier = 1;
    this.basket.x = this.canvas.width / 2;
    this.stars = [];
    this.score = 0;
    this.gameOver = false;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.updateScoreUI();
  }

  private createStar() {
    const star: Star = { x: Math.random() * this.canvas.width, y: 0, radius: 10, speed: 3 + Math.random() * 2 };
    this.stars.push(star);
  }

  private drawBasket() {
    this.ctx.fillStyle = '#FFA500';
    this.ctx.fillRect(this.basket.x, this.basket.y, this.basket.width, this.basket.height);
  }

  private drawStars() {
    this.stars.forEach((star) => {
      this.ctx.fillStyle = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      // Scale star radius based on canvas size
    const radius = (Math.min(this.canvas.width, this.canvas.height) * 0.02);
    this.ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private updateGame() {
    if (!this.gameRunning) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.stars.forEach((star, index) => {
      star.y += star.speed * this.speedMultiplier;;
      this.checkStarCollision(star, index);
      this.checkStarOutOfBounds(star);
    });
    // Gradually increase speed
    if (this.speedMultiplier < this.maxSpeed) {
      this.speedMultiplier += this.speedIncreaseRate;
    }

    this.drawBasket();
    this.drawStars();

    if (!this.gameOver) {
      this.animationFrameId = requestAnimationFrame(() => this.updateGame());
    }
  }

  private checkStarCollision(star: Star, index: number) {
    if (
      star.y + star.radius > this.basket.y &&
      star.x > this.basket.x &&
      star.x < this.basket.x + this.basket.width
    ) {
      this.stars.splice(index, 1);
      this.score++;
      this.updateScoreUI();
    }
  }

  private checkStarOutOfBounds(star: Star) {
    if (star.y > this.canvas.height) {
      this.gameOver = true;
      this.stopGame();
      // alert(`Game Over! You caught ${this.score} stars.`);
      this.saveHighScore();
      this.displayGameOver(); 
    }
  }
  private displayGameOver() {

  this.ctx.fillStyle = this.colors[Math.floor(Math.random() * this.colors.length)];
  this.ctx.font = '40px Roboto';
  this.ctx.textAlign = 'center';
  this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2); 
  }

  private updateScoreUI() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
      scoreElement.innerHTML = `Score: ${this.score} | High Score: ${this.highScore}`;
    }
  }

  private saveHighScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('highScore', this.highScore.toString());
      this.updateScoreUI();
    }
  }

  private getHighScoreFromLocalStorage(): number {
    if (isPlatformBrowser(this.platformId)) {
      const storedScore = localStorage.getItem('highScore');
      return storedScore ? parseInt(storedScore, 10) : 0;
    }
    return 0; 
  }

  private setupEventListeners() {
    if (this.canvas) {
      this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
      this.canvas.addEventListener('touchmove', this.handleTouchMove.bind(this));
      document.addEventListener('keydown', (event) => this.moveBasket(event));
    }
  }

  private moveBasket(event: KeyboardEvent) {
    if (!this.gameRunning) return;

    if (event.code === 'ArrowLeft' && this.basket.x > 0) this.basket.x -= this.basket.speed;
    if (event.code === 'ArrowRight' && this.basket.x + this.basket.width < this.canvas.width) this.basket.x += this.basket.speed;
  }

  private handleMouseMove(event: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    this.basket.x = Math.max(0, Math.min(mouseX - this.basket.width / 2, this.canvas.width - this.basket.width));
  }

  private handleTouchMove(event: TouchEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const touch = event.touches[0];
    this.basket.x = touch.clientX - rect.left - this.basket.width / 2;
  }
  
}
