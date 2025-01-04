package com.aqua.algorithmsDataStructures.services;

import com.aqua.algorithmsDataStructures.algorithms.LinearSearch;
import org.springframework.stereotype.Service;

@Service
public class LinearSearchService {
    private final LinearSearch search;

    // constructor
    public LinearSearchService() {
        this.search = new LinearSearch();
    }

/* // code for checking time and memory usage, will implement this at the end when I allow user to enter size of the
      array and random populate it
      ADD "return AlgorithmMetricsResponse.linearSearchMetrics(array, value);" to the controller when needed

    public class AlgorithmMetricsResponse  {
        private int valueFromSearch;
        private long timeTaken;
        private long memoryUsage;


        public int getValueFromSearch() {
            return valueFromSearch;
        }

        public void setValueFromSearch(int valueFromSearch) {
            this.valueFromSearch = valueFromSearch;
        }

        public long getTimeTaken() {
            return timeTaken;
        }

        public void setTimeTaken(long timeTaken) {
            this.timeTaken = timeTaken;
        }

        public long getMemoryUsage() {
            return memoryUsage;
        }

        public void setMemoryUsage(long memoryUsage) {
            this.memoryUsage = memoryUsage;
        }
    }

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
        long memoryTaken = (memoryAfter - memoryBefore); // (in MB if divided by 1024*1024)

        AlgorithmMetricsResponse response = new AlgorithmMetricsResponse();
        response.setValueFromSearch(valueFromSearch);
        response.setTimeTaken(timeTaken / 1000000); // (in ms if divided)
        response.setMemoryUsage(memoryTaken);
        return response;
    } */


    public int linearSearchMetrics(int[] array, int value){
        return search.linearSearch(array, value);
    }
}
