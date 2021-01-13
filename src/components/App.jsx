import React, { useState } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import Footer from './Footer';
import '../App.css';

const puzzleTiles = [
  {
    id: 'part6',
    image: './images/part6.png'
  },
  {
    id: 'part4',
    image: './images/part4.png'
  },
  {
    id: 'part8',
    image: './images/part8.png'
  },
  {
    id: 'part3',
    image: './images/part3.png'
  },
  {
    id: 'part2',
    image: './images/part2.png'
  },
  {
    id: 'part7',
    image: './images/part7.png'
  },
  {
    id: 'part1',
    image: './images/part1.png'
  },
  {
    id: 'part5',
    image: './images/part5.png'
  },
]

const App = () => {
  const [tiles, setTiles] = useState(puzzleTiles)

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tiles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTiles(items);
  }
  return (
    <div className="App">
        <h1>Drag & Drop to Solve the Puzzle</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tiles-container">
            {(provided) => (
              <ul className="tiles-container" {...provided.droppableProps} ref={provided.innerRef}>
                {tiles.map(({ id, image }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <img src={image} alt={image} />
                        </li>)}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <Footer />
    </div>
  )
}
export default App;