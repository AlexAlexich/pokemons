import { Component, EventEmitter, Inject, OnInit, Output, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveGuardService } from 'src/app/Services/leave-guard.service';
import { DialogFormat } from './dialogFormat';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})

export class DialogComponent implements OnInit {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogFormat) { }

  ngOnInit() { }
  onYes() {
    this.clicked.emit(true)
    this.dialogRef.close();
  }
  onNo() {
    this.clicked.emit(false)
    this.dialogRef.close();
  }
}
