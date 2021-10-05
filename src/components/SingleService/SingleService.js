import Services from '../Services/Services';
import ServicesJson from '../Services/Services.json';
import "./SingleService.css"


const SingleService = (props) => {
    let items =[]
items =ServicesJson.map(item=>{
  return <Services img={item.img} name={item.name} number={item.number}  describesion={item.describesion} city={item.address?.city} Zila={item.address?.Zila} />
})
  return (
    <div className="App-student">
      {items}
    </div>
  );
}

export default SingleService;