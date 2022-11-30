import { ItemStatusEnum, ItemTypeEnum } from './../Enum/index';

import { _decorator, Component, Node, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ItemManager')
export class ItemManager extends Component {
  status: ItemStatusEnum
  type: ItemTypeEnum

  @property(SpriteFrame)
  sceneSf: SpriteFrame = null

  @property(SpriteFrame)
  inventorySf: SpriteFrame = null

  start() {
    this.node.on(Node.EventType.TOUCH_START, this.touchEnd, this)
  }

  touchEnd() {
    if (this.status === ItemStatusEnum.Scene) {
      this.status = ItemStatusEnum.Inventory
    }
  }
}
