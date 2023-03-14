/*Markdown Previewer. Dependencies called via CDN.*/

/*Adds <br> on a single line break. For more information visit official documentation https://marked.js.org/using_advanced#options */
marked.setOptions({
    breaks: true
})

/*This variable is the initial state of the application and will work as the editor placeholder*/
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
/*This constructor method .Renderer was taken from marked.js official documentation. When called, it is used to render tokens to HTML*/
const renderer = new marked.Renderer();

function App(){
    {/*useState hook to keep the input data saved and able to be called from the Previewer*/}
    const [text, setText] = React.useState(initialState);

    return (
        <div className='container'>
            <h1 className='title'>My Markdown Previewer</h1>
            {/*This element will trigger an event listener for all the changes in the input to be saved using a useState hook*/}
            <textarea
            name='text'
            id='editor'
            rows='10'
            value={text}
            className='textarea'
            onChange={(e) => setText(e.target.value)}
            placeholder='# Add your text here'
            ></textarea>
            {/*The Preview component recieves the prop text from it's parent state*/}
            <Preview markdown={text}/>
        </div>
    )
}

{/*text is passed by reference and the following code gets the markdown version of the input in the textarea element above and sets it in
the HTML using the renderer method defined above*/}
const Preview =({markdown})=> {
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