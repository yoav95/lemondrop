import Item from './Item';
import styles from './ItemsView.module.css';
import bagsData from '../../items.json'; // Adjust path based on where the JSON is located
import { useState } from 'react';
import SoundPlayer from '../helpers/SoundPlayer';
// load items here
function ItemsView({type}) {
  const [playSound, setPlaySound] = useState(false);
  const itemsArray = (bagsData.bags);
  const triggerSound = () => {
    setPlaySound(true); // Trigger the sound play
    setTimeout(() => setPlaySound(false), 1000); // Stop the sound after 1 second
  };

  // Filter items that contain the type in their type array
  const filteredItems = type
    ? itemsArray.filter(item => item.type.includes(type))
    : itemsArray; // If no type is selected, show all items


    return (
      <div className={styles.grid}>
        {filteredItems.map(item => 
          (<Item handler={triggerSound} name={item.name} colors={item.colors} price={item.price} key={item.id} id={item.id} img={item.img} details={item.details}/>)
      )}

        <SoundPlayer soundFile="/sounds/drop.mp3" play={playSound} />
      </div>
    )
  }
  
  export default ItemsView
  