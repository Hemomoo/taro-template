import Taro from "@tarojs/taro";
// import { OSS_ROOT } from "src/constant/index";

export const getCookie = () => {};

// interface IGnerateImage {
//   (imgType: "icon" | "image", fileName: string): string;
// }
// export const generateImage: IGnerateImage = (imgType, fileName) => {
//   return spliceUrl([OSS_ROOT, imgType + "/", fileName]);
// };

/**
 * 复制消息到剪贴板
 *
 * 此函数旨在将用户指定的消息复制到系统的剪贴板中，使用了Taro的API来实现复制功能
 * 当复制操作成功时，会显示一个"复制成功"的提示；如果复制失败，则显示一个"复制失败"的提示
 *
 * @param msg 需要被复制到剪贴板的字符串消息
 */
export const copy = (msg: string) => {
  Taro.setClipboardData({
    data: msg,
    success: () => Taro.showToast({ title: "复制成功" }),
    fail: () => Taro.showToast({ title: "复制失败" }),
  });
};
