import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthMenuUserComponent } from './auth-menu-user/auth-menu-user.component';

import { AuthService } from '../services/auth.service';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthRegisterComponent } from '../auth-register/auth-register.component';

import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-auth-menu-button',
  templateUrl: './auth-menu-button.component.html',
  styleUrls: ['./auth-menu-button.component.scss'],
})
export class AuthMenuButtonComponent implements OnInit {

  // add public accessor to auth.currentUser$ and protect auth methods
  get currentUser$(): BehaviorSubject<User> { return this.auth.currentUser$; }

  constructor(
    private auth: AuthService,
    public modalController: ModalController
    ) {
    }

  async presentmodal(ev: any) {
    const modal = await this.modalController.create({
      component: AuthMenuUserComponent,
    });
    return await modal.present();
  }

  async presentLogin(ev: any) {
    const modal = await this.modalController.create({
      component: AuthLoginComponent,
    });
    return await modal.present();
  }

  async presentRegister(ev: any) {
    const modal = await this.modalController.create({
      component: AuthRegisterComponent,
    });
    return await modal.present();
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit() {}

}
