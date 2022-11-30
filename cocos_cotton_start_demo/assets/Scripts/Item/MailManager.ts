
import { _decorator, Component, Node } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum';
import { ItemManager } from './ItemManager';
const { ccclass, property } = _decorator;

@ccclass('MailManager')
export class MailManager extends ItemManager {
  label = "船票"
  status: ItemStatusEnum
  type: ItemTypeEnum = ItemTypeEnum.Mail
}