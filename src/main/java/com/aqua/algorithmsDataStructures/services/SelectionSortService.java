package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.SelectionSort;
import org.springframework.stereotype.Service;

@Service
public class SelectionSortService {

    private final SelectionSort sort;

    public SelectionSortService(){
        this.sort = new SelectionSort();
    }

    public int[] selectionSortMetrics(int[] array){
        return sort.selectionSort(array);
    }
}
