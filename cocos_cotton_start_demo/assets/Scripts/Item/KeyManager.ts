import { ItemStatusEnum, ItemTypeEnum } from './../Enum/index';

import { _decorator, Component, Node } from 'cc';
import { ItemManager } from './ItemManager';
const { ccclass, property } = _decorator;

@ccclass('KeyManager')
export class KeyManager extends ItemManager {
  label = "信箱钥匙"
  status: ItemStatusEnum
  type: ItemTypeEnum = ItemTypeEnum.Key
  start() {

  }

}