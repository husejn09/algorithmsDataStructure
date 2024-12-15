package com.aqua.algorithmsDataStructures.controllers;
import org.springframework.web.bind.annotation.*;
import com.aqua.algorithmsDataStructures.services.*;

@RestController
@RequestMapping("/algorithms")
public class AlgorithmController {

    private final LinearSearchService linearSearchService;
    private final BinarySearchService binarySearchService;
    private final BubbleSortService bubbleSortService;
    private final SelectionSortService selectionSortService;
    private final InsertionSortService insertionSortService;

    public AlgorithmController(LinearSearchService linearSearchService, BinarySearchService binarySearchService,
                               BubbleSortService bubbleSortService, SelectionSortService selectionSortService,
                               InsertionSortService insertionSortService) {
        this.linearSearchService = linearSearchService;
        this.binarySearchService = binarySearchService;
        this.bubbleSortService = bubbleSortService;
        this.selectionSortService = selectionSortService;
        this.insertionSortService = insertionSortService;
    }



    @GetMapping("/linearSearch")
    public int linearSearch(){
        int [] array = {9,1,8,2,7,3,6,4,5};
        int value = 4;
        return linearSearchService.linearSearchMetrics(array, value);
    }


    @GetMapping("/binarySearch")
    public int binarySearch(){
        int [] array = {1,2,3,4,5,6,7,8,9,10};
        int target = 7;
        return binarySearchService.binarySearchMetrics(array, target);
    }

    @GetMapping("/bubbleSort")
    public int[] bubbleSort(){
        int [] array = {9,1,8,2,7,3,6,4,5};
        return bubbleSortService.bubbleSortMetrics(array);
    }

    @GetMapping("/selectionSort")
    public int[] selectionSort(){
        int [] array = {8,9,7,1,3,2,5,4,6};
        return selectionSortService.selectionSortMetrics(array);
    }

    @GetMapping("/insertionSort")
    public int[] insertionSort(){
        int [] array = {9,1,8,2,7,3,6,5,4};
        return insertionSortService.insertionSortMetrics(array);
    }

}
