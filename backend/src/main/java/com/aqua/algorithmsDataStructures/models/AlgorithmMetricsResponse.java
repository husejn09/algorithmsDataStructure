package com.aqua.algorithmsDataStructures.models;

public class AlgorithmMetricsResponse  {
    private int valueFromSearch;
    private int timeTaken;
    private double memoryUsage;
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

    public double getTimeTaken() {
        return timeTaken;
    }

    public void setTimeTaken(int timeTaken) {
        this.timeTaken = timeTaken;
    }

    public double getMemoryUsage() {
        return memoryUsage;
    }

    public void setMemoryUsage(double memoryUsage) {
        this.memoryUsage = memoryUsage;
    }
}
