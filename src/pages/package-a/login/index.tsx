import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'
import Taro from '@tarojs/taro'
import { useEffect } from 'react'
import UserApi from '@/api/user'

export default function Index() {
  useEffect(() => {

  }, [])

  const handleClick = () => {
    Taro.showToast({ title: '登录成功' })
    UserApi.login({
      name: '18158202087',
      password: 'fujfun.88',
    }).then(res => {
      console.log(res)
    })
  }

  return (
    <View className='index'>
      <View>
        <Button type='primary' onClick={handleClick}>Login</Button>
      </View>
    </View>
  )
}
