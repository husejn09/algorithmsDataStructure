package com.aqua.algorithmsDataStructures.controllers;
import com.aqua.algorithmsDataStructures.dto.UserInputsDTO;
import com.aqua.algorithmsDataStructures.dto.UserInputsSortDTO;
import com.aqua.algorithmsDataStructures.models.AlgorithmMetricsResponse;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.aqua.algorithmsDataStructures.services.*;

import java.util.Random;

@RestController
@RequestMapping("/algorithms")
public class AlgorithmController {

    private final LinearSearchService linearSearchService;
    private final BinarySearchService binarySearchService;
    private final BubbleSortService bubbleSortService;
    private final SelectionSortService selectionSortService;
    private final InsertionSortService insertionSortService;
    private final MergeSortService mergeSortService;
    private final QuickSortService quickSortService;
    private final DepthFirstSearchService depthFirstSearchService;
    private final BreadthFirstSearchService breadthFirstSearchService;

    public AlgorithmController(LinearSearchService linearSearchService, BinarySearchService binarySearchService,
                               BubbleSortService bubbleSortService, SelectionSortService selectionSortService,
                               InsertionSortService insertionSortService, MergeSortService mergeSortService,
                               QuickSortService quickSortService, DepthFirstSearchService depthFirstSearchService,
                               BreadthFirstSearchService breadthFirstSearchService) {
        this.linearSearchService = linearSearchService;
        this.binarySearchService = binarySearchService;
        this.bubbleSortService = bubbleSortService;
        this.selectionSortService = selectionSortService;
        this.insertionSortService = insertionSortService;
        this.mergeSortService = mergeSortService;
        this.quickSortService = quickSortService;
        this.depthFirstSearchService = depthFirstSearchService;
        this.breadthFirstSearchService = breadthFirstSearchService;
    }

// generating random array
    private int[] generateArray(int size, int value){
        int[] array = new int[size];
        Random random = new Random();
        for(int i = 0; i< size; i++){
            array[i] = random.nextInt(1000000);
        }
        int randomIndex = random.nextInt(size);
        array[randomIndex] = value;
        return array;
    }
    // generating random array for sort algorithms, it does not need target
    private int[] generateArraySort(int size){
        int[] array = new int[size];
        Random random = new Random();
        for(int i = 0; i<size; i++){
            array[i] = random.nextInt(1000000);
        }
        return array;
    }

// get and post api for linear search
    @GetMapping("/linearSearch")
    public int linearSearch(){
        int [] array = {9,1,8,2,7,3,6,4,5};
        int value = 4;
        return linearSearchService.linearSearchMetrics(array, value).getValueFromSearch();
    }

    @PostMapping("/linearSearch")
    public AlgorithmMetricsResponse getLinearSearchMetrics(@Validated @RequestBody UserInputsDTO userInputsDTO){

        int[] array = generateArray(userInputsDTO.getSize(), userInputsDTO.getValue());
        return linearSearchService.linearSearchMetrics(array, userInputsDTO.getValue());
    }

// get and post api for binary search
    @GetMapping("/binarySearch")
    public int binarySearch(){
        int [] array = {1,2,3,4,5,6,7,8,9,10};
        int target = 7;
        return binarySearchService.binarySearchMetrics(array, target).getValueFromSearch();
    }
    @PostMapping("binarySearch")
    public AlgorithmMetricsResponse getBinarySearchMetrics(@Validated @RequestBody UserInputsDTO userInputsDTO){
        int[] array = generateArray(userInputsDTO.getSize(), userInputsDTO.getValue());
        return binarySearchService.binarySearchMetrics(array, userInputsDTO.getValue());
    }

// get and post api for bubble sort
    @GetMapping("/bubbleSort")
    public int[] bubbleSort(){
        int [] array = {9,1,8,2,7,3,6,4,5};
        return bubbleSortService.bubbleSortMetrics(array).getArrayFromSort();
    }
    @PostMapping("/bubbleSort")
    public AlgorithmMetricsResponse getBubbleSortMetrics(@Validated @RequestBody UserInputsSortDTO userInputsSortDTO){
        int [] array = generateArraySort(userInputsSortDTO.getSize());
        return bubbleSortService.bubbleSortMetrics(array);
    }

// get and post api for selection sort
    @GetMapping("/selectionSort")
    public int[] selectionSort(){
        int [] array = {8,9,7,1,3,2,5,4,6};
        return selectionSortService.selectionSortMetrics(array).getArrayFromSort();
    }

    @PostMapping("selectionSort")
    public AlgorithmMetricsResponse getSelectionSortMetrics(@Validated @RequestBody UserInputsSortDTO userInputsSortDTO){
        int [] array = generateArraySort(userInputsSortDTO.getSize());
        return selectionSortService.selectionSortMetrics(array);
    }

    // get and post api for insertion sort
    @GetMapping("/insertionSort")
    public int[] insertionSort(){
        int [] array = {9,1,8,2,7,3,6,5,4};
        return insertionSortService.insertionSortMetrics(array).getArrayFromSort();
    }
    @PostMapping("insertionSort")
    public AlgorithmMetricsResponse getInsertionSortMetrics(@Validated @RequestBody UserInputsSortDTO userInputsSortDTO){
        int[] array = generateArraySort(userInputsSortDTO.getSize());
        return insertionSortService.insertionSortMetrics(array);
    }

    //get and post api for merge sort
    @GetMapping("/mergeSort")
    public int[] mergeSort(){
        int [] array = {3,7,8,5,4,2,6,1};
        return mergeSortService.mergeSortMetrics(array).getArrayFromSort();
    }
    @PostMapping("mergeSort")
    public AlgorithmMetricsResponse getMergeSortMetrics(@Validated @RequestBody UserInputsSortDTO userInputsSortDTO){
        int [] array = generateArraySort(userInputsSortDTO.getSize());
        return mergeSortService.mergeSortMetrics(array);
    }

    @GetMapping("/quickSort")
    public int[] quickSort(){
        int [] array = {8,2,4,7,1,3,9,6,5};
        return quickSortService.quickSortMetrics(array, 0, array.length-1).getArrayFromSort();
    }
    @PostMapping("/quickSort")
    public AlgorithmMetricsResponse getQuickSortMetrics(@Validated @RequestBody UserInputsSortDTO userInputsSortDTO){
        int [] array = generateArraySort(userInputsSortDTO.getSize());
        return quickSortService.quickSortMetrics(array, 0, array.length-1);
    }

    @GetMapping("/depthFirstSearch")
    public void depthFirstSearch(){
        /*
        Graph graph = new Graph(5);
        graph.addNode(new Node('A'));
        graph.addNode(new Node('B'));
        graph.addNode(new Node('C'));
        graph.addNode(new Node('D'));
        graph.addNode(new Node('E'));
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(1, 4);
        graph.addEdge(2, 3);
        graph.addEdge(2, 4);
        graph.addEdge(4, 0);
        graph.addEdge(4, 2);
        */

        // need to implement class for creating matrix and their methods to use this one
    }

    @GetMapping("/breadthFirstSearch")
    public void breadthFirstSearch(){
       

        // need to implement class for creating matrix and their methods to use this one
    }

}
