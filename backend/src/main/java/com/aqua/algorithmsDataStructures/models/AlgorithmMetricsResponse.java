package com.aqua.algorithmsDataStructures.models;

public class AlgorithmMetricsResponse  {
    private int valueFromSearch;
    private long timeTaken;
    private long memoryUsage;
    private int[] arrayFromSort;

    public int[] getArrayFromSort(){
        return arrayFromSort;
    }

    public void setArrayFromSort(int[] arrayFromSort) {
        this.arrayFromSort = arrayFromSort;
    }

    public int getValueFromSearch() {
        return valueFromSearch;
    }

    public void setValueFromSearch(int valueFromSearch) {
        this.valueFromSearch = valueFromSearch;
    }

    public long getTimeTaken() {
        return timeTaken;
    }

    public void setTimeTaken(long timeTaken) {
        this.timeTaken = timeTaken;
    }

    public long getMemoryUsage() {
        return memoryUsage;
    }

    public void setMemoryUsage(long memoryUsage) {
        this.memoryUsage = memoryUsage;
    }
}
