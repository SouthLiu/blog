/**
 * 迭代数组成新数组
 * @param data 需要过滤的值
 * @param callback 处理data数据返回新的值
 */
export interface IRecursionChildrenData<T> {
  children?: T[];
} 
export function handleRecursion<T, Y extends IRecursionChildrenData<Y>>(data: Y[], callback: (item: Y) => T | undefined): T[] {
  const result: T[] = []
  data?.length > 0 && data.forEach((item: Y & IRecursionChildrenData<Y>) => {
    const callbackData = callback(item)
    if (callbackData && item.children && item.children.length > 0) {
      (callbackData as IRecursionChildrenData<T>).children = handleRecursion(item.children, callback)
    }

    callbackData && result.push(callbackData)
  })

  return result
}

