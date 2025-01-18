package com.aqua.algorithmsDataStructures.services;

import com.aqua.algorithmsDataStructures.models.AlgorithmMetricsResponse;
import com.aqua.algorithmsDataStructures.algorithms.LinearSearch;
import org.springframework.stereotype.Service;

@Service
public class LinearSearchService {
    private final LinearSearch search;

    // constructor
    public LinearSearchService() {
        this.search = new LinearSearch();
    }

/* // function for checking time and memory usage
        */
public AlgorithmMetricsResponse linearSearchMetrics(int[] array, int value) {
    Runtime runtime = Runtime.getRuntime();
    runtime.gc();
    // start time and memory tracking
    long memoryBefore = runtime.totalMemory() - runtime.freeMemory();
    long startTime = System.nanoTime();

    int valueFromSearch = search.linearSearch(array, value);

    // end time and memory
    long endTime = System.nanoTime();
    long memoryAfter = runtime.totalMemory() - runtime.freeMemory();

    // calculated time and memory
    long timeTaken = (endTime - startTime);
    long memoryTaken = (memoryAfter - memoryBefore) ; // (in MB if divided by 1024*1024)

    AlgorithmMetricsResponse response = new AlgorithmMetricsResponse();
    response.setValueFromSearch(valueFromSearch);
    response.setTimeTaken(timeTaken); // (in ms if divided by 1 000 000)
    response.setMemoryUsage(memoryTaken);
    return response;
}



   /* public int linearSearchMetrics(int[] array, int value){
        return search.linearSearch(array, value);
    }*/
}
