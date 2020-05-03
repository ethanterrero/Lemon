// To work with the api we will create a function that has the following parameters
// We need client, platform, and epicnickname(which is the shown user name)


var allPlayers = [{name: "Ethan", lastname: "Terrero", age: 15, sister: "Laura"}, {name: "Kenneth", lastname: "Terrero", age: 12, sister: "Shannel"}];
var names = ["ethan", "laura", "Ivonne"];
function allCus(list){
  console.log("HIIIII");
  console.log(list[1]);
  list.forEach(listItem =>
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{listItem.name}<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>

    // console.log("My name is " + listItem)
  );
};


allCus(names);
