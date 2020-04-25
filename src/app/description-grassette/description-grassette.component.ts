import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description-grassette',
  templateUrl: './description-grassette.component.html',
  styleUrls: ['./description-grassette.component.scss']
})
export class DescriptionGrassetteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickNavigateHome(){
    this.router.navigate(['Home']);
  }
}
