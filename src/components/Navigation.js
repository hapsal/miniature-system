const Navigation = ({handleChange}) => {
    return ( 
        <div className='cities'>
            <select name="city" onChange={(handleChange)}>
              <option value="allCities">Kaikki kaupungit</option>
              <option value="634963">Tampere</option>
              <option value="655195">Jyväskylä</option>
              <option value="650225">Kuopio</option>
              <option value="660129">Espoo</option>
            </select>
        </div>
     );
}
 
export default Navigation;