function TheoryDs(){

    const definition = `A data structure is a specialized format for organizing, storing, and managing data in a way that enables efficient access and modification. 
    Think of it as a container where you can arrange your data to solve problems more effectively. For example, imagine a bookshelf 
    (a data structure) that categorizes books by genre, author, or size, making it easier to find what you're looking for.`; 

    const characteristics = `Data structures are essential because they determine how data is accessed and manipulated. The choice of a data structure can greatly 
                          influence the efficiency of an algorithm, especially in terms of time and memory. They provide systematic ways to organize data, such as 
                          through arrays, linked lists, or trees. Some data structures are dynamic, like hash maps or dynamic arrays, allowing them to grow or shrink 
                          as needed. Others, like stacks or queues, restrict access to elements to achieve specific functionality. By carefully selecting the right 
                          data structure, you can solve problems faster and more efficiently.`; 

const useCases = `Data structures play a vital role in both computer science and daily life. Search engines use structures like hash tables and trees to store 
                  and retrieve web pages quickly. Navigation systems rely on graphs to calculate the shortest path between two locations. Social networks 
                  represent relationships between users as graphs, while games and simulations use grids or trees to manage objects in virtual environments. 
                  Almost every software application that processes data relies on data structures to function effectively.`; 

const evaluating = `When choosing a data structure, several factors need to be considered. If fast data retrieval is important, structures like hash maps can 
                     provide near-instant access. For applications where data is frequently added or removed, linked lists might be more suitable. Memory usage 
                     is another crucial factor; using arrays, for instance, could result in wasted memory if the size is not optimal. The complexity of the operations 
                     you plan to perform, such as searching, sorting, or iterating, will also determine which data structure best suits your needs. By evaluating 
                     these aspects, you can ensure the chosen structure aligns with the requirements of your application.`;
    


    return(
        <>

            <div className="place-content-center w-10/12 mx-auto text-sm">
                <h2 className="text-white text-2xl italic mb-4">Definition</h2>
                <p className="text-white text-justify">{definition}</p>
                
                <h2 className="text-white text-2xl italic my-4">Characteristics</h2>
                <p className="text-white text-justify">{characteristics}</p>
                <div className="text-white ml-5">
                   
                </div>

                <h2 className="text-white text-2xl italic my-4">Use cases</h2>
                <p className="text-white tracking-wide text-justify">{useCases}</p>

                <h2 className="text-white text-2xl italic my-4">Evaluating data structures</h2>
                <p className="text-white  text-justify">{evaluating}</p>
                <ol className="text-white">
                    
                </ol>
            </div>

        </>
    );
}

export default TheoryDs;