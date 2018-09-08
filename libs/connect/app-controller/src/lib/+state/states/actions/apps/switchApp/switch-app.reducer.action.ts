export function SwitchAppReducerAction(state: any, action): any {
  state = {
    ...state,
    apps: {
      ...state.apps,
      currentId: action.payload
    }
  };
  return state;
}
