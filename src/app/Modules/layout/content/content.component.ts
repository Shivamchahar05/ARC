import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  profile(){
    this.route.navigate(["/layout/profile"])
  }

}
