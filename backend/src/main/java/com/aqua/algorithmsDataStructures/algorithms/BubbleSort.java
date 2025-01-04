package com.aqua.algorithmsDataStructures.algorithms;

public class BubbleSort {
    // how bubbleSort works
    public int[] bubbleSort(int[] array){
        for(int i=0; i < array.length; i++){
            for(int j=0; j < array.length - i - 1; j++){
                if(array[j] > array[j+1]){
                    int temp = array[j]; //temporary variable
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    }

}
