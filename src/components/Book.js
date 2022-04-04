import Books from "./Books"
export default function Book(props){
  
  
  return(
    
<Books 
                img={props.img} 
                name={props.title}
                price={props.count}
                
            />
  )
}