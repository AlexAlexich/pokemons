import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, switchMap, map, mergeMap } from 'rxjs';
import { CommonComponent } from '../Models/common-component/common.component';
import { ConfirmpopupService } from './dialog/confirmpopup.service';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuardService implements CanDeactivate<CommonComponent> {
  constructor() { }
  canDeactivate(
    component: CommonComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return component.canDeactivate()
  }
}
