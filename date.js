module.exports.getDate = function(){
  let today = new Date();
  let options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  let day = today.toLocaleDateString("en-US",options);

  return day;
}
