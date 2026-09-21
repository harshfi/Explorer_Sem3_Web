
function Header({props}){

    return (
        <h2>welcome to React, {props.name}</h2>
    )
}

function Container(){
    return (
        <p> this is main container</p>
    )
}
function Footer(){
    return (
        <p> All right reserved</p>
    )
}

console.log(<Header/>)

function App(){
    return (
        <div>
        <Header props={{name: "harsh", className: "header"}} />
        <Container/>
        <Footer/>
        </div>
    )
}
let e= <App/>



let root=document.getElementById('root')

ReactDOM.render(<App/>,root)