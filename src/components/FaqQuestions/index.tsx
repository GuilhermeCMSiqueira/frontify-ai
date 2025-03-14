import React from 'react'

const FaqQuestions = () => {
  return (
    <ul className="px-20 flex flex-col gap-6">
        <li className="gap-4 flex flex-col">
            <h2 className="text-2xl font-montserrat font-bold">Como posso centralizar uma div?</h2>
            <p className="font-montserrat text-justify">Para centralizar um elemento dentro de uma div, você pode usar as propriedades de alinhamento disponíveis em CSS. Configure a div como um contêiner flexível ou de grade e ajuste as opções de alinhamento horizontal e vertical para posicionar o elemento no centro.</p>
        </li>
        <li className="gap-4 flex flex-col">
            <h2 className="text-2xl font-montserrat font-bold">Como faço para implementar um botão com animação ao passar o mouse?</h2>
            <p className="font-montserrat text-justify">Você pode criar um botão com animação ao passar o mouse utilizando transições CSS. Defina a propriedade <code>transition</code> no botão para suavizar mudanças de estilo, como a cor ou o tamanho, quando o estado <code>:hover</code> for ativado.</p>
        </li>
        <li className="gap-4 flex flex-col">
            <h2 className="text-2xl font-montserrat font-bold">Como posso criar um menu suspenso que aparece ao clicar?</h2>
            <p className="font-montserrat text-justify">Para criar um menu suspenso, você pode usar JavaScript para alternar uma classe que exibe ou oculta o menu. Em CSS, utilize propriedades como <code>display</code>, <code>opacity</code>, ou <code>visibility</code> para controlar a exibição e adicionar animações para um efeito suave.</p>
        </li>
    </ul>
    
  )
}

export default FaqQuestions
