import { Injectable } from '@angular/core';
import { CanActivate, Router,} from '@angular/router';
import { ServiceService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:ServiceService,private route:Router){}
  canActivate() {
    if(this.api.isLoggedIn()){
    return true;
  }else{
    this.route.navigate(['login'])
    return false;
  }
  }

}
