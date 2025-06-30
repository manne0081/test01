import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cdk-dialog-overview-example-dialog.html',
  styleUrls: ['./cdk-dialog-overview-example-dialog.css']
})
export class DialogComponent {
  @Input() initialValue = '';
  @Output() closed = new EventEmitter<string | null>();

  value = '';
dialogRef: any;

  ngOnInit() {
    this.value = this.initialValue;
  }

  confirm() {
    this.closed.emit(this.value);
  }

  cancel() {
    this.closed.emit(null);
  }

  @HostListener('document:keydown.escape') onEscape() {
    this.cancel();
  }

  @HostListener('document:keydown.enter') onEnter() {
    this.confirm();
  }
}
