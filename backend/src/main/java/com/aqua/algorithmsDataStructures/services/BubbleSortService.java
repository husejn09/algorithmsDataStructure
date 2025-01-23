package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.BubbleSort;
import com.aqua.algorithmsDataStructures.models.AlgorithmMetricsResponse;
import org.springframework.stereotype.Service;

@Service
public class BubbleSortService {
    private final BubbleSort sort;

    public BubbleSortService (){
        this.sort = new BubbleSort();
    }

    public AlgorithmMetricsResponse bubbleSortMetrics(int [] array){
        Runtime runtime = Runtime.getRuntime();
        runtime.gc();

        // start time and memory
        long memoryBefore = runtime.totalMemory() - runtime.freeMemory();
        long startTime = System.nanoTime();

        // start sorting
        sort.bubbleSort(array);

        //time and memory after execution
        long memoryAfter = runtime.totalMemory() - runtime.freeMemory();
        long endTime = System.nanoTime();

        //calculating time and memory
        double timeTaken = (double)(endTime - startTime)  / 1000000.0; // divide with 1 000 000 for ms
        double memoryTaken = (double) (memoryAfter - memoryBefore) / (1024.0 * 1024.0); // divide with 1024*1024 for MB

        AlgorithmMetricsResponse response = new AlgorithmMetricsResponse();
        response.setTimeTaken(timeTaken / 1000); // divide by 1000 to get Seconds
        response.setMemoryUsage(memoryTaken);
        return response;
    }

}
