package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.InsertionSort;
import org.springframework.stereotype.Service;

@Service
public class InsertionSortService {
    private final InsertionSort sort;

    public InsertionSortService(){
        this.sort = new InsertionSort();
    }

    public int[] insertionSortMetrics(int[] array){
        return sort.insertionSort(array);
    }
}
