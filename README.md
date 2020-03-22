
### What I learned
<hr>

-How to use routing ( because we worked on a single page website )
<br>
<br>
`react-router-dom`

-How to use context to manipulate states easily ( we won't have to pass props in many levels ) 
<br>
<br>
`const Context = React.createContext();`
<br>
then we use :
<br>
<br>
`<Context.Provider value={{}} > {this.props.children} </Context.Provider>` 
<br>
to set the value we will pass to consumers / value can receive a string or even an object... ( usually the state and the functions )

-How to create styled components 
<br>
<br>
`import styled from "styled-components";`
<br>
`const styledExample = styled.(html tag)``;`
and we can easily put css inside.


### Deploy
https://ecommerce-phone-shop.netlify.com
