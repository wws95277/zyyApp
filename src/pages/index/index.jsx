import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtSearchBar } from 'taro-ui'
import './index.less'
import MySwiper from './MySwiper'
import MyButton from './MyButton'
import MyHealth from "./MyHealth";


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtSearchBar  placeholder="搜索国医堂"/>
        <MySwiper/>
        <MyButton/>
        <MyHealth/>
      </View>
    )
  }
}

export default Index

