import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.css',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {}
