
let arr=["harsh","syed sir","aditya"]
let obj={
    name:"harsh",
    class:"one"
}

//object is not displayed


function App(props){
    console.log(props)
    return (
       <>
        <h2 style={{background:"red"}}>Hi hello ,{10>5?<h1>10 is greater</h1>:<h1>not greater</h1>}</h2>
        <h2>hello,{props.props}</h2>
        </>
    )
}

// App()
// let elemet= App("harsh");
// let elemet= <App props="harsh" />;
{/* <App/> */}
let elemet=<App props></App>

console.log(elemet)

ReactDOM.render(elemet,document.getElementById('root'))
