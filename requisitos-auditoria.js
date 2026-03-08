let totalRequisitos = 100;

let auditorias = [
    { ano: 2022, naoConformes: 5 },
    { ano: 2023, naoConformes: 3 },
    { ano: 2024, naoConformes: 7 }
];

function calcularHistorico(totalRequisitos, auditorias) {

    let somaConformidade = 0;

    let melhorAuditoria = null;
    let piorAuditoria = null;   

    console.log("Histórico de auditorias:");

    auditorias.sort((a, b) => a.ano - b.ano);
    
    for (let i = 0; i < auditorias.length; i++) {

        let auditoria = auditorias[i];

        let conformes = totalRequisitos - auditoria.naoConformes;

        let porcentagem = (conformes / totalRequisitos) * 100;

        if (melhorAuditoria === null || porcentagem > melhorAuditoria.porcentagem) {
            melhorAuditoria = {
                ano: auditoria.ano,
                porcentagem: porcentagem
            };
        }

        if (piorAuditoria === null || porcentagem < piorAuditoria.porcentagem) {
            piorAuditoria = {
                ano: auditoria.ano,
                porcentagem: porcentagem
            };
        }

        somaConformidade += porcentagem;

        console.log(`Ano: ${auditoria.ano} | Não conformidades: ${auditoria.naoConformes} | Conformidade: ${porcentagem.toFixed(0)}%`);
    }

    let media = somaConformidade / auditorias.length;

    let menorAno = auditorias[0].ano;
    let maiorAno = auditorias[0].ano;

    for (let i = 1; i < auditorias.length; i++) {

        if (auditorias[i].ano < menorAno) {
            menorAno = auditorias[i].ano;
        }

        if (auditorias[i].ano > maiorAno) {
            maiorAno = auditorias[i].ano;
        }
    }

    console.log("-----------------------");
    console.log(`Período analisado: ${menorAno} - ${maiorAno}`);
    console.log(`Média de conformidade das auditorias: ${media.toFixed(0)}%`);
    console.log(`Quantidade total de requisitos avaliado por auditoria: ${totalRequisitos}`)
    console.log("-----------------------");
    console.log(`Melhor auditoria: ${melhorAuditoria.ano} (${melhorAuditoria.porcentagem.toFixed(0)}%)`);
    console.log(`Pior auditoria: ${piorAuditoria.ano} (${piorAuditoria.porcentagem.toFixed(0)}%)`);
}

function adicionarAuditoria(lista, ano, naoConformes) {

    lista.push({
        ano: ano,
        naoConformes: naoConformes
    });

}

adicionarAuditoria(auditorias, 2025, 4);
adicionarAuditoria(auditorias, 2021, 10);
adicionarAuditoria(auditorias, 2020, 12);

calcularHistorico(totalRequisitos, auditorias);