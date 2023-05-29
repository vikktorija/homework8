import Header from "./components/Header";

function LinksEl() {
    const links = [
        'Home', 
        'About Us', 
        'Contacts', 
        'Shop', 
        'Basket'
    ]

    return (
        <div>
            <Header links={links}/>
        </div>
    )
}
  
  export default LinksEl;