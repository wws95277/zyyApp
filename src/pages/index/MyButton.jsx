import React, { Component }  from 'react'
// 引入 Swiper, SwiperItem 组件
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'




class MyButton extends Component {
    gytang(){
    Taro.navigateTo({url:'../gytang/gytt'})
  }
  ghao(){
    Taro.navigateTo({url:'../ghao/ghao'})
  }
  Step1(){
    Taro.navigateTo({url:'../diagnosises/DStep1'})
  }
  render () {
    return (
    <View className='index' class="btn">
      <Button class='btn1' size="mini" onClick={this.gytang.bind(this)} >国医堂</Button>
      <Button class='btn2' size="mini" onClick={this.ghao.bind(this)} >预约挂号</Button>
      <Button class='btn3' size="mini"  onClick={this.Step1.bind(this)}>智能导诊</Button>

      </View>
    )
  }
}
export default MyButton
