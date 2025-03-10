import Taro from "@tarojs/taro";
import useCheckUpdate from "./hooks/useCheckUpdate";
import "./app.less";

const env = process.env.TARO_ENV || "weapp";
const track = process.env.UMENG_TRACK || false;

/**
 * 友盟统计初始化
 * 支付宝小程序不支持 useOpenid、autoGetOpenid参数。
*/


const App = ({ children }: React.PropsWithChildren) => {
  useCheckUpdate();

  Taro.setNavigationBarColor({
    frontColor: "#000000",
    backgroundColor: "#ffffff",
    animation: {
      duration: 400,
      timingFunc: "easeIn",
    },
  });


  return (
    <>
      {children}
    </>
  );
};

export default App;
