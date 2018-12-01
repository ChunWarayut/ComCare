import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public books;
  database = firebase.database().ref('posts');

  key = firebase.database().ref('posts').push().key;
  
  color = 'darkgrey';
  constructor(db: AngularFireDatabase,
    public router: Router) {
   // this.books = db.list('/posts').valueChanges();
    db.list('/posts').valueChanges().subscribe(_data => {
      this.books = _data.reverse()
    })
}

  ngOnInit() {
  }

  onClick(Username,name) {
    const ttx = {
      Username: Username || 'anonymous',
      Content: name || 'ไม่ระบุ',
      Times: Date.now(),
      Like: 0,
      UnLike: 0,
      ID:this.key
    };
    const update ={}
    update [this.key] = ttx
    this.database.update(update);
    this.router.navigate(['/'])
  }

  onLike(user) {
    user.Like++
    console.log(user);
    console.log(user.ID);
    this.database.child(user.ID).update({Like:user.Like})

  }
  onUnLike(user) {
    user.UnLike++
    this.database.child(user.ID).update({UnLike:user.UnLike})

  }
}
