package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.BinarySearch;
import org.springframework.stereotype.Service;

@Service
public class BinarySearchService {
    private final BinarySearch search;

    public BinarySearchService(){
        this.search = new BinarySearch();
    }

    public int binarySearchMetrics(int[] array, int target){
        return search.binarySearch(array, target);
    }
}
