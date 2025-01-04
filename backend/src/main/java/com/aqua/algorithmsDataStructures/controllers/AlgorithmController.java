package com.aqua.algorithmsDataStructures.controllers;
import org.springframework.web.bind.annotation.*;
import com.aqua.algorithmsDataStructures.services.*;

import java.util.Arrays;

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

    @GetMapping("/mergeSort")
    public void mergeSort(){
        int [] array = {3,7,8,5,4,2,6,1};
        mergeSortService.mergeSortMetrics(array);
        for (int j : array)
            System.out.print(j);
    }

    @GetMapping("/quickSort")
    public void quickSort(){
        int [] array = {8,2,4,7,1,3,9,6,5};
        quickSortService.quickSortMetrics(array, 0, array.length-1);
        for (int j : array)
            System.out.print(j);
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
