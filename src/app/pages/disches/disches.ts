import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { Dishes } from '../../shared/services/dishes';

@Component({
  imports: [Header, Footer, FormsModule],
  selector: 'app-disches',
  styleUrl: './disches.scss',
  templateUrl: './disches.html',
})
export class Disches {
  protected readonly dishService = inject(Dishes);

  private readonly addDialog = viewChild.required<ElementRef<HTMLDialogElement>>('addDialog');
  private readonly renameDialog = viewChild.required<ElementRef<HTMLDialogElement>>('renameDialog');

  protected newName = '';
  protected renameName = '';
  private renameIndex: number | null = null;

  protected openAdd(): void {
    this.addDialog().nativeElement.showModal();
  }

  protected add(): void {
    if (!this.dishService.add(this.newName)) return;
    this.newName = '';
    this.addDialog().nativeElement.close();
  }

  protected openRename(index: number): void {
    this.renameIndex = index;
    this.renameName = this.dishService.dishes()[index].name;
    this.renameDialog().nativeElement.showModal();
  }

  protected confirmRename(): void {
    if (this.renameIndex === null || !this.dishService.rename(this.renameIndex, this.renameName)) return;
    this.renameDialog().nativeElement.close();
  }

  protected remove(index: number): void {
    this.dishService.remove(index);
  }

  protected closeOnBackdrop(event: Event, dialog: HTMLDialogElement): void {
    if (event.target === event.currentTarget) dialog.close();
  }
}
