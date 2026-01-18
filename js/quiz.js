
function corrigerQuiz() {
    let score = 0;
    let html = "";

   
    if (document.getElementById("q1b").checked) {
        score++;
        html += "<p>Question 1 : Correct !</p>";
    } else {
        html += "<p>Question 1 : Faux → La bonne réponse était <strong>B</strong></p>";
    }

 
    if (document.getElementById("q2b").checked) {
        score++;
        html += "<p>Question 2 : Correct !</p>";
    } else {
        html += "<p>Question 2 : Faux → La bonne réponse était <strong>B</strong></p>";
    }

   
    if (document.getElementById("q3b").checked) {
        score++;
        html += "<p>Question 3 : Correct !</p>";
    } else {
        html += "<p>Question 3 : Faux → La bonne réponse était <strong>B</strong></p>";
    }

  
    if (document.getElementById("q4b").checked) {
        score++;
        html += "<p>Question 4 : Correct !</p>";
    } else {
        html += "<p>Question 4 : Faux → La bonne réponse était <strong>B</strong></p>";
    }

 
    if (document.getElementById("q5b").checked) {
        score++;
        html += "<p>Question 5 : Correct !</p>";
    } else {
        html += "<p>Question 5 : Faux → La bonne réponse était <strong>B</strong></p>";
    }

   
    if (document.getElementById("q6b").checked) {
        score++;
        html += "<p>Question 6 : Correct !</p>";
    } else {
        html += "<p>Question 6 : Faux → La bonne réponse était <strong>B</strong></p>";
    }

   
    if (document.getElementById("q7b").checked) {
        score++;
        html += "<p>Question 7 : Correct !</p>";
    } else {
        html += "<p>Question 7 : Faux → La bonne réponse était <strong>B</strong></p>";
    }

   
    if (document.getElementById("q8c").checked) {
        score++;
        html += "<p>Question 8 : Correct !</p>";
    } else {
        html += "<p>Question 8 : Faux → La bonne réponse était <strong>C</strong></p>";
    }

 
    if (document.getElementById("q9b").checked) {
        score++;
        html += "<p>Question 9 : Correct !</p>";
    } else {
        html += "<p>Question 9 : Faux → La bonne réponse était <strong>B</strong></p>";
    }

    
    if (document.getElementById("q10a").checked) {
        score++;
        html += "<p>Question 10 : Correct !</p>";
    } else {
        html += "<p>Question 10 : Faux → La bonne réponse était <strong>A</strong></p>";
    }

    
    document.getElementById("score").innerHTML = score + " / 10";

    
    let message = "";
    if (score === 10) message = "Parfait ! Tu es un expert !";
    else if (score >= 7) message = "Très bien ! Solides bases.";
    else if (score >= 4) message = "Pas mal, continue !";
    else message = "Courage, tu progresses vite !";

    
    document.getElementById("corrections").innerHTML = 
        "<p style='font-size:1.4em; color:#1e3a5f; text-align:center; margin:20px 0;'>" + 
        message + 
        "</p>" +
        "<div style='margin-top:15px;'>" + html + "</div>";

    document.getElementById("resultat").style.display = "block";

    
    document.getElementById("resultat").scrollIntoView({ behavior: "smooth" });
}
