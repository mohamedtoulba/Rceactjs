const initialState = {
    dbStagiaire : [
        {image:"https://www.acs-ami.com/fr/blog/wp-content/uploads/2012/07/etudier-a-l-etranger-1.jpg", nom: "Nada", prenom: "Pahi", filiere: "TDI"},
        {image:"https://static.lematin.ma/files/lematin/images/articles/2020/10/74dda08b7cd2a6a35972f0ae5875ce0d.jpg", nom: "Rida", prenom: "Nali", filiere: "MOBILE"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJjMbwFDkeH3HNVVxQS4vHPMP13o5tSQWx6l20RMA3wYSFLrN4qui00Nn8KJ0Ir_UDV8&usqp=CAU", nom: "Hajare", prenom: "Alaoiy", filiere: "Dv-digital"},
        {image:"https://www.stellamaris-edu.net/wp-content/uploads/2022/10/sinscrire-%C3%A0-luniversit%C3%A9-%C3%A0-Nice.jpg", nom: "Yassine", prenom: "Mansory", filiere: "Dv-digital"},

    ]
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case "add": 
        return {
            dbStagiaire: [...state.dbStagiaire, action.payload]
        }

        case "delete" : 
        return {
            dbStagiaire: state.dbStagiaire.filter((res) => res.nom !== action.payload) 
            
        }


        case "SEARCH":
            const searchResult = state.dbStagiaire.filter((res) => res.nom.toLowerCase().includes(action.payload.toLowerCase())
            );
        
            return {
            dbStagiaire: searchResult,
            };

       

        default:
            return state
    }
}
export default reducer;