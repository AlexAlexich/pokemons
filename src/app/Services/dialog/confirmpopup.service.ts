import { HostListener, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { DialogComponent } from 'src/app/Widgets/dialog/dialog.component';
import { DialogFormat } from 'src/app/Widgets/dialog/dialogFormat';

@Injectable({
  providedIn: 'root',
})
export class ConfirmpopupService {
  constructor(private dialog: MatDialog) { }

  openPopUp(
    title: string = 'Confimr',
    text: string = 'Are you sure you want to leave'
  ): Observable<boolean> {
    let popupModel = new DialogFormat();
    popupModel.title = title;
    popupModel.text = text;
    const dialogRef = this.dialog.open(DialogComponent, {
      data: popupModel,
    });
    return dialogRef.componentInstance.clicked.asObservable();
  }
}
