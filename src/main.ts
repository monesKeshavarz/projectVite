import './style.css'
type BoxProps ={
  element : string;
  attr ?: any;
  children?: Element|Element[]|string|string[]
}

const app = document.getElementById("app");
const Box =(props:BoxProps)=>{
  const el = document.createElement(props.element);
  if(props.attr){
    Object.keys(props.attr).forEach((key:string)=>{
    el[key] = props.attr[key]
    })
  }
if(!Array.isArray(props.children)) el.append(props.children!)
else el.append(...props.children)
  return el
}
app?.append(Box({
  element:"form",
  attr:{className:"flex flex-col gap-3"},
  children:[
    Box({element:"img"}),
    Box({element:"input",attr:{ placeholder:"Enter Your Name", className:'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}}),
    Box({element:"input",attr:{ placeholder:"Enter Your PhoneNumber", className:'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}}),
    Box({element:"div",attr:{className:"flex justify-between items-center"},
    children:[Box({element:"div",attr:{className:"flex items-center"},
    children:[ Box({element:"input",attr:{ id:"Woman", type:"radio", className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}}),
    Box({element:"lable",children:"Woman",attr:{ for:"Woman"}})]}),
    Box({element:"div",attr:{className:"flex items-center"},
  children:[ Box({element:"input",attr:{id:"Man", type:"radio", className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}}),
  Box({element:"lable",attr:{id:"Man"},children:"Man"})]
  })]}),
  Box({element:"button",children:"Send",attr:{ className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}}),
  ]
}))