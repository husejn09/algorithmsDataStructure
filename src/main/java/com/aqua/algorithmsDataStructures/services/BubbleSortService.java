package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.BubbleSort;
import org.springframework.stereotype.Service;

@Service
public class BubbleSortService {
    private final BubbleSort sort;

    public BubbleSortService (){
        this.sort = new BubbleSort();
    }

    public int[] bubbleSortMetrics(int[] array){
        return sort.bubbleSort(array);
    }
}
