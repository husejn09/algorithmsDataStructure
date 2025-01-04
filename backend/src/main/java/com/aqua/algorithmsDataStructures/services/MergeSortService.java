package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.MergeSort;
import org.springframework.stereotype.Service;

@Service
public class MergeSortService {

    private final MergeSort sort;

    public MergeSortService(){
        this.sort = new MergeSort();
    }

    public void mergeSortMetrics(int[] array){
        sort.mergeSort(array);
    }
}
