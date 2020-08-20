module.exports = {
  success,
  fail,
  repair,
  //get,
};

function success(item) {
  if(item.enhancement < 20) item.enhancement += 1;
  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15) item.durability -= 5;
  if(item.enhancement > 14) item.durability -= 10;
  if(item.enhancement > 15) item.enhancement -= 1;
  return { ...item };
}
//cannot use equal to, the test wont work

function repair(item) {
  if(item.durability < 100) item.durability = 100;
  return { ...item};
}

function get(item) {
  return { ...item };
}
