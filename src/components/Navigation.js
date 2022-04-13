const Navigation = ({handleClick}) => {
    return ( 
        <div className='cities'>
          <div>
            <button onClick={() => handleClick('allCities')}>Kaikki kaupungit</button>
            <button onClick={() => handleClick('634963')}>Tampere</button>
            <button onClick={() => handleClick('655195')}>Jyväskylä</button>
            <button onClick={() => handleClick('650225')}>Kuopio</button>
            <button onClick={() => handleClick('660129')}>Espoo</button>
          </div>
        </div>
     );
}
 
export default Navigation;