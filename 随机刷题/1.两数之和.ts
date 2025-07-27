// 1.0 双循环嵌套实现查找 时间复杂度O(n2)
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

// 2.0 哈希表解法 优化时间复杂度O(n)
//     遍历数组 哈希表的key为数组元素，value为数组下标

// 自搓
function twoSum(nums: number[], target: number): number[] {
    // 创建哈希表对象
    let map = new Map<number, number>();
    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 设置键值对，存入哈希表
        map.set(nums[i], i);
    }
    // 遍历哈希表
    for (let j = 0; j < nums.length; j++) {
        // 用get方法查找哈希表中符合要求的健值对，输出结果为值，即下标，找不到即位undefined
        let res = map.get(target - nums[j]);
        // 条件1:res存在
        // 条件2:res在j后面（防止重合，例：[3,2,5]，target=6，没有条件2输出[1,1]）
        if (res && res > j) {
            return [j, res];
        }
    }
    return [-1, -1]
};

// 2.1 
function twoSum(nums: number[], target: number): number[] {
	// 新建哈希表
    let map = new Map<number, number>();
    // 设置变量存储数组长度
    let length = nums.length;
    // 遍历数组
    for (let i = 0; i < length; i++) {
    	// 每遍历到一个数组元素，存为num，下一次循环覆盖
        let num = nums[i];
        // target-num计算补数（即key），map[key]得出value（即索引），不存在为undefined
        let prevIndex = map[target - num];
        // 存在，得到结果
        if (prevIndex !== undefined) {
            return [prevIndex, i];
        }
        // 不存在，map[key]=value，将目前遍历到的数组元素&索引存入哈希表
        map[num] = i;
    }
    return [-1, -1];
};