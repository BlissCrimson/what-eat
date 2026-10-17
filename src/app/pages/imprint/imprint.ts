import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-imprint',
  styleUrl: './imprint.css',
  templateUrl: './imprint.html',
})
export class Imprint {}
