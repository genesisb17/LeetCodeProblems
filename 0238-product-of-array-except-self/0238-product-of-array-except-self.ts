function productExceptSelf(arr: number[]): number[] {
    if (arr.length <= 1) {
        throw new Error();
    }
    let product = 1;
    let out = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        out[i] = product;
        product *= arr[i];
    }

    product = arr[arr.length - 1]
    for (let j = arr.length - 2; j >= 0; j--) {
        let curr = out[j];
        out[j] = product * curr
        product *= arr[j];
    }
    return out;

};