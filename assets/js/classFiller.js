document.addEventListener("DOMContentLoaded", function(){
    const filter = document.getElementById("classFilter");
    const cards = document.querySelectorAll(".class_card");

    filter.addEventListener("change", function(){
        const value = this.value;

        cards.forEach(card => {
            if (value === "all"){
                card.style.display = "block";
            } else {
                if (card.classList.contains(value)){
                    card.style.display = "block";

                } else {
                    card.style.display = "none";
                }
            }
        })
    })

    
})