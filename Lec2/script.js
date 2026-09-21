

let root=document.getElementById('root')

// let React={
//     createElement : function (tag,props){

//     let elemet= document.createElement(tag);
//     elemet.textContent=props.children;

//     for(let key in props){
//         if(key==="style"){
//             Object.assign(elemet[key],props[key])
//         }
//         else if(key==="children") continue
//         else
//         elemet[key]= props[key];
//     }
      
//     return elemet

// }
// }

let heading= <h1 className="harsh" style={{color:"red", backgroundColor:"yellow",fontSize:"30px"}}>hello kaise ho</h1>

// let elemet1=React.createElement('h1',{className:"heading",id:"head",style:{
//     color:"red",
//     backgroundColor:"yellow"
// },children:"hola amigo"});

let elemet1=React.createElement('h1',{className:"heading",id:"head",children:heading});

// let elemet2=React.createElement('h3',{className:"hero",id:"zero",children:"kaise ho thik ho"})

// let elemet3=React.createElement('h3',null,elemet1,elemet2)

// console.log(elemet2)
ReactDOM.render(elemet1,root)

// root.append(elemet1)

//JSX





