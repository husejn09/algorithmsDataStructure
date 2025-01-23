
function CodeSnippetDs(props) {

    return (
      <>
        <h1 className="text-white text-2xl text-center mt-10 mb-2">Code Snippet</h1>
        <div className="overflow-x-auto  p-4">
          <pre className="codeBackground py-3 pl-2 border-2 border-red-950 text-xs w-fit text-wrap">
              <code className="inline-block" dangerouslySetInnerHTML={{__html: props.code}}></code>
          </pre>
        </div>
      </>
    );
  }
  
  export default CodeSnippetDs;
  