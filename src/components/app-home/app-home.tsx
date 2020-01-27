import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() items = [];

  componentWillLoad(){
    this.items = [
      {uid: 1, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 2, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 3, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 4, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 5, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 6, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 7, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 8, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 9, subject: 'Swipe to Delete', message: 'Swipe to Delete'},
      {uid: 10, subject: 'Swipe to Delete', message: 'Swipe to Delete'}
    ]
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          {this.items.map((item) => (
            <app-swipe-delete key={item.uid} onDeleted={() => this.handleDelete(item.uid)}><p>{item.subject}</p></app-swipe-delete>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

  handleDelete(uid){

    this.items = this.items.filter((item) => {
      return item.uid !== uid;
    });

    this.items = [...this.items];

  }
}
