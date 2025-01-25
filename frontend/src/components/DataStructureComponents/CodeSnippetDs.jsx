
function CodeSnippetDs(props) {

    return (
      <>
        <h1 className="text-white xs:text-xl sm:text-2xl md:text-3xl text-center mt-10 mb-2 xl:text-3xl">Code Snippet</h1>
        <div className="overflow-x-auto p-2 mx-auto md:w-2/3 lg:w-full">
          <pre className="codeBackground py-3 pl-2 border-2 border-red-950 text-xs w-fit text-wrap mx-auto md:text-base">
              <code className="inline-block" dangerouslySetInnerHTML={{__html: props.code}}></code>
          </pre>
        </div>
      </>
    );
  }
  
  export default CodeSnippetDs;
  