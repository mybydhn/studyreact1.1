import {createElement as domcreateElement, updateElement } from './dom.js'
const user = { name: 'test' }


//debugger
const App = () => {
    return (<div><div className="test">{user.name}</div><h1>Hello React</h1></div>)
}
function test() {
    console.log('test')
}
function ReactElement (type,props) {
    this.type = type
    this.props = props
}

function createElement(type,props,...children){
    if(children.length === 1) children = children[0]
    return new ReactElement(type,{...props,children:children})
}

let myRender = (obj,container) =>{
    let {type,props} = obj
    let ele = domcreateElement({type:type})
    for (let key in props) {
        if(key === 'children') {
            if(typeof props[key] === 'object'){
                props[key].forEach(item => {
                    if(typeof item === 'object'){
                        myRender(item,ele)
                    }else {
                        ele.appendChild(domcreateElement({type:String,value:item}))
                    }
                })
            } else {
                ele.appendChild(domcreateElement({type:String,value:props[key]}))
            }
        } else {
            // let attribute = {key:props[key]}
            let attribute = {}
            attribute[key] = props[key]
            updateElement({attributes: attribute}, ele)
        }
    }
    container.appendChild(ele)
}
myRender(App(),document.getElementById('root'))

