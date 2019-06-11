import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import _ from 'underscore';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedCity: any;
  bankDetails: any;
  originalVal:any;
  searchCriteria:any;
  cities = [
    { name: "Bangalore", value: "BANGALORE" },
    { name: "Mumbai", value: "MUMBAI" },
    { name: "Chennai", value: "CHENNAI" }
  ];
  constructor(public navCtrl: NavController, public api: Api) {
  }

  selectChanged(e) {
    let self= this;
    console.log("Selected city::", this.selectedCity);
    self.api.get(self.selectedCity.value).subscribe((res: any) => {
      console.log("res::");
      console.log(res);
      self.bankDetails = res;
      self.originalVal = res;
    });
  }

  searchQuery(){
    let self = this;
    console.log("Searching for::", self.searchCriteria);
    self.bankDetails = _.filter(self.originalVal, function (bankData: any) { 
      return (
        ((bankData.bank_name).toLowerCase()).indexOf((self.searchCriteria).toLowerCase()) > -1 || 
        ((bankData.branch).toLowerCase()).indexOf((self.searchCriteria).toLowerCase()) > -1 ||
        ((bankData.ifsc).toLowerCase()).indexOf((self.searchCriteria).toLowerCase()) > -1 
        ); 
    });
  }
}
