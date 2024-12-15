package com.aqua.algorithmsDataStructures.algorithms;

public class LinearSearch {
    // how linearSearch works
    public int linearSearch(int[] array, int value){
        for(int i=0; i<array.length; i++){
            if(array[i] == value) {
                return (i);
            }
        }
        return -1;
    }
}
