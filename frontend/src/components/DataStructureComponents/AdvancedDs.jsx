import React, {useState} from "react";
import DataStructuresDetailed from "./DataStructuresDetailed";
import SpecificDsButton from './SpecificDsButton';
import arrayD from '../../assets/dsAssets/array.png'
import stackLeg from '../../assets/dsAssets/stackLegacy.png'
import stackNew from '../../assets/dsAssets/stackDeque.png'
import queueLeg from '../../assets/dsAssets/queueLegacy.png'
import queueNew from '../../assets/dsAssets/queueDeque.png'
import singlyLinked from '../../assets/dsAssets/singlyLinkedList.png'
import doublyLinked from '../../assets/dsAssets/doublyLinkedList.png'
import hashMapD from '../../assets/dsAssets/HashMap.png'
import directedG from '../../assets/dsAssets/DirectedGraph.png'
import undirectedG from '../../assets/dsAssets/UndirectedGraph.png'
import AdjacencyL from '../../assets/dsAssets/AdjacencyList.png'
import AdjacencyM from '../../assets/dsAssets/AdjacencyMatrix.png'

function AdvancedDs ({setAdvancedDs}) {
    const dataStructuresData = [
        {
            id: 1,
            name: "Array",
            about: `Arrays are fundamental structures that allow us to store multiple values of the same type in a single variable. 
                    They are useful for storing and managing collections of data. Arrays store elements of the same type in contiguous memory locations, 
                    making them highly efficient for indexed access. Arrays are suitable for static data and scenarios where frequent lookups are required.`,
            pros: "Efficient indexed access and good for static datasets.",
            cons: `Fixed size, inefficient for insertions and deletions.
                    (Excluding the insert and delete at the end of the array)`,
            timeComplexity: "",
            spaceComplexity: "",
            code: 
            `// Create an array of integers with a fixed size
<b style="font-size: 0.8rem;
line-height: 1.25;">int[] array = new int[5];</b>
'int' specifies the type of elements the array will store (integers).
'[]' indicates that this is an array.
'array' is the name of the array.
'new int[5]' allocates memory for 5 integer elements.
 
// example of creating and declaring array in one line
<b style="font-size: 0.8rem;
line-height: 1.25;">int [] array = {5, 4, 1, 8, 6}</b>
This is an array with a fixed size of 5 elements 
    (since we inserted that amount of numbers)`,

            useCase: `Arrays are useful for storing a collection of items of the same type.
                    They are commonly used in search and sort algorithms
                    Storing data from API, usually these are arrays of objects
                    We can transform data using functions like map() or filter()
                    And we can use them to represent multi-dimensional arrays (e.g. matrices)`,
            sketch: [
                {image: arrayD,
                text: `This is an array. Here you can see that the values in array are stored in contiguous order.
                        Every element has its own index position, and when we use them, we can access elements really fast.`}
                ],
            methods: []
        },
        {
            id: 2,
            name: "Dynamic Array",
            about: `A dynamic array is similar to an array but can resize itself when elements are added or removed. 
                    In Java, the ArrayList class is a popular implementation of a dynamic array.  (and similar structures exist in other programming languages, like List in Python or Vector in C++)
                    It offers flexibility by automatically resizing and provides additional utility methods.`,
            pros: "Resizable, allows efficient random access, and provides many built-in utilities.",
            cons: "Resizing can be costly, especially for frequent insertions and deletions.",
            timeComplexity: "",
            spaceComplexity: "",
            code: 
            `// Create a dynamic array (ArrayList) in Java
import java.util.ArrayList; // Import the ArrayList class.
<b style="font-size: 1rem;
line-height: 1.25;">ArrayList&ltInteger&gt dynamicArray = new ArrayList<>();</b>
'ArrayList' is the class representing a dynamic array.
'&ltInteger&gt' specifies the type of elements stored (integers).
'dynamicArray' is the name of the dynamic array.
'new ArrayList<>()' creates an empty dynamic array.`,

            useCase: `Use cases can be the same as the normal fixed arrays, but ususally these types of an array
                      are used when we don't know how many elements will be inserted. For example if user wants to input his grades,
                      we don't know how many will he input at the end, that means his inputs are dynamic and here dynamic arrays can be good.
                      Also dynamic arrays can be good to store a list of objects`,
            
            methods: [
                "add(value)", "get(index)", "set(index, value)", "remove(index)", "size()", "clear()", "getFirst()", "getLast()", "removeLast()"
            ],
            sketch: []
        },
        {
            id: 3,
            name: "Stack",
            about: `A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The last element added to the stack is the first one to be removed. 
                    Common operations include push (add), pop (remove), and peek (view the top element). Elements can ONLY be added or removed from the top of the stack. 
                    This restriction simplifies implementation but limits its direct use for certain applications.`,

            pros: "Simple to implement and excellent for managing recursive processes.",
            cons: "Limited access to elements (only the top element is accessible).",
            timeComplexity: "",
            spaceComplexity: "",
            code:
        `// Create a stack in Java
import java.util.Stack; // Import the Stack class.
<b style="font-size: 1rem;
line-height: 1.25;">Stack&ltString&gt stack = new Stack<>();</b>
'Stack' is the class representing the stack data structure.
'&ltString&gt' specifies the type of elements stored (strings).
'stack' is the name of the stack.
'new Stack<>()' creates an empty stack.`,


            additionalInfo: ` Since the syntaxes are in Java, here is additional info.
                            This was the syntax in older Java version, now instead of Stack (which can be still used, but Java does not recommend)
                            we use "Deque", usually said "Deck". It stands for double-ended queue, which supports operations from head and also from tail.
                            But "Deck" is the interface, and even though it can be used to create Stack and Queue, 
                            one of the most commonly used implementation of Deque is ArrayDeque. That is a concrete class that implements Deque.
                            It is faster than Stack when used as a Stack and faster than LinkedList when used as a Queue. 
                            When a deque is used as a stack, elements are pushed and popped from the beginning of the deque, rather from the end in legacy class "Stack".
                            Methods from stack can be used when using deque, but also there are a lot more new ones, and some of them will be listed in methods section.
                            Generally always use ArrayDeque for both stacks and queue. sssssssssssssssssssswitch text
                            `,

            useCase: `Use cases for stacks can be backtracking for example in backtracking algorithms or file directories, 
                      undo/redo iniside the program as well as forward/backwards inside a browser, reversing data and etc..`,
            
            methods: [
                "push(value)", "pop()", "isEmpty()", "peek()", "search(value)", "addFirst()", "removeFirst()", "removeLast()"
            ],

            sketch: [
                {image: stackLeg,
                text: `Here is the representation of stack. As you can see elements are stacked one on each other. 
                        As said in additional info, this is a "legacy" implementation of stack(Java), and here operations only can be done
                        from the top of the stack.`},

                {image: stackNew,
                text: `This is a new stack implemented with Deque (Java). Here as you can see, elements are in right order and as the deque brings
                        more operations with it, you can use them on the stack, as well as work on both ends.`}
        ]
        },
        {
            id: 4,
            name: "Queue",
            about: `A queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front. 
                    Queues are widely used in scheduling and resource management systems.`,
            pros: "Simple implementation and efficient for sequential processing.",
            cons: "Limited access to elements (only the front element is accessible).",
            timeComplexity: "",
            spaceComplexity: "",
            code: 
            `// Create a queue in Java
import java.util.LinkedList; // Import the LinkedList class.
import java.util.Queue; // Import the Queue interface.
<b style="font-size: 1rem;
line-height: 1.25;">Queue&ltInteger&gt queue = new LinkedList<>();</b>
'Queue' is the interface representing a queue.
'&ltInteger&gt' specifies the type of elements stored (integers).
'queue' is the name of the queue.
'new LinkedList<>()' creates a LinkedList implementation of the queue.`,

            additionalInfo: ` Since the syntaxes are in Java, here is additional info
                            The Queue is a data structure that follows the First-In-First-Out (FIFO) principle, meaning the element added first will be the first to be removed.
                            Unlike Stack, which is LIFO (Last-In-First-Out), queues are primarily used in scenarios where order matters.
                            In Java, Queue is an interface and cannot be instantiated directly. Instead, classes like LinkedList, PriorityQueue, and ArrayDeque implement this interface.
                            While LinkedList was historically used to implement queues, Java recommends using ArrayDeque for better performance.
                            ArrayDeque is faster than LinkedList when used as a queue because it avoids the overhead of maintaining pointers between elements.
                            Queues are generally used for processing data in order, such as task scheduling, message queues, and breadth-first search (BFS).
                            Methods from the Queue interface provide additional operations like peeking at the head element, polling, and checking the queue's size.
                            Deque can also function as a queue since it supports operations from both ends, but for strict FIFO behavior, Queue is sufficient.`,

            useCase: `Queues are commonly used in task scheduling systems, like job schedulers in operating systems. 
                      They are also used in breadth-first search (BFS) algorithms, printer job management, call centers, 
                      and in message queues for communication between different parts of a program or system.`,

            methods: [
                "add(value)", "offer(value)", "remove()", "poll()", "element()", "peek()", "size()", "isEmpty()", "clear()", "contains(value)", "iterator()", "offerFirst(value)", "offerLast(value)", "pollFirst()", "pollLast()", "...",
            ],
            sketch: [
                {image: queueLeg,
                text: `This is a Queue and how it works. This picture shows "legacy" Queue, where you could add elements only from tail,
                        and remove them only from head`},

                {image: queueNew,
                text: `This is a new Queue (Java). This is a modern and faster approach for implementing queues (as you could see in the additional info provided).
                        New implementation adds more operations and they can be done from both ends.`}
        ]
        },

        {
            id: 5,
            name: "Priority Queue",
            about: `A Priority Queue is an advanced version of a queue where each element is associated with a priority. 
                    Elements with higher priority are dequeued before elements with lower priority, regardless of the order in which they were added. 
                    If two elements have the same priority, they are dequeued in the order they were added (FIFO for equal priority).
                    Priority Queues are commonly implemented using a binary heap for efficiency, but other implementations like Fibonacci heaps are also possible.`,
            pros: "Efficient priority-based access and removal.",
            cons: "Inefficient for random access to elements.",
            timeComplexity: "",
            spaceComplexity: "",
            code: 
            `// Create a priority queue in Java
import java.util.PriorityQueue; // Import the PriorityQueue class.
<b style="font-size: 1rem;
line-height: 1.25;">PriorityQueue&ltInteger&gt priorityQueue = new PriorityQueue<>();</b>
'PriorityQueue' is the class representing a priority queue.
'&ltInteger&gt' specifies the type of elements stored (integers).
'priorityQueue' is the name of the priority queue.
'new PriorityQueue<>()' creates an empty priority queue.`,

            useCase: `One of the most common use cases is in task scheduling systems, where tasks with higher urgency or importance are executed before others. For example, in an operating system, 
                        priority queues manage processes in the CPU scheduler, ensuring critical processes are executed promptly.
                      In network routing, priority queues help determine the most efficient paths for data packets.
                      Moreover, they find applications in data compression techniques like Huffman encoding, where elements with the least frequency are combined first.`,
            sketch: [],
            methods: []
        },
        {
            id: 6,
            name: "Linked List",
            about: `A LinkedList is a linear data structure consisting of nodes. Each node contains data and a reference to the next node in the sequence. 
            In the case of (doubly) linked lists, each node also has a reference to its previous node, allowing for bidirectional traversal. 
            Unlike arrays, LinkedLists do not require contiguous memory and are dynamically sized. Linked lists are dynamic, making them efficient for insertions and deletions at arbitrary positions.`, 
            pros: "Dynamic size, efficient insertions and deletions.",
            cons: "Inefficient indexed access and higher memory usage due to pointers.",
            timeComplexity: "",
            spaceComplexity: "",
            code: 
            `// Create a linked list in Java
import java.util.LinkedList; // Import the LinkedList class.
<b style="font-size: 1rem;
line-height: 1.25;">LinkedList&ltString&gt linkedList = new LinkedList<>();</b>
'LinkedList' is the class representing a linked list.
'&ltString&gt' specifies the type of elements stored (strings).
'linkedList' is the name of the linked list.
'new LinkedList<>()' creates an empty linked list.`,

additionalInfo: `Since in Java you can use singly linked list here is additional info. 
                In contrast to doubly linked lists, a singly linked list is a simpler form of a linked list where each node only contains a reference to the next node. 
                This makes singly linked lists more memory-efficient as they store fewer references. 
                However, singly linked lists only allow traversal in one direction, which can make certain operations like reverse traversal more complex. 
                Singly linked lists are commonly used in educational contexts or when minimal memory usage is crucial.`, 

useCase: `LinkedLists are widely used in scenarios where frequent insertions and deletions are required, especially at the beginning or middle of the list. 
        They are can used in implementation of stacks, queues, adjacency lists for graph representations, and in real-time applications like music players where you might want to iterate through songs in a playlist.`, 

methods: [
                "add(value)", "add(index, value)", "remove(value)", "remove(index)", "get(index)", "set(index, value)", "size()", 
                "isEmpty()", "clear()", "contains(value)", "iterator()", "listIterator()", "addFirst(value)", "addLast(value)", 
                "removeFirst()", "removeLast()", "getFirst()", "getLast()"
            ],
            sketch: [
                {image: singlyLinked,
                text: `This is a singly linked list where every node has some data and the address for the next node
                        In these types of linked list we can only go through them from head to tail.`},

                {image: doublyLinked,
                text: `Here is the representation of doubly linked list. Every node here has address for previous node,
                        some data and address for the next node. Of course these types of linked list use more memory, 
                        since we need additional pointer, but for example in these nodes we can operate from the tail as well.`}
        ]
        },
        {
            id: 7,
            name: "Hash Map",
            about: `A HashMap is a data structure that stores key-value pairs, allowing for fast access, insertion, and deletion operations on average in O(1) time. 
                    It uses hashing to compute an index into an array (called a bucket array), where the key-value pair is stored. 
                    Hashing is the process of converting a key into a hash code using a hash function. This hash code determines the index where the key-value pair will be stored in the bucket array. 
                    A good hash function minimizes collisions, i.e., ensuring that different keys don't map to the same bucket index. When multiple keys hash to the same bucket, this results in a collision. 
                    To handle collisions, HashMaps typically use **separate chaining** (storing elements as linked lists or trees in the same bucket). In Java, if a bucket grows too large (more than 8 elements), it is converted into a balanced binary tree for better performance. 
                    Unlike older "Hashtable", "HashMap" is not synchronized, making it faster but not thread-safe.`, 
            pros: "Efficient key-value access and insertion.",
            cons: "Hash collisions can affect performance, and resizing is costly.",
            timeComplexity: "",
            spaceComplexity: "",
            code: 
            `// Create a HashMap in Java
import java.util.HashMap; // Import the HashMap class.
<b style="font-size: 1rem;
line-height: 1.25;">HashMap&ltString, Integer&gt hashMap = new HashMap<>();</b>
'HashMap' is the class representing a hash table.
'&ltString, Integer&gt' specifies the types of keys (String) and values (Integer).
'hashMap' is the name of the hash table.
'new HashMap<>()' creates an empty hash table.`,
useCase: `HashMaps are ideal for scenarios where fast access and retrieval are critical. They are used in caching, indexing, storing configurations, implementing dictionaries, frequency counting, and more. 
                      For example, a HashMap can be used to store mappings between words and their definitions in a dictionary application, or for storing key-value pairs in a lookup table.`, 

methods: [
                "put(key, value)", "get(key)", "remove(key)", "containsKey(key)", "containsValue(value)", "keySet()", 
                "values()", "entrySet()", "isEmpty()", "size()", "clear()", "replace(key, value)", 
                "...",
            ],

            sketch: [{image: hashMapD,
                    text: `Here is the representation of Hash Map. This shows how key, value pairs(buckets) are inserted into hash map and the default proccess behind it.
                            With this approach if the collision happens, hashmap will store 2 buckets at the same place and create a linked list of buckets. Of course there are
                            other approaches of dealing with collisions, but this is the easiest.`,
                    heading: "Representation of graph"}
            ]
        },
        {
            id: 8,
            name: "Graph",
            about: `A graph is a non-linear data structure consisting of a collection 
            of nodes (vertices) and edges (connections between the nodes). Graphs can be classified into two types based on edge direction: 
            directed (edges have a direction) and undirected (edges do not have direction). Graphs can also be weighted (edges have a weight or cost) 
            or unweighted (edges have no weight). The most common graph representations are the adjacency matrix and adjacency list.
            Graphs are used to model relationships and connections between entities.
                    `,
            pros: "Versatile for representing various relationships, such as networks.",
            cons: "Can require significant memory for dense graphs.",
            timeComplexity: "",
            spaceComplexity: "",
            code: 
            `// Represent a graph using an adjacency list in Java
import java.util.ArrayList; // Import the ArrayList class.
<b style="font-size: 1rem;
line-height: 1.25;">ArrayList&ltArrayList&ltInteger&gt&gt graph = new ArrayList<>();</b>
'ArrayList&ltArrayList&ltInteger&gt&gt' represents a list of lists (adjacency list).
'graph' is the name of the adjacency list.
'new ArrayList<>()' creates an empty list of lists.`,

            useCase: `Graphs are used extensively in modeling networks (social, transportation, etc.), pathfinding (e.g., GPS navigation), 
                    web page link structures (e.g., Google search), recommendation systems (e.g., Netflix recommendations), and many more. 
                    For instance, a social network like Facebook uses graphs to represent users (nodes) and their connections (edges), 
                    and algorithms like BFS or DFS can be used for friend suggestions.`,
            methods: [
                    "addVertex(vertex)", "addEdge(vertex1, vertex2)", "removeVertex(vertex)", 
                    "removeEdge(vertex1, vertex2)", "hasEdge(vertex1, vertex2)", "getNeighbors(vertex)", 
                    "isEmpty()", "size()", "clear()", "getVertexCount()", "getEdgeCount()"
                    ],

            sketch: [
                { image: undirectedG, text: `This is undirected graph representation.
                                            Here Nodes that are connected with edges have adjacency. In undirected graph if 2 nodes are connected with edges,
                                            both of them have adjacency to each other, so connection goes in both ways.`,
                     heading: "Representation of graph"
                },
                { image: directedG, text: `This is a directed graph representation.
                                            Unlike the undirected graph, as you can see every node has strictly given adjacency to other node.
                                            Basically they are connected one way, not in the both ways. You will need to add additional node for the other way if needed.` },
                { image: AdjacencyL, text: `Look at the directed graph that we had. This is one of the 2 most common ways to represent a graph. 
                                            This is an adjacency list, and representation of it based on directed graph before.` },
                { image: AdjacencyM, text: `This is adjacency matrix, the second way of representing a graph. It is based on the directed graph before,
                                            and shows representation of adjacency matrix.` }
            ]
                      
        }
    ];
    
/*{ 
            id: 9,
            name: "Tree",
            about: `
                    A tree is a hierarchical data structure with a root node and child nodes, where each node has a value and can have a list of references to other nodes (its children). 
                    The root node is the topmost node, and leaf nodes are those with no children. Trees are commonly used for representing hierarchical structures like file systems, 
                    organization charts, and syntax trees. A binary tree is a type of tree where each node has at most two children. In a binary search tree (BST), 
                    the left child of a node contains a value less than its parent, and the right child contains a value greater than its parent.
                    Trees are widely used in databases, file systems, and searching algorithms.`,
            pros: "Efficient hierarchical data representation and operations.",
            cons: "Can become unbalanced, leading to inefficiencies.",
            timeComplexity: "",
            spaceComplexity: "",
            code: 
            `// Create a binary tree node in Java
class TreeNode {
    int data; // The value stored in the node.
    TreeNode left, right; // References to the left and right child nodes.

    TreeNode(int data) { // Constructor to initialize the node with a value.
        this.data = data;
        left = null; // Initializes left child to null.
        right = null; // Initializes right child to null.
    }
}`, 
            useCase: `Trees are widely used in databases (e.g., B-trees for indexing), file systems (directory structures), decision-making systems (decision trees), 
                        insertion, and deletion operations, and more. A BST can be used for fast search operations`,
            methods: [
                     "insert(value)", "delete(value)", "search(value)", "inOrderTraversal()", 
                    "preOrderTraversal()", "postOrderTraversal()", "isEmpty()", "size()", 
                    "clear()", "height()", "balanceFactor()"
                ]
                          
        } */

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButton = (id) => {
        setSelectedButton(id);
    }
    const [content, setContent] = useState(false);
        const toggleContent = () => {
            setContent(true);
            
        }

    const selectedDsData = dataStructuresData.find(ds => ds.id === selectedButton);

    return(
        <>
            {!content &&(
                <>
                <div className="text-white mb-10 w-96 mx-auto">
                            <p>Hello again! Here is the more advanced stuff. Choose between given algorithms to see info about them, 
                                and to see how a specific algorithm works.</p>
                        </div>
    
                <div className="flex flex-wrap gap-2 mx-auto place-content-center px-1 w-96">
                    {dataStructuresData.map((algo) =>(
                        <SpecificDsButton 
                            key={algo.id}
                            id={algo.id}
                            name={algo.name}
                            onClick={() => [handleButton(algo.id), toggleContent()] }
                        />
                    ))}
                </div>
    
                <div className="flex justify-center">
                        <button className=" navColorDrop w-40 text-center rounded-xl p-2 text-white mx-auto my-10" onClick={() => setAdvancedDs(false)}>Go back</button>
                </div>
                </>
            )}

                <div>
                    {selectedButton && content && (
                        <>
                    <DataStructuresDetailed
                        name={selectedDsData.name}
                        about={selectedDsData.about}
                        pros={selectedDsData.pros}
                        cons={selectedDsData.cons}
                        timeComplexity={selectedDsData.timeComplexity}
                        spaceComplexity={selectedDsData.spaceComplexity}
                        code={selectedDsData.code}
                        useCase={selectedDsData.useCase}
                        additionalInfo={selectedDsData.additionalInfo}
                        sketch={selectedDsData.sketch}
                        methods={selectedDsData.methods}
                    />
                    <div className="flex justify-center ">
                    <button className=" navColorDrop w-40 text-center rounded-xl p-2 text-white mx-auto my-10" onClick={() => setAdvancedDs(false)}>Main menu</button>
                        <button className=" navColorDrop w-40 text-center rounded-xl p-2 text-white mx-auto my-10" onClick={() => setContent(false)}>Back</button>
                    </div>
                    </>
                    )}
                    
                </div>

        </>
    );

}

export default AdvancedDs;