package com.aqua.algorithmsDataStructures.services;

import com.aqua.algorithmsDataStructures.models.AlgorithmMetricsResponse;
import com.aqua.algorithmsDataStructures.algorithms.InterpolationSearch;
import org.springframework.stereotype.Service;

@Service
public class InterpolationSearchService {
    private final InterpolationSearch search;


    public InterpolationSearchService(){
        this.search = new InterpolationSearch();
    }

    public AlgorithmMetricsResponse interpolationSearchMetrics(int[] array, int value) {
        Runtime runtime = Runtime.getRuntime();
        runtime.gc();
        // start time and memory tracking
        long memoryBefore = runtime.totalMemory() - runtime.freeMemory();
        long startTime = System.nanoTime();

        int valueFromSearch = search.interpolationSearch(array, value);

        // end time and memory
        long endTime = System.nanoTime();
        long memoryAfter = runtime.totalMemory() - runtime.freeMemory();

        // calculated time and memory
        double timeTaken = (double)(endTime - startTime)  / 1000000.0; // divide with 1 000 000 for ms
        double memoryTaken = (double) (memoryAfter - memoryBefore) / (1024.0 * 1024.0); // divide with 1024*1024 for MB

        AlgorithmMetricsResponse response = new AlgorithmMetricsResponse();
        response.setValueFromSearch(valueFromSearch);
        response.setTimeTaken(timeTaken); // (in ms if divided by 1 000 000)
        response.setMemoryUsage(memoryTaken);
        return response;
    }
}
