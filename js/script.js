//Função para mostrar mais informações sobre os projetos

document.addEventListener('DOMContentLoaded' , () =>{
    //uma funcionalidade rolagem suave para as seções
    const links =
document.querySelectorAll('nav ul li a');

    links.forEach(link => {
link.addEventListener('click',(event)=> {
    event.preventDefault();
    const targetId =
link.getAttribute('href').substring(1);

    const targetSection =
document.getElementById(targetId);

        window.scrollTo({
            top:
        targetSection.offsetTop -50,
            behavior: 'smooth'
        })
})
    })

    //Adicionar mais funcionalidades conforme necessário

});