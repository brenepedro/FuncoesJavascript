document.addEventListener("DOMContentLoaded", async function(){  
    const container = document.getElementById("container");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes');

    const dados = await resposta.json();

    // const h2 = documento.createElement("h2");
    // h2.textContent = "TESTE";

    // container.appendChild(h2);

    dados.forEach( function(cnae) {       

        const divCnaeId = document.createElement("div");
        divCnaeId.classList.add("cnae-id");
        divCnaeId.textContent = `CNAE: ${cnae.id} - ${cnae.descricao}`;

        const divCnae = document.createElement("div");
        divCnae.classList.add("cnae");

        const ul = document.createElement("ul");
        
        const observacoes = cnae.observacoes;

        observacoes.forEach( function(obs){
            const li = document.createElement("li");
            li.textContent = obs;
            ul.appendChild(li);      
        });

        divCnae.appendChild(divCnaeId);

        divCnae.appendChild(ul);
        
        container.appendChild(divCnae);      
    });
}
)