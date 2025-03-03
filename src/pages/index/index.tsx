import Taro, { useLaunch, useLoad } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { useUserStore } from "@/stores/user-store";

import {
  Button,
  MiniLoginButton,
  MiniPhoneButton,
  MiniUserButton,
} from '@antmjs/vantui'
import "./index.less";

export default function Index() {
  const user = useUserStore.use.user();
  // const { count, inc, dec } = useCounterStore();

  useLaunch(() => {
    console.log('onLaunch')
  })

  useLoad(() => {
    console.log('onLoad')
  })

  return (
    <View className='text-center'>
      <text>你好</text>
      <Button>按钮</Button>
    </View>
  );
}
