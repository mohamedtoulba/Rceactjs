const initState = {
  db: [
    { id: 1, marque: "VOLVO", model: 2016, type: "Esssence" },
    { id: 2, marque: "RONO", model: 2017, type: "Gazoal" },
    { id: 3, marque: "FORDE", model: 2011, type: "Esssence" },
  ],
};

const reducer = (state = initState, action) =>{
  switch(action.type) {
    case "ADD":
      const newCar = {
        id: state.db.length + 1,
        marque: action.payload.marque,
        model: action.payload.model,
        type: action.payload.type,
      }
      return {
        db: [...state.db, newCar]
      }
      
      case "DELETE":
        return {
          db: state.db.filter((car) => car.id !== action.payload)
        }

        case "UPDATE":
          const updIndex = state.db.findIndex((car) => car.id === action.payload.id);
          if (updIndex !== -1) {
            const updatedCar = {
              id: action.payload.id,
              marque: action.payload.marque,
              model: action.payload.model,
              type: action.payload.type,
            };

            return {
              db: [...state.db.slice(0, updIndex),updatedCar,...state.db.slice(updIndex + 1),
              ],
            };
          }
  return state;

          

  case "SEARCH":
    const searchResult = state.db.filter(
      (car) =>
        car.marque.toLowerCase().includes(action.payload.toLowerCase())
    );

    return {
      db: searchResult,
    };
      
            return {
              db: searchResult,
            };
      default :
      return state
  }
 
}
export default reducer;