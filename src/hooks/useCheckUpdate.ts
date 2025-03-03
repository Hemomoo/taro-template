import Taro, { useDidShow } from "@tarojs/taro";

/**
 * 小程序更新管理钩子
 * 该hook用于在小程序生命周期中检查和应用更新
 */
const useCheckUpdate = () => {
  // 获取小程序更新管理器
  const updateManager = Taro.getUpdateManager();

  // 在组件显示时执行更新检查和处理
  useDidShow(() => {
    // 确保在下一个事件循环中执行更新检查逻辑
    Taro.nextTick(() => {
      // 监听更新检查结果
      updateManager.onCheckForUpdate((res) => {
        res.hasUpdate && console.log("---小程序有更新版本 🚀---");
      });

      // 监听版本更新准备就绪事件
      updateManager.onUpdateReady(() => {
        // 显示模态框提示用户更新
        Taro.showModal({
          title: "更新提示",
          content: "新版本已经准备好，是否重启应用？",
          showCancel: false,
          success: (res) => {
            if (res.confirm) {
              // 新版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          },
        });
      });

      // 监听版本更新失败事件
      updateManager.onUpdateFailed(() => {
        // 新版本下载失败，提示重新打开
        Taro.showModal({
          title: "更新失败",
          content: "请删除小程序后重新打开",
        });
      });
    });
  });
};

export default useCheckUpdate;
