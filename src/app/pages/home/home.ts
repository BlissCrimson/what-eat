import { Component, inject, signal } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { Dish } from '../../shared/interfaces/dish';
import { Dishes } from '../../shared/services/dishes';

@Component({
  imports: [Header, Footer],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  private readonly dishService = inject(Dishes);
  protected readonly currentDish = signal<Dish | undefined>(undefined);

  protected generate(): void {
    this.currentDish.set(this.dishService.random());
  }
}
