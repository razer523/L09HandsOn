let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let nameObj = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = nameObj.name;

    let dateObj = JSON.parse(this.responseText);
    document.getElementById("birthDate").innerHTML = dateObj.birthday;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function loadBio(){
    let newRequest2 = new XMLHttpRequest();
    newRequest2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let bioObj = JSON.parse(this.responseText);
        document.getElementById("bioLoad").innerHTML = bioObj.bio;
      }
    };
    newRequest2.open("GET", "einstein.json", true);
    newRequest2.send();
}