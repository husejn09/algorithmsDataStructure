package com.aqua.algorithmsDataStructures.services;
import com.aqua.algorithmsDataStructures.algorithms.DepthFirstSearch;
import org.springframework.stereotype.Service;

@Service
public class DepthFirstSearchService {
    private final DepthFirstSearch search;

    public DepthFirstSearchService(){
        this.search = new DepthFirstSearch();
    }

    public void depthFirstSearchMetrics(int src){
        search.depthFirstSearch(src);
    }
}
