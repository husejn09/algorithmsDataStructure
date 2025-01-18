package com.aqua.algorithmsDataStructures.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class UserInputsDTO {
    @NotNull(message =  "Array size cannot be null")
    @Min(value = 1000, message = "Array size must be at least 1000")
    @Max(value = 1000000, message = "Array size must not exceed 1 000 000")
    private Integer size;

    @NotNull(message =  "Targeted value cannot be null")
    private Integer value;

    public int getSize(){
        return size;
    }

    public void setSize(int size){
        this.size = size;
    }

    public int getValue(){
        return value;
    }

    public void setValue(int value){
        this.value = value;
    }
}
