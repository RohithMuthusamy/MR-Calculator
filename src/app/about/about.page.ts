import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router: Router) { }
pp()
{
this.router.navigate(['/privacypolicy'])
}
contact()
{
  this.router.navigate(['/contact-details'])

}
feedback()
{
  this.router.navigate(['/feedback'])

}
  ngOnInit() {
  }

}
