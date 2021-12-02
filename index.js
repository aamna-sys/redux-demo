const BUY_CAKE = "BUY_CAKE";

// Action: plain JavaScript object with "type" property
// Action creator: a function that returns the action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
    // you can have any number of properties you want
  };
}
