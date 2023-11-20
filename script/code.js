function calculateDaysUntilBirthday() {
    var name = document.getElementById("nameInput").value;
    var birthdate = new Date(document.getElementById("birthdateInput").value);
    var today = new Date();
    var nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    var daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    document.getElementById("output").innerHTML = name + ", your next birthday is in " + daysUntilBirthday + " days.";
}
