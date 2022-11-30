import BirdControl from "./BirdControl";

const { ccclass, property } = cc._decorator;

// 加分 游戏结束
@ccclass
export default class NewClass extends cc.Component {
  // 小鸟预设体
  @property(cc.Prefab)
  birdPre: cc.Prefab
  // 1s出现一只小鸟
  time: number = 1
  // 分数
  score: number = 0
  // 分数标签
  @property(cc.Label)
  scoreLabel: cc.Label
  // 返回试图
  @property(cc.Node)
  back_view: cc.Node

  start() {
    // 每隔1s创建一只小鸟
    this.node.runAction(
      cc.repeatForever(
        cc.sequence(cc.delayTime(this.time), cc.callFunc(() => {
          // 创建小鸟
          let bird = cc.instantiate(this.birdPre)
          // // 设置父物体
          bird.setParent(this.node)
          // 设置小鸟位置
          bird.y = this.node.y
          bird.x = Math.random() * 220 - 110
          // 飞
          bird.getComponent(BirdControl).fly()
          // 加分回调
          bird.getComponent(BirdControl).addScoreCallBack = () => {
            this.score += 100
            this.scoreLabel.string = this.score + ""
            console.log(this.score)
          }
          // 游戏结束回调
          bird.getComponent(BirdControl).dieCallBack = () => {
            this.node.destroyAllChildren()
            this.node.stopAllActions()
            this.back_view.active = true
          }
        })))
    )
  }

  backView() {
    cc.director.loadScene("start")
  }
  // update (dt) {}
}
