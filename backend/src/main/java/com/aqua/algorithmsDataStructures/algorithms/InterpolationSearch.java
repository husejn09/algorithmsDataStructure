package com.aqua.algorithmsDataStructures.algorithms;

public class InterpolationSearch {

    public int interpolationSearch(int [] array, int target){
        int high = array.length - 1;
        int low = 0;

        while(target >= array[low] && target<=array[high] && low <= high){
            int probe = low + (high-low) * (target - array[low]) / (array[high] - array[low]);

            if(array[probe] == target){
                return probe;
            } else if (array[probe] < target) {
                low = probe + 1;
            }
            else {
                high = probe - 1;
            }

        }

        return -1;
    }
}
