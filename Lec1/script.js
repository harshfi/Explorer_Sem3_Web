
// let elemet1= document.createElement('h1');

// 

// elemet1.textContent="harsh is a good boy"
// elemet1.className="heading"
// elemet1.style.backgroundColor="red"


// let elemet2= document.createElement('h2');

// elemet2.textContent="East or west mirai is best  "
// elemet2.className="head2"
// elemet1.style.backgroundColor="yellow"

 function createElement (tag,att,content){

    let elemet= document.createElement(tag);
    elemet.textContent=content;

    for(let key in att){
        if(key==="style"){
            Object.assign(elemet[key],att[key])
        }
        else
        elemet[key]= att[key];
    }
      
    return elemet

}

// let root=document.getElementById('id');
// root.app
// {
//     className:HTMLHeadingElement,
//     id="first",

// }

// let React={
//     createElement : function (tag,att,content){

//     let elemet= document.createElement(tag);
//     elemet.textContent=content;

//     for(let key in att){
//         if(key==="style"){
//             Object.assign(elemet[key],att[key])
//         }
//         else
//         elemet[key]= att[key];
//     }
      
//     return elemet

// }
// }

// let ReactDOM= {
//    render: function(elemet,root){
//     root.append(elemet)
// }
// }






let elemet1=React.createElement('h1',{className:"heading",id:"head",style:{
    color:"red",
    backgroundColor:"yellow"
}},"hola amigo")
let elemet2= React.createElement('h3',{className:"hero",id:"zero"},"namaste mirai")



let root=document.getElementById('root')

console.log(elemet1,elemet2)

ReactDOM.render(elemet1,root)
ReactDOM.render(elemet2,root)
