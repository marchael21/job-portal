import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrls: ['./guest-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GuestHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
