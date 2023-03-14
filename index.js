

marked.setOptions({
    breaks: true
})

const initialState= `
![GitHub Profile](https://avatars.githubusercontent.com/u/112190072?v=4)
# Markdown Previewer
## Joaquin Martinez Maneiro
**Frontend Developer**
For more projects:
[Visit my GitHub profile](https://github.com/martinezmaneiro)
Montevideo, Uruguay
input here

`

const renderer = new marked.Renderer();

function App(){

    const [text, setText] = React.useState(initialState);

    return (
        <div className='container'>
            <h1 className='title'>My Markdown Previewer</h1>
            <textarea
            name='text'
            id='editor'
            rows='10'
            value={text}
            className='textarea'
            onChange={(e) => setText(e.target.value)}
            placeholder='# Add your text here'
            ></textarea>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);