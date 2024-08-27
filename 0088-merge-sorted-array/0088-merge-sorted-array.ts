/**
 Do not return anything, modify nums1 in-place instead.
 
 
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let spot = nums1.length - n - 1;
    while(n>0){
        if(nums1[spot] > nums2[n-1]){
            nums1[spot + n] = nums1[spot--];
        } else{
            nums1[spot + n] = nums2[--n];
        }
    }
    
};
