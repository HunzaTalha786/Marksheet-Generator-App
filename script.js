function calculate() {
    
    const obtainedMarks1 = parseInt(document.getElementById("marks1").value, 10);
    const obtainedMarks2 = parseInt(document.getElementById("marks2").value, 10);
    const obtainedMarks3 = parseInt(document.getElementById("marks3").value, 10);

    // Calculate total marks and percentage
    const totalMarksPerSubject = 100;
    const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    const totalMarks = totalMarksPerSubject * 3;
    const percentage = (totalObtainedMarks / totalMarks) * 100;

    // Display the result
    document.getElementById("result").innerHTML = `
        <h3>Result:</h3>
        <p>Total Marks: ${totalObtainedMarks} out of 300 for 3 subjects</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
}

function restart() {
    
    document.getElementById("marks1").value = '';
    document.getElementById("marks2").value = '';
    document.getElementById("marks3").value = '';
    document.getElementById("result").innerHTML = '';
}