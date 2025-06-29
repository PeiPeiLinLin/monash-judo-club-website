document.addEventListener("DOMContentLoaded", function(){
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((btn) => {
        btn.addEventListener("click", function(){
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display ==="block";
            document.querySelectorAll(".faq-question").forEach(a => a.style.display ==="none" )
            if(isVisible){
                answer.style.display= "none";
            } else{
                document.querySelectorAll(".faq-question").forEach(a => a.style.display ==="none" )
                answer.style.display= "block";
            }
        })
    })

})