import { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

/**
 * 为给定的 store 创建选择器
 * 
 * 该函数的目的在于扩展一个已存在的 store，使其具有选择器功能
 * 选择器是一种方便的方法，用于从 store 的状态中提取特定的数据片段
 * 
 * @param _store 一个符合 UseBoundStore<StoreApi<{}>> 类型的 store
 *               这个 store 通常由 create() 函数创建
 * @returns 返回扩展后的 store，包含自动生成的选择器
 */
const createSelectors = <S extends UseBoundStore<StoreApi<{}>>>(_store: S) => {
  let store = _store as WithSelectors<typeof _store>

  store.use = {}

  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }
  return store
}

export default createSelectors