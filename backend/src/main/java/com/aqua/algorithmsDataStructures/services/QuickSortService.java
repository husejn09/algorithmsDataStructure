package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.QuickSort;
import com.aqua.algorithmsDataStructures.models.AlgorithmMetricsResponse;
import org.springframework.stereotype.Service;

@Service
public class QuickSortService {
    private final QuickSort sort;

    public QuickSortService(){
        this.sort = new QuickSort();
    }

    public AlgorithmMetricsResponse quickSortMetrics(int [] array, int start, int end){
        Runtime runtime = Runtime.getRuntime();
        runtime.gc();

        // start time and memory
        long memoryBefore = runtime.totalMemory() - runtime.freeMemory();
        long startTime = System.nanoTime();

        // start sorting
        int[] arrayFromSort = sort.quickSort(array, start, end);

        //time and memory after execution
        long memoryAfter = runtime.totalMemory() - runtime.freeMemory();
        long endTime = System.nanoTime();

        //calculating time and memory
        double timeTaken = (double)(endTime - startTime)  / 1000000.0; // divide with 1 000 000 for ms
        double memoryTaken = (double) (memoryAfter - memoryBefore) / (1024.0 * 1024.0); // divide with 1024*1024 for MB

        AlgorithmMetricsResponse response = new AlgorithmMetricsResponse();
        response.setTimeTaken(timeTaken);
        response.setMemoryUsage(memoryTaken);


        return response;
    }
}
