import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.scss']
})
export class ExpoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickNavigateHome(){
    this.router.navigate(['Home']);
  }
}
