import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-pratique',
  templateUrl: './information-pratique.component.html',
  styleUrls: ['./information-pratique.component.scss']
})
export class InformationPratiqueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickNavigateHome(){
    this.router.navigate(['Home']);
  }
}
