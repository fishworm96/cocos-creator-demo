import { ItemStatusEnum, ItemTypeEnum } from './../Enum/index';

import { _decorator, Component, Node, SpriteFrame } from 'cc';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('ItemManager')
export class ItemManager extends Component {
  label = "物品"
  type: ItemTypeEnum

  @property(SpriteFrame)
  sceneSf: SpriteFrame = null

  @property(SpriteFrame)
  inventorySf: SpriteFrame = null

  start() {
    this.node.on(Node.EventType.TOUCH_START, this.touchEnd, this)
  }

  onDestroy() {
    this.node.off(Node.EventType.TOUCH_START, this.touchEnd)
  }

  touchEnd() {
    const item = DataManager.Instance.items.find(i => i.type === this.type)

    if (!item) {
      return
    }

    if (item.status === ItemStatusEnum.Scene) {
      item.status = ItemStatusEnum.Inventory
      DataManager.Instance.items = [...DataManager.Instance.items]
    }
    
  }
}
