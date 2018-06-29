import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { XuathangComponent } from './layout/xuathang/xuathang.component';
import { NhaphangComponent } from './layout/nhaphang/nhaphang.component';
import { ThongkeComponent } from './layout/thongke/thongke.component';
import { QlnhanvienComponent } from './layout/qlnhanvien/qlnhanvien.component';
import { LayoutTopComponent } from './layout/layout-top/layout-top.component';
import { MenuComponent } from './layout/menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    XuathangComponent,
    NhaphangComponent,
    ThongkeComponent,
    QlnhanvienComponent,
    LayoutTopComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'layout', component: LayoutComponent},
      {path: 'doashboard', component: DashboardComponent}
     
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }