/* eslint-disable */
import { Card } from "@antmjs/vantui";
import { View } from "@tarojs/components";

export default function Demo() {
  // 商品数据数组
  const products = [
    {
      id: 1,
      title: "商品标题1",
      price: "2.00",
      num: "2",
      desc: "描述信息1",
      thumb: "https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
    },
    {
      id: 2,
      title: "商品标题2",
      price: "3.50",
      num: "1",
      desc: "描述信息2",
      thumb: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
    },
    {
      id: 3,
      title: "商品标题3",
      price: "5.20",
      num: "3",
      desc: "描述信息3",
      thumb: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
    }
  ];

  return (
    <>
      <View className="p-4 space-y-4">
        {products.map(product => (
          <Card
            key={product.id}
            num={product.num}
            price={product.price}
            desc={product.desc}
            title={product.title}
            thumb={product.thumb}
          />
        ))}
      </View>
    </>
  );
}
