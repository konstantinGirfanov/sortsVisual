export default class BubbleSort {
    nums: number[];
    maxNumber: number = 0;
    constructor(count: number, maxNumber: number) {
        this.nums = [];
        for (let i = 0; i < count; i++) {
            const newNumber = Math.floor(Math.random() * maxNumber)
            this.nums[i] = newNumber;
            if (newNumber > this.maxNumber) {
                this.maxNumber = newNumber;
            }
        }
    }
    
    Sort() {
        for (let i = 0; i < this.nums.length - 1; i++) {
            for (let j = 0; j < this.nums.length - 1; j++) {
                if (this.nums[i] > this.nums[j]) {
                    const temp: number = this.nums[i];
                    this.nums[i] = this.nums[j];
                    this.nums[j] = temp;
                }
            }
        }
    }
}