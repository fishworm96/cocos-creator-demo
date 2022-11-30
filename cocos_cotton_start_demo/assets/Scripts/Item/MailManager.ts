
import { _decorator, Component, Node } from 'cc';
import { ItemTypeEnum } from '../Enum';
import { ItemManager } from './ItemManager';
const { ccclass, property } = _decorator;

@ccclass('MailManager')
export class MailManager extends ItemManager {
  status: ItemStatusEnum
  type: ItemTypeEnum = ItemTypeEnum.Mail
}