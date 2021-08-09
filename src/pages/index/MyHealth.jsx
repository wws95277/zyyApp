import React, { Component }  from 'react'
import {View,Text} from '@tarojs/components'
import './MyHealth.less'




class MyHealth extends Component {

  render () {
    return (
    <View className='at-row Health' class="btn">
      <view className='at-col at-col-6 home-mid-left'>
      <view className="zy1">
        <Text className="zzz at-col--wrap">中医健康管理知识宣教</Text>
      </view>
    </view>
      <view className='at-col at-col-6 right'>
        <view className="tz2">
          <Text className="xxx">【体质辨识】</Text>
          <Text className="ccc">判定量表</Text>
        </view>
      </view>
    </View>
    )
  }
}
export default MyHealth
