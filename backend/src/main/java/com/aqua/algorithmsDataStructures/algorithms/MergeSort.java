package com.aqua.algorithmsDataStructures.algorithms;

public class MergeSort {
    //how mergeSort works
    public int[] mergeSort(int [] array){

        int arrLength = array.length;

        if(arrLength <= 1){
            return new int[]{-1};
        }

        int middle = arrLength / 2;
        int[] leftArray = new int[middle];
        int[] rightArray = new int[arrLength - middle];

        int j=0; //for right array
        for(int i = 0; i < arrLength; i++){
            if(i < middle) {
                leftArray[i] = array[i];
            }
            else {
                rightArray[j] = array[i];
                j++;
            }
        }
        mergeSort(leftArray);
        mergeSort(rightArray);
        merge(leftArray, rightArray, array);

        return array;
    }


    public void merge(int[] leftArray, int[] rightArray, int[] array){
        int leftSize = array.length / 2;
        int rightSize = array.length - leftSize;
        int i = 0, l = 0, r = 0;

        while (l < leftSize && r < rightSize){
            if(leftArray[l] < rightArray[r]){
                array[i] = leftArray[l];
                i++;
                l++;
            }
            else{
                array[i] = rightArray[r];
                i++;
                r++;
            }
        }
        while (l < leftSize){
            array[i] = leftArray[l];
            i++;
            l++;
        }
        while (r < rightSize){
            array[i] = rightArray[r];
            i++;
            r++;
        }
    }
}
