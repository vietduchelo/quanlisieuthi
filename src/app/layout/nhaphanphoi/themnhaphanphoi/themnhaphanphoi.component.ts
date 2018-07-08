import { Component, OnInit } from '@angular/core';
import { NhaphanphoiService } from '../../../models/Services/nhaphanphoi/nhaphanphoi.service';
import { ICompanys } from './../../../models/Entity/companys.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-themnhaphanphoi',
  templateUrl: './themnhaphanphoi.component.html',
  styleUrls: ['./themnhaphanphoi.component.scss']
})
export class ThemnhaphanphoiComponent implements OnInit {

  constructor(private nhapp: NhaphanphoiService, private toast:ToastrService ) { }

  ngOnInit() {
  }
  company: ICompanys = {
    name: '',
    logo : '',
    address: '',
    phone: ''
  }
  createNhaPP(){
    this.nhapp.createNPP(this.company).subscribe(res => {
     if(res){
      this.toast.success('Ok','Thêm thành công');
      
     }
     else
     {
      this.toast.error('Ok','Thêm thất bại');
     }

    })
    
  }


}
