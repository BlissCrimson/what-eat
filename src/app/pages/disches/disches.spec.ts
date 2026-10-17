import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Disches } from './disches';

describe('Disches', () => {
  let component: Disches;
  let fixture: ComponentFixture<Disches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disches],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Disches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
