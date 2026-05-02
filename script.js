function checkGrade() {
  let score = Number(prompt("Enter your score:"));

  if (isNaN(score)) {
    alert("Please enter a valid number");

  } else if (score >= 70 && score <= 100) {
    alert("Grade: A\nRemark: Excellent");

  } else if (score >= 60 && score <= 69) {
    alert("Grade: B\nRemark: Very Good");

  } else if (score >= 50 && score <= 59) {
    alert("Grade: C\nRemark: Good");

  } else if (score >= 45 && score <= 49) {
    alert("Grade: D\nRemark: Fair");

  } else if (score >= 40 && score <= 44) {
    alert("Grade: E\nRemark: Pass");

  } else if (score >= 0 && score <= 39) {
    alert("Grade: F\nRemark: Fail");

  } else {
    alert("Invalid score");
  }
}
