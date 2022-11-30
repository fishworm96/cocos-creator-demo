import { ItemTypeEnum } from './../Enum/index';

import { _decorator, Component, Node } from 'cc';
import { ItemManager } from './ItemManager';
const { ccclass, property } = _decorator;

@ccclass('KeyManager')
export class KeyManager extends ItemManager {
  status: ItemStatusEnum
  type: ItemTypeEnum = ItemTypeEnum.Key
  start() {

  }

}