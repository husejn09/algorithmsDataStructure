package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.SelectionSort;
import com.aqua.algorithmsDataStructures.models.AlgorithmMetricsResponse;
import org.springframework.stereotype.Service;

@Service
public class SelectionSortService {

    private final SelectionSort sort;

    public SelectionSortService(){
        this.sort = new SelectionSort();
    }

    public AlgorithmMetricsResponse selectionSortMetrics(int [] array){
        Runtime runtime = Runtime.getRuntime();
        runtime.gc();

        // start time and memory
        long memoryBefore = runtime.totalMemory() - runtime.freeMemory();
        long startTime = System.nanoTime();

        // start sorting
        int[] arrayFromSort = sort.selectionSort(array);

        //time and memory after execution
        long memoryAfter = runtime.totalMemory() - runtime.freeMemory();
        long endTime = System.nanoTime();

        //calculating time and memory
        long timeTaken = (endTime - startTime); // divide with 1 000 000 for ms
        long memoryTaken = (memoryAfter - memoryBefore); // divide with 1024*1024 for MB

        AlgorithmMetricsResponse response = new AlgorithmMetricsResponse();
        response.setTimeTaken(timeTaken);
        response.setMemoryUsage(memoryTaken);
        response.setArrayFromSort(arrayFromSort);

        return response;
    }




}
