export default function MyCart(){
    const mycart = [
        {
          id: 1,
          name: "aloo parantha",
          price: 80
        },
        {
          id: 2,
          name: "Onion Capsicum Pizza",
          price: 180
        },
        {
          id: 3,
          name: "Pav bhaji",
          price: 40
        },
        {
          id: 4,
          name: "French Toast",
          price: 100
        }
      ];
    return(
        <div>
            <h1>MyCart</h1>
            <ol>
        {mycart.map(({id,name,price})=>(
            <li key={id}>
                {name}: Rs {price}
            </li>
        ))}        
            </ol>
            <p>Total price :{
                mycart.reduce((acc,{price})=>acc+price,0)
                }</p>

        </div>
    )
}