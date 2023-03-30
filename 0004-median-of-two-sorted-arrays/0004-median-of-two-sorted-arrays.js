//works unless there's an empty array. this works on 2000/2094 test cases 
var findMedianSortedArrays = function(nums1, nums2) {
    let track1 = 0;
    let track2 = 0;
    let first = 0;
    let second = 0;
    let length = nums1.length + nums2.length;
    
    if(!nums1 || nums1.length == 0){
        let middle = Math.floor(nums2.length/2);
        return length % 2 == 1 ? nums2[middle] : (nums2[middle] + nums2[middle-1])/2;
    }
     if(!nums2 || nums2.length == 0){
        let middle = Math.floor(nums1.length/2);
        return length % 2 == 1 ? nums1[middle] : (nums1[middle] + nums1[middle-1])/2;
    }
 
 
    for(let i = 0; i < length/2 + 1; i++){
        first = second;
        if(track2 >= nums2.length || nums1[track1] <= nums2[track2]){
            second = nums1[track1];
            track1++;
        }else{
            second = nums2[track2];
            track2++;
        }
        console.log(`first = ${first}, second ${second}`)
    }

    return length % 2 == 1 ? first : (first + second)/2;
    
};


