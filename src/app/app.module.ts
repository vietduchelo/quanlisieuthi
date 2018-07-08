import { TokenService } from './models/Services/token.service';
import { LoginService } from './models/Services/login/login.service';
import { UserService } from './models/Services/userservices/user.service';
import { XuathangComponent } from './../../quanlisieuthi/src/app/layout/xuathang/xuathang.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NhaphangComponent } from './layout/nhaphang/nhaphang.component';
import { ThongkeComponent } from './layout/thongke/thongke.component';
import { QlnhanvienComponent } from './layout/qlnhanvien/qlnhanvien.component';
import { LayoutTopComponent } from './layout/layout-top/layout-top.component';
import { MenuComponent } from './layout/menu/menu.component';
import { RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {APP_BASE_HREF} from '@angular/common';
import { BanhangComponent } from './layout/banhang/banhang.component';
import { HangtonkhoComponent } from './layout/hangtonkho/hangtonkho.component';
import { DanhmucsanphamComponent } from './layout/danhmucsanpham/danhmucsanpham.component';
import { NhaphanphoiComponent } from './layout/nhaphanphoi/nhaphanphoi.component';
import { ThemnhaphanphoiComponent } from './layout/nhaphanphoi/themnhaphanphoi/themnhaphanphoi.component';
import { HoadonbanhangComponent } from './layout/hoadonbanhang/hoadonbanhang.component';
import { ThemdanhmucsanphamComponent } from './layout/danhmucsanpham/themdanhmucsanpham/themdanhmucsanpham.component'
import { SuanhaphanphoiComponent } from './layout/nhaphanphoi/suanhaphanphoi/suanhaphanphoi.component';
import { SuadanhmucsanphamComponent } from './layout/danhmucsanpham/suadanhmucsanpham/suadanhmucsanpham.component';
import { XoadanhmucsanphamComponent } from './layout/danhmucsanpham/xoadanhmucsanpham/xoadanhmucsanpham.component';
import { XoanhaphanphoiComponent } from './layout/nhaphanphoi/xoanhaphanphoi/xoanhaphanphoi.component';
import { SuachitiethoadonComponent } from './layout/hoadonbanhang/suachitiethoadon/suachitiethoadon.component';
import { XoachitiethoadonComponent } from './layout/hoadonbanhang/xoachitiethoadon/xoachitiethoadon.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
    // import {ToastModule} from 'ng2-toastr/ng2-toastr';
    // import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    RegisterComponent,
    BanhangComponent,
    HangtonkhoComponent,
    DanhmucsanphamComponent,
    NhaphanphoiComponent,
    ThemnhaphanphoiComponent,
    HoadonbanhangComponent,
    ThemdanhmucsanphamComponent,
    SuanhaphanphoiComponent,
    SuadanhmucsanphamComponent,
    XoadanhmucsanphamComponent,
    XoanhaphanphoiComponent,
    SuachitiethoadonComponent,
    XoachitiethoadonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {
        canActivate:[LoginService],
        path: 'doashboard', component: LayoutComponent, children: [
        {path:'hangtonkho', component: HangtonkhoComponent},
        {path: 'banhang', component: BanhangComponent},
        {path: 'nhaphang', component: NhaphangComponent},
        {path: 'thongkechitieu', component: ThongkeComponent},
        {path: 'hoadonbanhang', component: HoadonbanhangComponent, children: [
        {path: 'suahoadon', component: SuachitiethoadonComponent},
        {path: 'xoahoadon', component: XoachitiethoadonComponent}
        ]},
        {path: 'nhaphanphoi', component: NhaphanphoiComponent, children: [
          {path: 'suanhaphanphoi/:id', component: SuanhaphanphoiComponent},
          {path: 'xoanhaphanphoi', component: XoanhaphanphoiComponent},
        ]},
        {path: 'themnhaphanphoi', component: ThemnhaphanphoiComponent},
        {path: 'doanhmucsanpham', component: DanhmucsanphamComponent},
        {path: 'themdanhmucsanpham', component: ThemdanhmucsanphamComponent},
        {path: 'suadanhmuc', component: SuadanhmucsanphamComponent},
        {path: 'xoadanhmuc', component: XoadanhmucsanphamComponent},
  
      ]},
    
    ]),
    FormsModule,
    HttpModule,
   
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, UserService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }