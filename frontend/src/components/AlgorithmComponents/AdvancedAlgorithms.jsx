import SpecificAlgoButton from "./SpecificAlgoButton";
import TimeBinarySearch from '../../assets/TimeBinarySearch.png'
import TimeInterpolationSearch from '../../assets/TimeInterpolationSearch.png'
import TimeQuickMergeHeap from '../../assets/TimeQuickMergeHeap.png'
import TimeLinearSearch from '../../assets/TimeLinearSearch.png'
import TimeBfsDfs from '../../assets/TimeBfsDfs.png'
import TimeInsertionSelectionBubble from '../../assets/TimeInsertionSelectionBubble.png'

import MemoryBinaryQuickMerge from '../../assets/MemoryBinaryQuickMerge.png'
import MemoryInsertionSelectionBubbleInterpolation from '../../assets/MemoryBinaryQuickMerge.png'
import MemoryBfsDfs from '../../assets/MemoryBfsDfs.png'
import MemoryLinear from '../../assets/MemoryLinear.png'

import React, {useState} from 'react'
import AlgorithmsDetailed from "./AlgorithmsDetailed";

function AdvancedAlgorithms({setAdvancedAlgo}){
    
    const algorithmsData = [
    {
        id: 1,
        name: "QuickSort",
        about: `This is a recursion functions that sorts the elements of an array in place. It works with a "pivot". Pivot can be placed at the start, middle or end of an array. 
                Usually its on the end. The whole point is to find the final position of our pivot. We will need "i and j" indices. "J" will begin at the start of an array, but
                "I" will be one less than the beggining of the array. Also we will need an temporary variable to sort in place. The whole point is to check if our value(j) is greater than our
                pivot, if it's grater or equal to pivot ignore it and increment "j". If it's less than pivot, increment "i" and swap "i and j" and so go on. You can see how it works below.`,
        pros: "Fast for most inputs and in place sorting algorithms(constant additional space)",
        cons: "It can be slow if the pivot is poorly chosen and it is not stable(equal elements may change relative positions)",
        timeComplexity: TimeQuickMergeHeap,
        spaceComplexity: MemoryBinaryQuickMerge,
        code: 
        `public int[] quickSort(int[] array, int start, int end){
            if(end <= start)
                return new int[]{-1}; // base case

            int pivot = partiton(array, start, end);
            quickSort(array, start, pivot-1);
            quickSort(array, pivot+1, end);

            return array;
        }

        private int partiton(int[] array, int start, int end){
            int pivot = array[end];
            int i = start - 1;

            for(int j = start; j <= end-1; j++){
                if(array[j] < pivot){
                    i++;
                    int temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            i++;
            int temp = array[i];
            array[i] = array[end];
            array[end] = temp;

            return i;
        }`,
        isSearch: false
    },
    {
        id: 2,
        name: "MergeSort",
        about: `Merge Sort is a divide-and-conquer algorithm that recursively divides the array into halves until each subarray contains a single element.
                After dividing to the end, we will need a helper function to go "up", and to compare elements idividually and put them back inside an array,
                and after that do the same thing unitl the array is sorted. You can use it for sorting large datasets where stability is essential.`,
        pros: "Stable sorting algorithm since it always guarantees O(n log n) time complexity.",
        cons: "It requires additional memory for merging since its splitting arrays into sub-arrays",
        timeComplexity: TimeQuickMergeHeap,
        spaceComplexity: MemoryBinaryQuickMerge,
        code:
        `public int[] mergeSort(int [] array){
            int arrLength = array.length;

            if(arrLength <= 1){
                return new int[]{-1};
            }

            int middle = arrLength / 2;
            int[] leftArray = new int[middle];
            int[] rightArray = new int[arrLength - middle];

            int j=0; //for right array
            for(int i = 0; i < arrLength; i++){
                if(i < middle) {
                leftArray[i] = array[i];
            }
            else {
                rightArray[j] = array[i];
                j++;
            }
            }
            mergeSort(leftArray);
            mergeSort(rightArray);
            merge(leftArray, rightArray, array);

            return array;
        }


    public void merge(int[] leftArray, int[] rightArray, int[] array){
        int leftSize = array.length / 2;
        int rightSize = array.length - leftSize;
        int i = 0, l = 0, r = 0;

        while (l < leftSize && r < rightSize){
            if(leftArray[l] < rightArray[r]){
                array[i] = leftArray[l];
                i++;
                l++;
            }
            else{
                array[i] = rightArray[r];
                i++;
                r++;
            }
        }
        while (l < leftSize){
            array[i] = leftArray[l];
            i++;
            l++;
        }
        while (r < rightSize){
            array[i] = rightArray[r];
            i++;
            r++;
        }
    }`,
        isSearch: false
    },
    {
        id: 3,
        name: "SelectionSort",
        about: `This is an algorithm who is going through the array and it's keeping track which is the smallest element inside it. At the end, the smallest element is
                placed at the beggining of the array and that element is considered sorted. Then it repeats the whole thing, swaping the smallest element with the first
                unsorted element. Use it only on small datasets where simplicity matters.`,
        pros: "Simple to implement and in-place sorting (no additional memory).",
        cons: "It is slow and not stable.",
        timeComplexity: TimeInsertionSelectionBubble,
        spaceComplexity: MemoryInsertionSelectionBubbleInterpolation,
        code: `public class SelectionSort {
            public int[] selectionSort(int[] array){
                for(int i=0; i< array.length-1;i++){
                    int min = i;
                    for(int j=i+1; j < array.length; j++){
                        if(array[min] > array[j])
                        min = j;
                    }
                    int temp = array[i];
                    array[i] = array[min];
                    array[min] = temp;
                }
                return array;
            }}`
    },
    {
        id: 4,
        name: "BubbleSort",
        about: `Algorithm that is comparing an element with the next one. It is swapping adjacent elements if needed and repeating unitl no swap are needd. 
                It uses a temporary variable to sort in-place. Use it only for educational purposes.`,
        pros: "Very simple and it is stable",
        cons: "Very slow and inefficient",
        timeComplexity: TimeInsertionSelectionBubble,
        spaceComplexity: MemoryInsertionSelectionBubbleInterpolation,
        code:
        `public int[] bubbleSort(int[] array){
            for(int i=0; i < array.length; i++){
                for(int j=0; j < array.length - i - 1; j++){
                    if(array[j] > array[j+1]){
                        int temp = array[j]; //temporary variable
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }
            return array;
        }`,
        isSearch: false
    },
    {
        id: 5,
        name: "InsertionSort",
        about: `This algorithm builds a sorted array one element at a time by inserting each new element into its correct position. It assumes that the first element
                is sorted, pick the next one and compare it with sorted portion. Shift the larger elements and isert the new element in its correct position.
                It takes less steps than BubbleSort and in best case scenario faster than SelectionSort.`,
        pros: "Simple to implement, stable and efficient for small mostly sorted datasets",
        cons: "Still slow and not suitable for large unsorted arrays",
        timeComplexity: TimeInsertionSelectionBubble,
        spaceComplexity: MemoryInsertionSelectionBubbleInterpolation,
        code:
        `public int[] insertionSort(int[] array){
            for(int i = 1; i< array.length;i++){
                int temp = array[i];
                int j = i-1;

                while(j >= 0 && array[j] > temp){
                    array[j+1] = array[j];
                    j--;
                }
            array[j+1] = temp;
            }
            return array;
        }`,
        isSearch: false
    },
    {
        id: 6,
        name: "BinarySearch",
        about: `Searching algorithm that finds the position of given value inside a already SORTED array. (It must be sorted). It compares target value with the
                middle element. If equal return the index of that element (this is hardly to happen), if smaller ignore that element and everything to it's right side. 
                if larger ignore that element and everything on it's left side, and repeat the process.`, 
        pros: "It's fast and efficient for large datasets",
        cons: "Requires sorted data",
        timeComplexity: TimeBinarySearch,
        spaceComplexity: MemoryBinaryQuickMerge,
        code:
        `public int binarySearch(int[] array, int target){
            int low = 0;
            int high = array.length - 1;

            while(low <= high){
                int middle = low + (high-low) / 2;
                int value = array[middle];

                if(value < target)
                    low = middle + 1;
                else if (value > target)
                    high = middle - 1;
                else
                    return middle;
            }
            return -1;
        }`,
        isSearch: true
    },
    {
        id: 7,
        name: "InterpolationSearch",
        about: `This is an "upgrade" of a Binary Search. Here we guess where the targeted value could be inside an array. We are using interpolation formula and comparing the 
                target with the element at the guessed position, and adjusting the search range if element not found.
                This algorithm works really well when the dataset is uniformly distributed.`,
        pros: "Faster than binary search for uniformly distributed datasets",
        cons: "Performs poorly with non-uniform data, requieres sorted input",
        timeComplexity: TimeInterpolationSearch,
        spaceComplexity: MemoryInsertionSelectionBubbleInterpolation,
        code:
        `public int interpolationSearch(int [] array, int target){
        int high = array.length - 1;
        int low = 0;

        while(target >= array[low] && target<=array[high] && low <= high){
            int probe = low + (high-low) * (target - array[low]) / (array[high] - array[low]);

            if(array[probe] == target){
                return probe;
            } else if (array[probe] < target) {
                low = probe + 1;
            }
            else {
                high = probe - 1;
            }
        }
        return -1;
    }`,
        isSearch: true
    },
    {
        id: 8,
        name: "BreadthFirstSearch",
        about: `Explores all neighbors of a node before moving to the next level in a graph or tree. It starts from the source node and it uses a queue to keep track
                of nodes to explore. Visit all nodes level by level. Use it for finding the shortes path in unweighted graphs, AI search algorithms and etc.`,
        pros: "Guarantees shortest path in unweighted graphs",
        cons: "Requieres additonal memory for the queue, inefficient for deep graphs.",
        timeComplexity: TimeBfsDfs,
        spaceComplexity: MemoryBfsDfs,
        code:
        `int [][] matrix;
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
        }`,
        isSearch: true
    },
    {
        id: 9,
        name: "DepthFirstSearch",
        about: `Explores as far as possible along a branch before backtracking to explore other branches. Starts from the source node and uses recursion or a stack
                to eexplore the deepest path. Backtrack when needed. Use it if you want to explore all nodes of a graph, maze solving, pathfinding in deep graphs and etc.`,
        pros: "Memory efficient for sparse graphs and can explore all nodes with minimal setup",
        cons: "May not find the shortes path and can get stuck in infinite loops without proper handling",
        timeComplexity: TimeBfsDfs,
        spaceComplexity: MemoryBfsDfs,
        code:
        `int [][] matrix;
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
        }`,
        isSearch: true
    }];



    const [selectedButton, setSelectedButton] = useState(null);
    
    const handleButton = (id) => {
        setSelectedButton(id);
    }

    const [content, setContent] = useState(false);
    const toggleContent = () => {
        setContent(true);
        
    }

    


    const selectedAlgoData = algorithmsData.find(algo => algo.id === selectedButton);
    return(
        <>
        {!content &&(
            <>
            <div className="text-white text-center mx-auto sm:text-base lg:text-lg xs:w-[340px] sm:w-[550px] md:w-[600px] lg:w-[620px] xl:w-[650px] mb-12">
                        <p>Hello again! Here is the more advanced stuff. Choose between given algorithms to see info about them, 
                            and to see how a specific algorithm works.</p>
                    </div>

            <div className="flex flex-wrap gap-2 mx-auto place-content-center xs:w-[350px] sm:w-[450px] md:w-[600px]">
                {algorithmsData.map((algo) =>(
                    <SpecificAlgoButton 
                        key={algo.id}
                        id={algo.id}
                        name={algo.name}
                        onClick={() => [handleButton(algo.id), toggleContent()] }
                    />
                ))}
            </div>

            <div className="flex justify-center">
                    <button className=" navColorDrop w-40 text-center rounded-xl p-2 text-white mx-auto my-10 xs:w-32 xs:text-sm sm:w-[150px] sm:text-base xl:w-[180px]" onClick={() => setAdvancedAlgo(false)}>Go back</button>
            </div>
        </>)}

              
                <div>
                    
                    {selectedButton && content && (
                        <>
                    <AlgorithmsDetailed
                        name={selectedAlgoData.name}
                        about={selectedAlgoData.about}
                        pros={selectedAlgoData.pros}
                        cons={selectedAlgoData.cons}
                        timeComplexity={selectedAlgoData.timeComplexity}
                        spaceComplexity={selectedAlgoData.spaceComplexity}
                        code={selectedAlgoData.code}
                        isSearch={selectedAlgoData.isSearch}
                    />
                    <div className="flex place-content-center lg:gap-32 xs:gap-6 sm:gap-16">
                    <button className="navColorDrop xm:w-36 sm:text-base text-center rounded-xl p-2 text-white my-10 xs:text-sm xs:w-32 w-28 sm:w-[150px] xl:text-lg xl:w-44" onClick={() => setAdvancedAlgo(false)}>Main menu</button>
                        <button className=" navColorDrop xm:w-36 sm:text-base text-center rounded-xl p-2 text-white my-10 xs:text-sm xs:w-32 w-28 sm:w-[150px] xl:text-lg xl:w-44" onClick={() => setContent(false)}>Back</button>
                    </div>
                    </>
                    )}
                    
                </div>

        </>
    );
}

export default AdvancedAlgorithms;