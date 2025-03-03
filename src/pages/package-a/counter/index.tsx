import { View, Text, Button } from "@tarojs/components";
import { useCounterStore } from "@/stores/counter-store";

export default function Index() {
  const count = useCounterStore.use.count();
  const inc = useCounterStore.use.inc();
  const dec = useCounterStore.use.dec();
  return (
    <View className='flex flex-1 flex-wrap flex-col items-center justify-center gap-4 h-full'>
      <Text className='mt-7'>Counter Page</Text>
      <View className='text-center flex items-center justify-between w-full px-8'>
        <Button type='warn' onClick={dec}>
          Dec
        </Button>
        <Text>{count}</Text>
        <Button type='primary' onClick={inc}>
          Inc
        </Button>
      </View>
    </View>
  );
}
