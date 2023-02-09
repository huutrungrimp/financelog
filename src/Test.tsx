import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript' // Language
import 'prismjs/themes/prism-okaidia.css' // Theme

function Test() {

    // Init
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    const codes = `
  <div className="App">
			<h1>Welcome to React Router!</h1>
			<CKEditor
				editor={Editor}
				config={editorConfiguration}
				data="<p>Hello from CKEditor 5!</p>"
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log("Editor is ready to use!", editor);
				}}
				onChange={(event, editor) => {
					const data = editor.getData();
					console.log({ event, editor, data });
				}}
				onBlur={(event, editor) => {
					console.log("Blur.", editor);
				}}
				onFocus={(event, editor) => {
					console.log("Focus.", editor);
				}}
				f
			/>
		</div>
  `
    return (
        <div className="App">
            <pre>
                <code className="language-javascript">

                    {codes}

                </code>
            </pre>
        </div>
    )
}

export default Test