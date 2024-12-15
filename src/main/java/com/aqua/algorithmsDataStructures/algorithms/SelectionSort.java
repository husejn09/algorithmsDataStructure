package com.aqua.algorithmsDataStructures.algorithms;

public class SelectionSort {
    //how selectionSort works
    public int[] selectionSort(int[] array){
        for(int i=0; i< array.length-1;i++){
            int min = i;
            for(int j=i+1; j < array.length; j++){
                if(array[min] > array[j])
                    min = j;
            }
            int temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
        return array;
    }
}
