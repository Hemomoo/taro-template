// 登录

import { View } from "@tarojs/components";
import { Form, Field, Button, Toast, CellGroup } from "@antmjs/vantui";
import UserApi from "@/api/user";
import { useUserStore } from "@/stores/user-store";
import { useState } from "react";
import Taro from "@tarojs/taro";

export default function Login() {
  const { setToken } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("18100000000");
  const [password, setPassword] = useState("123456");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setToastMessage("用户名和密码不能为空");
      setShowToast(true);
      return;
    }

    setLoading(true);
    UserApi.login({
      name: username,
      password: password
    })
      .then((res: any) => {
        setToken(res.token);
        setToastMessage("登录成功");
        setShowToast(true);
        // 登录成功后跳转到首页
        setTimeout(() => {
          Taro.switchTab({ url: "/pages/index/index" });
        }, 1500);
      })
      .catch((err) => {
        console.error("登录失败", err);
        setToastMessage("登录失败，请检查用户名和密码");
        setShowToast(true);
        setTimeout(() => {
          Taro.switchTab({ url: "/pages/index/index" });
        }, 1500);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View className="login-container p-4">
      <View className="login-title text-center text-2xl font-bold my-8">用户登录</View>

      <Form className="mx-4">
        <CellGroup inset>
          <Field
            value={username}
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
            onChange={(e) => setUsername(e.detail)}
          />
          <Field
            value={password}
            type="password"
            required
            clearable
            label="密码"
            placeholder="请输入密码"
            onChange={(e) => setPassword(e.detail)}
          />
        </CellGroup>

        <View className="mt-8 mx-4">
          <Button
            type="primary"
            block
            round
            loading={loading}
            onClick={handleLogin}
          >
            登录
          </Button>
        </View>
      </Form>
    </View>
  );
}


