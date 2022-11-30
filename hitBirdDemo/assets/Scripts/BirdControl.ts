const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // 生命值
  hp: number = 1;
  // 目标位置 +-110,185
  targetPos: cc.Vec2 | null = null;
  // 速度
  speed: number = 50;
  // 游戏结束回调
  dieCallBack: Function
  // 加分回调
  addScoreCallBack: Function

  start() {
    this.fly()
  }

  fly() {
    // 速记目标点
    this.targetPos = cc.v2(Math.random() * 220 - 110, 170);
    // 翻转精灵
    if (this.targetPos.x > this.node.x) {
      this.node.scaleX = -1;
    }
    // 移动 速度*时间=距离
    let move = cc.moveTo((this.targetPos.y - this.node.y) / this.speed, this.targetPos)
    let seq = cc.sequence(move, cc.callFunc(() => {
      // 游戏结束
      this.dieCallBack()
    }))
    this.node.runAction(seq)
    // 如果废除了屏幕 
    // 。。。游戏结束
    // 如果触摸了精灵
    this.node.on(cc.Node.EventType.TOUCH_START, (event) => {
      // 如果还活着
      if (this.hp > 0) {
        // 血量减少
        this.hp--
        // 停止飞翔动作
        this.node.stopAllActions()
        // 向下掉落
        this.getComponent(cc.Animation).play("die")
        let move_die = cc.moveTo(this.node.y / (this.speed * 2), cc.v2(this.node.x, 0))
        this.node.runAction(cc.sequence(move_die, cc.callFunc(() => {
          // 销毁自身
          this.node.destroy()
        })))
        // 加分
        this.addScoreCallBack()
      }
    })
  }

  // update (dt) {}
}
