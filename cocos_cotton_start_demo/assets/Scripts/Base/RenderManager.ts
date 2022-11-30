import { EventEnum } from './../Enum/index';
import { _decorator, Component, Node } from 'cc';
import EventManager from '../Runtime/EventManager';
const { ccclass, property } = _decorator;

@ccclass('KeyManager')
export abstract class RenderManager extends Component {

  onLoad() {
    EventManager.Instance.on(EventEnum.Render, this.render, this)
  }

  onDestroy() {
    EventManager.Instance.off(EventEnum.Render, this.render)
  }

  start() {
    this.render()
  }

  abstract render(): void

}