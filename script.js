function addInputField() {
  var inputFieldsDiv = document.getElementById("inputFields");
  var newInputField = document.createElement("div");
  newInputField.className = "inputField";
  var unitsInput = document.createElement("input");
  unitsInput.type = "number";
  unitsInput.className = "unitsInput";
  unitsInput.pattern = "\\d*";
  unitsInput.placeholder = "Units";
  var gradeInput = document.createElement("input");
  gradeInput.type = "number";
  gradeInput.className = "gradeInput";
  gradeInput.pattern = "\\d*\\.?\\d*";
  gradeInput.placeholder = "Grade";
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "×";

  deleteBtn.onclick = function () {
    newInputField.remove();
  };
  newInputField.appendChild(unitsInput);
  newInputField.appendChild(gradeInput);
  newInputField.appendChild(deleteBtn);
  inputFieldsDiv.appendChild(newInputField);
}

function calculateGWA() {
  var totalGrade = 0;
  var totalUnits = 0;
  var inputFields = document.getElementsByClassName("inputField");
  for (var i = 0; i < inputFields.length; i++) {
    var units = parseFloat(
      inputFields[i].getElementsByClassName("unitsInput")[0].value
    );
    var grade = parseFloat(
      inputFields[i].getElementsByClassName("gradeInput")[0].value
    );
    if (isNaN(units) || isNaN(grade)) {
      alert(
        "Please enter valid numeric values for Units and Grade in field " +
          (i + 1) +
          "."
      );
      return;
    }
    var gwa = units * grade;
    totalGrade += gwa;
    totalUnits += units;
  }
  if (totalUnits === 0) {
    alert("Please add at least one subject with valid units and grade.");
    return;
  }
  var totalGWA = totalGrade / totalUnits;
  var resultLabel = document.getElementById("resultLabel");
  resultLabel.textContent = totalGWA.toFixed(2);
}

function resetFields() {
  var inputFields = document.getElementsByClassName("inputField");
  for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].getElementsByClassName("unitsInput")[0].value = "";
    inputFields[i].getElementsByClassName("gradeInput")[0].value = "";
  }
  var resultLabel = document.getElementById("resultLabel");
  resultLabel.textContent = "0.00";
}
