import { TestBed } from '@angular/core/testing';
import { Dishes } from './dishes';

describe('Dishes', () => {
  let service: Dishes;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dishes);
  });

  it('lädt Defaults und speichert sie', () => {
    expect(service.dishes().length).toBeGreaterThan(0);
    expect(JSON.parse(localStorage.getItem('dishes')!).length).toBe(service.dishes().length);
  });

  it('fügt hinzu, benennt um und löscht mit Persistenz', () => {
    const count = service.dishes().length;
    expect(service.add('  Test ')).toBe(true);
    expect(service.add('   ')).toBe(false);
    expect(service.dishes()[count].name).toBe('Test');

    service.rename(count, 'Neu');
    expect(JSON.parse(localStorage.getItem('dishes')!)[count].name).toBe('Neu');

    service.remove(count);
    expect(service.dishes().length).toBe(count);
  });

  it('liefert ein zufälliges Gericht', () => {
    expect(service.random()).toBeTruthy();
  });
});
