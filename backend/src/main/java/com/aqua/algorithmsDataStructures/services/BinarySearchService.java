package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.BinarySearch;
import com.aqua.algorithmsDataStructures.models.AlgorithmMetricsResponse;
import org.springframework.stereotype.Service;

@Service
public class BinarySearchService {
    private final BinarySearch search;

    public BinarySearchService(){
        this.search = new BinarySearch();
    }



    public AlgorithmMetricsResponse binarySearchMetrics(int [] array, int target){
        Runtime runtime = Runtime.getRuntime();
        runtime.gc();

        //start the tracking of time and memory
        long memoryBefore = runtime.totalMemory() - runtime.freeMemory();
        long startTime = System.nanoTime();

        int valueFromSearch = search.binarySearch(array, target);

        //end time and end memory
        long memoryAfter = runtime.totalMemory() - runtime.freeMemory();
        long endTime = System.nanoTime();

        //calculating time and memory
        double timeTaken = (double)(endTime - startTime)  / 1000000; // divide with 1 000 000 for ms
        double memoryTaken = (double) (memoryAfter - memoryBefore) / (1024.0 * 1024.0); // divide with 1024*1024 for MB

        AlgorithmMetricsResponse response = new AlgorithmMetricsResponse();
        response.setTimeTaken(timeTaken);
        response.setMemoryUsage(memoryTaken);
        response.setValueFromSearch(valueFromSearch);

        return response;
    }
}
