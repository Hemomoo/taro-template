import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

const NextTickComponent = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    Taro.nextTick(() => {
      setIsMounted(true);
    });
  }, []);

  return isMounted ? <>{children}</> : null;
};

export default NextTickComponent;
