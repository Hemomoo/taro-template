// 登录

import { View } from "@tarojs/components";
import UserApi from "@/api/user";
import { useUserStore } from "@/stores/user-store";

export default function  Login (){


  const { setToken } = useUserStore();

  const Login = () => {
    UserApi.login({
      name: "18100000000",
      password: "123456"
    }).then((res:any) => {
      setToken(res.token);
    });
  };

  return (
    <View>
      <View onClick={Login}>登录</View>
    </View>
  )
}


