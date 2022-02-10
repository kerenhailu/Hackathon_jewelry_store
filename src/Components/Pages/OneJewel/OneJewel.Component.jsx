export const OneJewel=(getId,item)=>{
    if(getId==item.Id){
       return(<div>
        <h1>Watch Card !!:</h1>
        <h3>Has_Warranty :{item.Has_Warranty}</h3>
        <h5>Company :{item.Company}</h5>
        <h3>Waterproof :{item.Waterproof}</h3>
        <h5>Color :{item.Color}</h5>
        <h5>Size :{item.Size}</h5>
        <h5>Model :{item.Model}</h5>
        <h5>Gender :{item.Gender}</h5>
        <h5>Price :{item.Price}</h5>
        <img src={item.Img} width="80px" height="80px" />
    </div>)  
    } 
}