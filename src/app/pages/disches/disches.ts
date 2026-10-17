import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-disches',
  styleUrl: './disches.scss',
  templateUrl: './disches.html',
})
export class Disches {}
