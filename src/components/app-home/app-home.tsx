import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() items = [];

  componentWillLoad(){
    this.items = [
      {uid: 1, subject: 'hello', message: 'hello'},
      {uid: 2, subject: 'hello', message: 'hello'},
      {uid: 3, subject: 'hello', message: 'hello'},
      {uid: 4, subject: 'hello', message: 'hello'},
      {uid: 5, subject: 'hello', message: 'hello'},
      {uid: 6, subject: 'hello', message: 'hello'},
      {uid: 7, subject: 'hello', message: 'hello'},
      {uid: 8, subject: 'hello', message: 'hello'},
      {uid: 9, subject: 'hello', message: 'hello'},
      {uid: 10, subject: 'hello', message: 'hello'}
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
            <app-swipe-delete key={item.uid} onDeleted={() => this.handleDelete(item.uid)}>{item.subject}</app-swipe-delete>
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
