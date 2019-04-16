const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "DISPLAY_PROJECT":
      return state;
    default:
      return state;
  }
};

export default projectReducer;
