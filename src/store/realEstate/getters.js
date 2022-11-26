export const getForm = (state) => state.form;
export const getListOfData = (state) => state.listOfData;
export const isDisableSearch = (state) =>
  Object.values(state.form).every((x) => x === null || x === "");
