import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dars5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dars5.component.html',
  styleUrl: './dars5.component.scss'
})
export class Dars5Component {
  title:string = `Schematiq`
  title2:string | number = `Quatation #1234`
  adress: string | number = `123 Anywehre St, Any`
  nuber: string | number = ` +123 456 789 `
  email: string | number = `CityHello @realyslim`

  letsinzia : string | number =`Date: 01/02/2020`
  valid: string | number = `Vaild Until: 02/25/2020`
  customer :string | number = `Customer Id: 123456789`

  show: string = `Custommer`
  show2: string | number = `PROJECT DESCRIPTION 2`

  tdesc: string = `DESCRIPTION`
  total:string =`TOTAL`
  terms: string = `TERMS & CONDITIONS`
  termsTotal: number = 1500
  ftitle:string = `Place Accseptance this for on quate`
  fstr:string =`signature over printed name `
  fstr1:string = `Data signed`

  customers = [
    new cust('Arnold', '123 AnyWhere Any City', `999999999`),
    ]
  desc =[
    new descs(`Description of ite, pr service goes here `, 500),
    new descs(`Description of ite, pr service goes here`, 500),
    new descs(`Description of ite, pr service goes here`, 500)
  ]

  term =[
    new terms(`Above information is not an invoice and only `, 1500),
    new terms(`Above information is not an invoice and`, 0),
    new terms(`Above information is not an invoice and only  `, 1800)
  ]

}


class cust{
  names:string;
  adresss:string | number;
  numers: string;

  constructor(name:string, adress:string | number, number : string){
    this.names = name;
    this.adresss = adress; 
    this.numers = number
  }
}
class descs{
  desc:string;
  descTotal:number;
  constructor(desc:string, descTotal:number){
    this.desc = desc;
    this.descTotal = descTotal
  }
}

class terms{
  tname:string;
  tTotal:number;
  constructor(tname:string, tTotal:number){
    this.tname = tname;
    this.tTotal = tTotal;
  }
}
