package com.aqua.algorithmsDataStructures.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class UserInputsSortDTO {
    @NotNull(message =  "Array size cannot be null")
    @Min(value = 1000, message = "Array size must be at least 1000")
    @Max(value = 1000000, message = "Array size must not exceed 1 000 000")
    private Integer size;

    public int getSize(){
        return size;
    }

    public void setSize(int size){
        this.size = size;
    }

}
