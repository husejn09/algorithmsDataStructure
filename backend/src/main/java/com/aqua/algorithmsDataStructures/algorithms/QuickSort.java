package com.aqua.algorithmsDataStructures.algorithms;

public class QuickSort {
    //how quickSort works

    public void quickSort(int[] array, int start, int end){

        if(end <= start) return; // base case

        int pivot = partiton(array, start, end);
        quickSort(array, start, pivot-1);
        quickSort(array, pivot+1, end);
    }

    private int partiton(int[] array, int start, int end){
        int pivot = array[end];
        int i = start - 1;

        for(int j = start; j <= end-1; j++){
            if(array[j] < pivot){
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        i++;
        int temp = array[i];
        array[i] = array[end];
        array[end] = temp;

        return i;
    }
}
