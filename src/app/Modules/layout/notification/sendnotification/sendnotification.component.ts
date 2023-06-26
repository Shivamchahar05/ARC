import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendnotification',
  templateUrl: './sendnotification.component.html',
  styleUrls: ['./sendnotification.component.scss']
})
export class SendnotificationComponent implements OnInit {
  isVisible: any;
  isSelected: boolean = true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  profile(){
    this.route.navigate(["/layout/profile"])
  }

}
