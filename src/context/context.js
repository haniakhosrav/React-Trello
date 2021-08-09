import React from "react";

var TrelloStateContext = React.createContext();
var TrelloDispatchContext = React.createContext();

function TrelloReducer(state, action) {
  switch (action.type) {
    case "MENU":
      return {isOpen: action.payload}      
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TrelloProvider({children}) {
  var [state, dispatch] = React.useReducer(TrelloReducer, {
    
    isOpen: true,
  });
  return (
    <TrelloStateContext.Provider value={state}>
      <TrelloDispatchContext.Provider value={dispatch}>
        {children}
      </TrelloDispatchContext.Provider>
    </TrelloStateContext.Provider>
  );
}

function useTrelloState() {
  var context = React.useContext(TrelloStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useTrellorDispatch() {
  var context = React.useContext(TrelloDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export {TrelloProvider, useTrelloState, useTrellorDispatch, setIsMenuOpen};

// ###########################################################

function setIsMenuOpen(dispatch, trueOrFalse) {
  dispatch({
    type: "MENU",
    payload: trueOrFalse
  });
}