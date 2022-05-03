const Navigation = ({handleChange}) => {
  /** Navigaatio olisi parempi olla toinen */
    return ( 
        <div className='cities'>
            <select defaultValue="" name="city" onChange={(handleChange)}>
              <option value="" hidden disabled></option>
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