import { View } from "@tarojs/components";
import { Button, Image } from "@antmjs/vantui";
import { useUserStore } from "@/stores/user-store";
import { useEffect } from "react";
import Taro from "@tarojs/taro";

const Profile = () => {
  const user = useUserStore.use.user();
  const removeUser = useUserStore.use.removeUser();

  useEffect(() => {
    if (!user?.userName)
      Taro.navigateTo({
        url: "/pages/package-a/login/index",
      });
  }, [user?.userName]);

  return (
    <View>
      <View className='mt-10 px-4 w-full flex flex-col items-center'>
        <Image src={user?.avatar ?? ""} round width={200} height={200} />
        <View className='mt-4'>{user?.userName}</View>
        <View className='mt-4 mb-8'>{user?.role}</View>
        {user?.userName && (
          <Button type='default' onClick={removeUser}>
            Logout
          </Button>
        )}
      </View>
    </View>
  );
};

export default Profile;
