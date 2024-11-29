document.querySelectorAll('.faq-Q').forEach((question)=>{
    question.addEventListener('click', ()=>{
        const faq = question.parentElement;
        faq.classList.toggle('active');
        const icon = question.querySelector('faq-icon');
        icon.textContent = faq.classList.contains('active')
    })
})