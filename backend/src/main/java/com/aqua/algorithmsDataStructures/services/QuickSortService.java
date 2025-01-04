package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.QuickSort;
import org.springframework.stereotype.Service;

@Service
public class QuickSortService {
    private final QuickSort sort;

    public QuickSortService(){
        this.sort = new QuickSort();
    }

    public void quickSortMetrics(int[] array, int start, int end){
        sort.quickSort(array,start, end);
    }
}
