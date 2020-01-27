import { Component, Host, Element, Event, EventEmitter, h } from '@stencil/core';
import { Gesture, GestureConfig, createGesture, createAnimation } from "@ionic/core";

@Component({
  tag: 'app-swipe-delete',
  styleUrl: 'swipe-delete.css'
})
export class SwipeDelete {

  @Element() hostElement: HTMLElement;
  @Event() deleted: EventEmitter;
  private gesture: Gesture;

  async componentDidLoad(){

    const innerItem = this.hostElement.querySelector('ion-item');
    const style = innerItem.style;
    const windowWidth = window.innerWidth;

    const hostDeleteAnimation = createAnimation()
    .addElement(this.hostElement)
    .duration(200)
    .easing('ease-out')
    .fromTo('height', '48px', '0');

    const options: GestureConfig = {
      el: this.hostElement,
      gestureName: 'swipe-delete',
      onStart: () => {
        style.transition = "";
      },
      onMove: (ev) => {
        if(ev.deltaX > 0){
          style.transform = `translate3d(${ev.deltaX}px, 0, 0)`;
        }
      },
      onEnd: (ev) =>{
        style.transition = "0.2s ease-out";

        if(ev.deltaX > 150){
          style.transform = `translate3d(${windowWidth}px, 0, 0)`;

          hostDeleteAnimation.play()

          hostDeleteAnimation.onFinish(() => {
            this.deleted.emit(true);
          })
          
        } else {
          style.transform = ''
        }
      }
    }

    this.gesture = await createGesture(options);
    this.gesture.enable();
  }

  disconnectedCallback(){
    if(this.gesture){
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }

  render() {
    return (
      <Host style={{display: `grid`, backgroundColor: `#2ecc71`}}>
        <div style={{gridColumn: `1`, gridRow: `1`, display: `grid`, alignItems: `center`}}>
          <ion-icon name="archive" style={{marginLeft: `20px`, color: `#fff`}}></ion-icon>
        </div>
        <ion-item style={{gridColumn: `1`, gridRow: `1`}}>
          <slot></slot>
        </ion-item>
      </Host>
    );
  }

}
