package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.BreadthFirstSearch;
import org.springframework.stereotype.Service;

@Service
public class BreadthFirstSearchService {
    private final BreadthFirstSearch search;

    public BreadthFirstSearchService(){
        this.search = new BreadthFirstSearch();
    }

    public void breadthFirstSearchMetrics(int src){
        search.breadthFirstSearch(src);
    }

}
