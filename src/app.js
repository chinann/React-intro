import React from 'react'
import ReactDOM from 'react-dom'

// const title = 'My React Application'

// const MyApp = () => {
//     return (

//     )
// }
// or

// const App = () => (
//     <Header />
// )
// or

const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">search</button>
        </form>
    )
}

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm />
    </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
        {props.items.map(item => (
            <li>{item}</li>
        ))}
        </ul>
    )
}

const Content = (props) => (
    <section>
        <p>{props.description}</p>
        <Items items={props.items}/>
    </section>
)


const AppWithoutDescription = () => (
    <Header title="No description here" />
)
 const App = () => {
    const appTitle = 'Fronttechs: React'
    const description = 'A simple react application'
    const items= [
        "Oliver",
        "Tobey",
        "Charlie",
        "Lucky"
    ]
    return(
        <section>
            <Header title={appTitle} />
            <Content 
                description={description} 
                items={items}
            />
        </section>
    )
 }

// const App = () => (
//     <header>
//         <h1>My React App</h1>
//     </header>
// )



const element = document.getElementById('app')
ReactDOM.render(<App />, element)