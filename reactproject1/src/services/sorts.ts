import {SortElementInfo} from "../types/data.ts";

export class BubbleSort {

    public static GetSortSteps(data: SortElementInfo[]): SortElementInfo[][] {
        const nums = Array.from(data,
            (data) => {
                return data.num
            });
        const newSteps: SortElementInfo[][] = [];

        for (let j = nums.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {

                if (nums[i] > nums[i + 1]) {
                    const temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;

                    const newNumbers: SortElementInfo[] = Array.from(nums, (e) => {
                        return {num: e, color: '#5CCCCC'}
                    });
                    newNumbers[i].color = 'green';
                    newNumbers[i + 1].color = 'green';
                    newSteps.push(newNumbers);
                }
            }
        }

        return newSteps;
    }
}

export class MergeSort {
    private static newSteps: SortElementInfo[][] = [];

    public static GetSteps() {
        const steps: SortElementInfo[][] = Array.from(MergeSort.newSteps);
        MergeSort.newSteps = [];
        return steps;
    }

    private static CreateStep(index: number, element: SortElementInfo, beginArray: SortElementInfo[]): void {

        beginArray[index - 1] = {
            num: element.num,
            color: element.color
        };
        this.newSteps.push(Array.from(beginArray));
    }

    private static merge(left: SortElementInfo[], right: SortElementInfo[], beginArray: SortElementInfo[], lIndex: number) {

        const resultArray = [];
        let leftIndex = 0,
            rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex].num < right[rightIndex].num) {
                resultArray.push(left[leftIndex]);
                this.CreateStep(lIndex + ++leftIndex + rightIndex, resultArray[resultArray.length - 1], beginArray);
            } else {
                resultArray.push(right[rightIndex]);
                this.CreateStep(lIndex + leftIndex + ++rightIndex, resultArray[resultArray.length - 1], beginArray);
            }
        }

        while (leftIndex < left.length) {
            resultArray.push(left[leftIndex]);
            this.CreateStep(lIndex + ++leftIndex + rightIndex, resultArray[resultArray.length - 1], beginArray);
        }

        while (rightIndex < right.length) {
            resultArray.push(right[rightIndex]);
            this.CreateStep(lIndex + leftIndex + ++rightIndex, resultArray[resultArray.length - 1], beginArray);
        }

        return resultArray;
    }

    public static MergeSort(data: SortElementInfo[],
                            leftIndex: number,
                            rightIndex: number,
                            beginData: SortElementInfo[]): SortElementInfo[] {

        const nums: number[] = Array.from(data, (data) => {
            return data.num
        });

        if (nums.length === 1) {
            this.newSteps.push(
                Array.from(beginData, (e, index) => {
                    return {num: e.num, color: index === leftIndex ? 'green' : '#5CCCCC'};
                }));
            return Array.from(nums, (e) => {
                return {num: e, color: 'green'}
            });
        }

        const middle = Math.floor(data.length / 2);
        const leftArray = data.slice(0, middle);
        const rightArray = data.slice(middle);

        return this.merge(this.MergeSort(leftArray, leftIndex, middle, beginData),
            this.MergeSort(rightArray, leftIndex + middle, rightIndex, beginData),
            beginData, leftIndex);
    }

    public static GetSortSteps(data: SortElementInfo[]): SortElementInfo[][] {
        MergeSort.MergeSort(data, 0, data.length, [...data]);
        const steps = MergeSort.GetSteps();
        MergeSort.newSteps = [];
        return steps;
    }
}