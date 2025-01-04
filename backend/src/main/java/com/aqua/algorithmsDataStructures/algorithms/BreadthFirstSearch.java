package com.aqua.algorithmsDataStructures.algorithms;

import java.util.LinkedList;
import java.util.Queue;

public class BreadthFirstSearch {
    int [][] matrix;
    public void breadthFirstSearch(int src){
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[matrix.length];
        queue.offer(src);
        visited[src] = true;

        while(queue.size() != 0){
            src = queue.poll();

            for(int i=0; i<matrix[src].length;i++){
                if(matrix[src][i] == 1 && !visited[i]){
                    queue.offer(i);
                    visited[i] = true;
                }
            }
        }
    }
}
