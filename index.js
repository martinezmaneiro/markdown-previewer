marked.setOptions({
    breaks: true
})

const initialState= `input here
# Markdown Previewer
## Joaquin Martinez Maneiro
** Frontend Developer**
\`<div>- For more projects: </div>\`
[Visit my GitHub profile](https://github.com/martinezmaneiro)
- Montevideo, Uruguay
![GitHub Profile](https://avatars.githubusercontent.com/u/112190072?v=4)
`

const renderer = new marked.Renderer();

function App(){

    const [text, setText] = React.useState(initialState);

    return (
        <div className='text-center px-4'>
            <h1 className='p-4 title'>My Markdown Previewer</h1>
            <textarea
            name='text'
            id='editor'
            rows='10'
            value={text}
            className='textarea'
            onChange={(e) => setText(e.target.value)}
            placeholder='# Add your text here'
            ></textarea>
            <h3 className='mt-3 title'>Output</h3>
            <Preview markdown={text}/>
        </div>
    )
}
function Preview({markdown}){
    return (
        <div dangerouslySetInnerHTML={{
                __html: marked(markdown, {renderer: renderer}),
            }}
            id='preview'
        >
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));