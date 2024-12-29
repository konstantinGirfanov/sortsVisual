import {SortElement} from '../src/Components/App';
export class BubbleSort {

    public static GetSortSteps(data: SortElement[]): SortElement[][] {
        const nums = Array.from(data,
            (data) => { return data.num });
        const newSteps: SortElement[][] = [];

        for (let j = nums.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                const newNumbers: SortElement[] = Array.from(nums, (e) => { return { num: e, color: '#5CCCCC' } });
                newNumbers[i].color = 'red';
                newNumbers[i + 1].color = 'red';
                newSteps.push(newNumbers);

                if (nums[i] > nums[i + 1]) {
                    const temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;

                    const newNumbers: SortElement[] = Array.from(nums, (e) => { return { num: e, color: '#5CCCCC' } });
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
    public static newSteps: SortElement[][] = [];

    private static CreateStep(index: number, element: SortElement, beginArray: SortElement[]): void {

        beginArray[index - 1] = {
            num: element.num,
            color: element.color
        };
        this.newSteps.push(
            Array.from(beginArray, (e, index) => {
                return {
                    num: e.num,
                    color: index === index - 1 ? 'green' : '#5CCCCC'
                };
            }));
    }

    static merge(left: SortElement[], right: SortElement[], beginArray: SortElement[], lIndex: number) {

        const resultArray = [];
        let leftIndex = 0,
            rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex].num < right[rightIndex].num) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
            this.CreateStep(lIndex + leftIndex + rightIndex, resultArray[resultArray.length - 1], beginArray);

            console.log(this.newSteps);
        }

        while (leftIndex < left.length) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
            this.CreateStep(lIndex + leftIndex + rightIndex, resultArray[resultArray.length - 1], beginArray);
        }
        
        while (rightIndex < right.length) {
            resultArray.push(right[rightIndex]);
            rightIndex++;
            this.CreateStep(lIndex + leftIndex + rightIndex, resultArray[resultArray.length - 1], beginArray);
        }

        return resultArray;
    }

    public static GetSortSteps(data: SortElement[],
        leftIndex: number,
        rightIndex: number,
        beginData: SortElement[]): SortElement[] {

        const nums: number[] = Array.from(data, (data) => { return data.num });
        
        if (nums.length === 1) {
            this.newSteps.push(
                Array.from(beginData, (e, index) => {
                    return { num: e.num, color: index === leftIndex ? 'green' : '#5CCCCC' };
                }));
            return Array.from(nums, (e) => { return { num: e, color: 'green' } });
        }
        
        const middle = Math.floor(data.length / 2);
        const leftArray = data.slice(0, middle);
        const rightArray = data.slice(middle);

        return this.merge(this.GetSortSteps(leftArray, leftIndex, middle, beginData),
            this.GetSortSteps(rightArray, leftIndex + middle, rightIndex, beginData),
            beginData, leftIndex);

        //return newSteps;
    }
}