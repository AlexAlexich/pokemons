import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CommonComponent } from 'src/app/Models/common-component/common.component';
import { ConfirmpopupService } from 'src/app/Services/dialog/confirmpopup.service';

@Component({
  selector: 'app-canleave',
  templateUrl: './canleave.component.html',
  styleUrls: ['./canleave.component.css'],
})
export class CanleaveComponent extends CommonComponent implements OnInit {
  constructor(private popUp: ConfirmpopupService) {
    super();
  }

  ngOnInit() {}
  override canDeactivate(): Observable<boolean> {
    return this.popUp.openPopUp().pipe(
      map((res) => {
        return res;
      })
    );
  }
}
