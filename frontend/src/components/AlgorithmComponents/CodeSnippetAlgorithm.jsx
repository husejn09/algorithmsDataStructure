
function CodeSnippetAlgorithm(props) {

  return (
    <>
      <h1 className="text-white text-2xl text-center mt-20 mb-6">Code Snippet</h1>
      <div className="overflow-x-auto p-4">
        <pre className="codeBackground py-3 pl-2 border-2 border-red-950 text-xs w-fit text-wwrap">
            <code className="inline-block">{props.code}</code>
        </pre>
      </div>
    </>
  );
}

export default CodeSnippetAlgorithm;
