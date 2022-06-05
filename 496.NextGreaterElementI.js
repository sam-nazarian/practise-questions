/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    const idxToValMap = new Map(); // idx : val
    const valToIdxMap = new Map(); // val : idx
    for(let i=0; i<nums2.length; i++){
        idxToValMap.set(i, nums2[i]);
        valToIdxMap.set(nums2[i], i);
    }

    const res = [];

    console.log(valToIdxMap)

    console.log(idxToValMap)
    for(let i=0; i<nums1.length; i++){
        const idx = valToIdxMap.get(nums1[i]);
        console.log(idx)

        //now keep adding to idx, & check if it's val is greater than nums1[i](curr elm)
        res.push( nextGreaterElement(idx, nums1[i]) );
    }


    /** go through every idx of map until a greater elm can be found if not found then return -1*/
    function nextGreaterElement(idx, val){
        idx++;

        while(idxToValMap.has(idx)) {
            if(idxToValMap.get(idx) > val) return idxToValMap.get(idx);
            idx++;
        }

        return -1;
    }



    return res;
    console.log(res)
    // console.log(valToIdxMap)
    // console.log(idxToValMap)

    // console.log(nextGreaterElement(0,1))
    // console.log(res)
};

nextGreaterElement([4,1,2], [1,3,4,2])