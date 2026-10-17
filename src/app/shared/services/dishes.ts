import { Service, signal } from '@angular/core';
import { Dish } from '../interfaces/dish';
import { dishes as DEFAULT_DISHES } from '../data/db-dishes';

const DISHES_STORAGE_KEY = 'dishes';

@Service()
export class Dishes {
  readonly dishes = signal<Dish[]>(this.load());

  add(name: string): boolean {
    const trimmed = name.trim();
    if (trimmed === '') return false;
    this.update([...this.dishes(), { name: trimmed }]);
    return true;
  }

  rename(index: number, name: string): boolean {
    const trimmed = name.trim();
    if (trimmed === '' || !this.dishes()[index]) return false;
    this.update(this.dishes().map((dish, i) => (i === index ? { name: trimmed } : dish)));
    return true;
  }

  remove(index: number): void {
    this.update(this.dishes().filter((_, i) => i !== index));
  }

  random(): Dish | undefined {
    const list = this.dishes();
    return list[Math.floor(Math.random() * list.length)];
  }

  private update(dishes: Dish[]): void {
    this.dishes.set(dishes);
    this.save(dishes);
  }

  private load(): Dish[] {
    try {
      const stored = localStorage.getItem(DISHES_STORAGE_KEY);
      if (stored) return JSON.parse(stored) as Dish[];
    } catch {
      // kaputte Daten -> Defaults
    }
    const defaults = [...DEFAULT_DISHES];
    this.save(defaults);
    return defaults;
  }

  private save(dishes: Dish[]): void {
    try {
      localStorage.setItem(DISHES_STORAGE_KEY, JSON.stringify(dishes));
    } catch {
      // Speicher nicht verfügbar
    }
  }
}
