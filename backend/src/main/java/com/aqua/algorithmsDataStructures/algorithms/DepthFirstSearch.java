package com.aqua.algorithmsDataStructures.algorithms;

public class DepthFirstSearch {
    //how dFS works
    int [][] matrix;
    public void depthFirstSearch(int src){
        boolean[] visited = new boolean[matrix.length];
        depthFS(src, visited);
    }

    public void depthFS(int src, boolean[] visited){
        if(visited[src]){
            return;
        }
        else{
            visited[src] = true;
        }

        for(int i = 0; i < matrix[src].length; i++){
            if(matrix[src][i] == 1){
                depthFS(i, visited);
            }
        }
    }
}
