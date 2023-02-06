function CalculateFinalGrade() {


    // All the variables are taken from the HTML and converted into floats
    // They are then converted into percentages
    var assignmentInput = parseFloat($("#assignmentsInput").val()) * 0.5;
    var groupProjects = parseFloat($("#groupInput").val()) * 0.1;
    var quizzes = parseFloat($("#quizzesInput").val()) * 0.1;
    var midterm = parseFloat($("#midtermInput").val()) * 0.1;
    var finalGrade = parseFloat($("#finalInput").val()) * 0.1;
    var intexGrade = parseFloat($("#intexInput").val()) * 0.1;

    //the final percentage is calculated
    results = assignmentInput + groupProjects + quizzes + midterm + finalGrade + intexGrade;

    //letter grade is initialized
    letterGrade = "NA";

    //these long if statements determine the letter grade and color
    if (results >= 94) {
        letterGrade = "A";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "green");
    }
    else if (results >= 90) {
        letterGrade = "A-";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "green");
    }
    else if (results >= 87) {
        letterGrade = "B+";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "green");
    }
    else if (results >= 84) {
        letterGrade = "B";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "green");
    }
    else if (results >= 80) {
        letterGrade = "B-";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "green");
    }
    else if (results >= 77) {
        letterGrade = "C+";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "green");
    }
    else if (results >= 74) {
        letterGrade = "C";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "green");
    }
    else if (results >= 70) {
        letterGrade = "C-";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "green");
    }
    else if (results >= 67) {
        letterGrade = "D+";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "red");
    }
    else if (results >= 64) {
        letterGrade = "D";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "red");
    }
    else if (results >= 60) {
        letterGrade = "D-";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "red");
    }
    else {
        letterGrade = "E";
        $("#letterOutput").html(letterGrade);
        $("#letterOutput").html(letterGrade).css("color", "red");
    }

    //the percentage is inputted back onto the html file
    resultString = results + "%";
    $("#percentageOutput").html(resultString);

    alert("Letter Grade: " + letterGrade + "\nPercentage: " + resultString)


}