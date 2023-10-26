import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  lastLogin: any;

  constructor(
    private db: AngularFirestore,
    private router: Router
    ) { }

  ngOnInit() {
  }
val(value:any)
{  this.lastLogin = new Date();
  this.db.doc(`Feedback/${this.lastLogin}`).set({
    email: value.value.feedbackerEmailid,
    errorTitle:value.value.Title,
    commands:value.value.commands,
    date:this.lastLogin,
    App:'Calculator'
  }).then(() => {
    window.alert('Thanks for your feedback');
    this.router.navigate(['/dashboard']);
  })
}
}
