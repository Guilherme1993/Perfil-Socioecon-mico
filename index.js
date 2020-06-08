import { Student } from './model.js';

var csvArray = []

let arrCursoLabel = [];
let arrPeriodoLabel = [];
let arrEstadoLabel = [];
let arrCidadeLabel = [];
let arrGeneroLabel = [];
let arrIdadeLabel = [];
let arrFaixaEtariaLabel = [];
let arrEstadoCivilLabel = [];
let arrNecEspecialLabel = [];
let arrFilhosLabel = [];
let arrQuemMoraLabel = [];
let arrQtdeMoraLabel = [];
let arrSitDomicilioLabel = [];
let arrTempoMoraLabel = [];
let arrFaixaRendaLabel = [];

let arrQtdeTvLabel = [];
let arrQtdeVhsLabel = [];
let arrQtdeRadioLabel = [];
let arrQtdeAutoLabel = [];
let arrQtdeMotoLabel = [];
let arrQtdeCelComLabel = [];
let arrQtdeSmartPhLabel = [];
let arrQtdePcLabel = [];
let arrQtdeNoteLabel = [];

let arrPossuiTelefoneLabel = [];
let arrPossuiInternetLabel = [];
let arrPossuiTvAssinLabel = [];
let arrPossuiEmpregadaLabel = [];

let arrTrabalhaLabel = [];
let arrVincEmpregLabel = [];
let arrAreaTrabLabel = [];
let arrHoraTrabLabel = [];
let arrPlanoSaudeLabel = [];
let arrEscolMaeLabel = [];
let arrEscolPaiLabel = [];
let arrOndeEstudouLabel = [];
let arrFreqUsaPcLabel = [];

let arrLocalUsaPcLabel = [];
let arrUsaPcCasa = [];
let arrUsaPcTrab = [];
let arrUsaPcEscola = [];
let arrUsaPcOutros = [];

let arrFinUsaPcLabel = [];
let arrFinTrab = [];
let arrFinEscol = [];
let arrFinEntret = [];
let arrFinEmail = [];
let arrFinBanco = [];
let arrFinCompra = [];

let arrConhecInfoLabel = [];

let arrConhecWindLabel = [];
let arrConhecLinLabel = [];
let arrEdTextLabel = [];
let arrPlanEletLabel = [];
let arrApreSlideLabel = [];
let arrSistGerLabel = [];

let arrConhecInglesLabel = [];
let arrConhecEspLabel = [];
let arrConhecOutrosLabel = [];

let arrBuscInfoTvLabel = [];
let arrBuscInfoNetLabel = [];
let arrBuscInfoRevLabel = [];
let arrBuscInfoRadLabel = [];
let arrBuscInfoRedSocLabel = [];
let arrBuscInfoAmigosLabel = [];

let arrFreqJornalLabel = [];
let assuntosJornal = [];
let arrAssunJornalLabel = [];


let arrQtdeLivrosLabel = [];
let arrGenLivrosLabel = [];
let arrAtivVoluntLabel = [];
let arrReligiaoLabel = [];

let arrEntCultLabel = [];
let entretenimento = [];

let arrConFatecLabel = [];
let arrEscCursoLabel = [];
let arrExpCursoLabel = [];
let arrExpFormarLabel = [];
let arrJaEstFatecLabel = [];
let arrCursoTecLabel = [];
let arrMeioTranspLabel = [];

let arrCursoData = [];
let arrPeriodoData = [];
let arrEstadoData = [];
let arrCidadeData = [];
let arrGeneroData = [];
let arrFaixaEtariaData = [];
let arrEstadoCivilData = [];
let arrNecEspecialData = [];
let arrFilhosData = [];
let arrQuemMoraData = [];
let arrQtdeMoraData = [];
let arrSitDomicilioData = [];
let arrTempoMoraData = [];
let arrFaixaRendaData = [];

let arrQtdeTvData = [];
let arrQtdeVhsData = [];
let arrQtdeRadioData = [];
let arrQtdeAutoData = [];
let arrQtdeMotoData = [];
let arrQtdeCelComData = [];
let arrQtdeSmartPhData = [];
let arrQtdePcData = [];
let arrQtdeNoteData = [];

let arrPossuiTelefoneData = [];
let arrPossuiInternetData = [];
let arrPossuiTvAssinData = [];
let arrPossuiEmpregadaData = [];

let arrTrabalhaData = [];
let arrVincEmpregData = [];
let arrAreaTrabData = [];
let arrHoraTrabData = [];
let arrPlanoSaudeData = [];
let arrEscolMaeData = [];
let arrEscolPaiData = [];
let arrOndeEstudouData = [];
let arrFreqUsaPcData = [];
let arrLocalUsaPcData = [];
let arrFinUsaPcData = [];
let arrConhecInfoData = [];

let arrConhecWindData = [];
let arrConhecLinData = [];
let arrEdTextData = [];
let arrPlanEletData = [];
let arrApreSlideData = [];
let arrSistGerData = [];

let arrConhecInglesData = [];
let arrConhecEspData = [];
let arrConhecOutrosData = [];

let arrBuscInfoTvData = [];
let arrBuscInfoNetData = [];
let arrBuscInfoRevData = [];
let arrBuscInfoRadData = [];
let arrBuscInfoRedSocData = [];
let arrBuscInfoAmigosData = [];

let arrFreqJornalData = [];
let arrAssunJornalData = [];
let arrQtdeLivrosData = [];
let arrGenLivrosData = [];
let arrAtivVoluntData = [];
let arrReligiaoData = [];
let arrEntCultData = [];
let arrConFatecData = [];
let arrEscCursoData = [];
let arrExpCursoData = [];
let arrExpFormarData = [];
let arrJaEstFatecData = [];
let arrCursoTecData = [];
let arrMeioTranspData = [];

let nuvemPalavras = [];
let arrInfo = [];

let arrFiltro = [];
let periodoRadio;

let qtdeRespostas = document.getElementById('qtdeRespostas');

let divNuvem = document.getElementById('nuvem');

function mudarEstado() {
    var display = document.getElementById('minhaDiv').style.display;

    if (display == "none") {
        document.getElementById('minhaDiv').style.display = 'block';
    } else {
        document.getElementById('minhaDiv').style.display = 'none';
    }

    qtdeRespostas.innerHTML = `Quantidade de Respostas (Total): ${arrInfo.length}`

    var ctx = document.getElementById('myChart').getContext('2d');
    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var ctx3 = document.getElementById('myChart3').getContext('2d');
    var ctx4 = document.getElementById('myChart4').getContext('2d');
    var ctx5 = document.getElementById('myChart5').getContext('2d');
    var ctx6 = document.getElementById('myChart6').getContext('2d');
    var ctx7 = document.getElementById('myChart7').getContext('2d');
    var ctx8 = document.getElementById('myChart8').getContext('2d');
    var ctx9 = document.getElementById('myChart9').getContext('2d');
    var ctx10 = document.getElementById('myChart10').getContext('2d');
    var ctx11 = document.getElementById('myChart11').getContext('2d');
    var ctx12 = document.getElementById('myChart12').getContext('2d');
    var ctx13 = document.getElementById('myChart13').getContext('2d');
    var ctx14 = document.getElementById('myChart14').getContext('2d');
    var ctx15 = document.getElementById('myChart15').getContext('2d');
    var ctx16 = document.getElementById('myChart16').getContext('2d');
    var ctx16 = document.getElementById('myChart16').getContext('2d');
    var ctx17 = document.getElementById('myChart17').getContext('2d');
    var ctx18 = document.getElementById('myChart18').getContext('2d');
    var ctx19 = document.getElementById('myChart19').getContext('2d');
    var ctx20 = document.getElementById('myChart20').getContext('2d');
    var ctx21 = document.getElementById('myChart21').getContext('2d');
    var ctx22 = document.getElementById('myChart22').getContext('2d');
    var ctx23 = document.getElementById('myChart23').getContext('2d');
    var ctx24 = document.getElementById('myChart24').getContext('2d');
    var ctx25 = document.getElementById('myChart25').getContext('2d');
    var ctx26 = document.getElementById('myChart26').getContext('2d');
    var ctx27 = document.getElementById('myChart27').getContext('2d');
    var ctx28 = document.getElementById('myChart28').getContext('2d');
    var ctx29 = document.getElementById('myChart29').getContext('2d');
    var ctx30 = document.getElementById('myChart30').getContext('2d');
    var ctx31 = document.getElementById('myChart31').getContext('2d');
    var ctx32 = document.getElementById('myChart32').getContext('2d');
    var ctx33 = document.getElementById('myChart33').getContext('2d');
    var ctx34 = document.getElementById('myChart34').getContext('2d');
    var ctx35 = document.getElementById('myChart35').getContext('2d');
    var ctx36 = document.getElementById('myChart36').getContext('2d');
    var ctx37 = document.getElementById('myChart37').getContext('2d');
    var ctx38 = document.getElementById('myChart38').getContext('2d');
    var ctx39 = document.getElementById('myChart39').getContext('2d');
    var ctx40 = document.getElementById('myChart40').getContext('2d');
    var ctx41 = document.getElementById('myChart41').getContext('2d');
    var ctx42 = document.getElementById('myChart42').getContext('2d');
    var ctx43 = document.getElementById('myChart43').getContext('2d');
    var ctx44 = document.getElementById('myChart44').getContext('2d');
    var ctx45 = document.getElementById('myChart45').getContext('2d');
    var ctx46 = document.getElementById('myChart46').getContext('2d');
    var ctx47 = document.getElementById('myChart47').getContext('2d');
    var ctx48 = document.getElementById('myChart48').getContext('2d');
    var ctx49 = document.getElementById('myChart49').getContext('2d');
    var ctx50 = document.getElementById('myChart50').getContext('2d');
    var ctx51 = document.getElementById('myChart51').getContext('2d');
    var ctx52 = document.getElementById('myChart52').getContext('2d');
    var ctx53 = document.getElementById('myChart53').getContext('2d');
    var ctx54 = document.getElementById('myChart54').getContext('2d');
    var ctx55 = document.getElementById('myChart55').getContext('2d');
    var ctx56 = document.getElementById('myChart56').getContext('2d');
    var ctx57 = document.getElementById('myChart57').getContext('2d');
    var ctx58 = document.getElementById('myChart58').getContext('2d');
    var ctx59 = document.getElementById('myChart59').getContext('2d');
    var ctx60 = document.getElementById('myChart60').getContext('2d');
    var ctx61 = document.getElementById('myChart61').getContext('2d');
    var ctx62 = document.getElementById('myChart62').getContext('2d');
    var ctx63 = document.getElementById('myChart63').getContext('2d');
    var ctx64 = document.getElementById('myChart64').getContext('2d');
    var ctx65 = document.getElementById('myChart65').getContext('2d');
    var ctx66 = document.getElementById('myChart66').getContext('2d');
    var ctx67 = document.getElementById('myChart67').getContext('2d');

    let backgroundColor = [
        'rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(120, 159, 201, 0.3)', 'rgba(255, 180, 82, 0.3)', 'rgba(245, 196, 0, 0.6)', 'rgba(127, 120, 92, 0.6)'
    ]

    let backGroundColorBar = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 255, 0, 0.2)', 'rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(120, 159, 201, 0.2)', 'rgba(255, 180, 82, 0.2)']

    let borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 1)', 'rgba(120, 159, 201, 1)', 'rgba(255, 180, 82, 1)']

    let options = {
        responsive: true,
        legend: {
            position: 'bottom',
        },
    }

    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrCursoData,
                backgroundColor: backgroundColor,
                label: 'Curso'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrCursoLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx1, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrPeriodoData,
                backgroundColor: backgroundColor,
                label: 'Período'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrPeriodoLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrEstadoData,
                backgroundColor: backgroundColor,
                label: 'Estado'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrEstadoLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx3, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrCidadeData,
                backgroundColor: backgroundColor,
                label: 'Cidade'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrCidadeLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx4, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrGeneroData,
                backgroundColor: backgroundColor,
                label: 'Gênero'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrGeneroLabel
        },
        options: options
    });

    var myChart = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: arrFaixaEtariaLabel,
            datasets: [{
                label: 'Alunos',
                data: arrFaixaEtariaData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx6, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrEstadoCivilData,
                backgroundColor: backgroundColor,
                label: 'Estado Civil'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrEstadoCivilLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx7, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrNecEspecialData,
                backgroundColor: backgroundColor,
                label: 'Necessidades Especiais'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrNecEspecialLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx8, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrFilhosData,
                backgroundColor: backgroundColor,
                label: 'Filhos'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrFilhosLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx9, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQuemMoraData,
                backgroundColor: backgroundColor,
                label: 'Com quem mora'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQuemMoraLabel
        },
        options: options
    });

    var myChart = new Chart(ctx10, {
        type: 'bar',
        data: {
            labels: arrQtdeMoraLabel,
            datasets: [{
                label: 'Alunos',
                data: arrQtdeMoraData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx11, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrSitDomicilioData,
                backgroundColor: backgroundColor,
                label: 'Situação do Domicílio'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrSitDomicilioLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx12, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrTempoMoraData,
                backgroundColor: backgroundColor,
                label: 'Tempo de Moradia'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrTempoMoraLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx13, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrFaixaRendaData,
                backgroundColor: backgroundColor,
                label: 'Renda Mensal'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrFaixaRendaLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx14, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeTvData,
                backgroundColor: backgroundColor,
                label: 'Qtde TV'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeTvLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx15, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeVhsData,
                backgroundColor: backgroundColor,
                label: 'Qtde VHS'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeVhsLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx16, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeRadioData,
                backgroundColor: backgroundColor,
                label: 'Qtde Rádio'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeRadioLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx17, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeAutoData,
                backgroundColor: backgroundColor,
                label: 'Qtde Carros'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeAutoLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx18, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeMotoData,
                backgroundColor: backgroundColor,
                label: 'Qtde Motos'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeMotoLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx19, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeCelComData,
                backgroundColor: backgroundColor,
                label: 'Qtde Celular'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeCelComLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx20, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeSmartPhData,
                backgroundColor: backgroundColor,
                label: 'Qtde Smartphone'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeSmartPhLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx21, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdePcData,
                backgroundColor: backgroundColor,
                label: 'Qtde PC'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdePcLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx22, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeNoteData,
                backgroundColor: backgroundColor,
                label: 'Qtde Note'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeNoteLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx23, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrPossuiTelefoneData,
                backgroundColor: backgroundColor,
                label: 'Possui Telefone'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrPossuiTelefoneLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx24, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrPossuiInternetData,
                backgroundColor: backgroundColor,
                label: 'Possui Internet'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrPossuiInternetLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx25, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrPossuiTvAssinData,
                backgroundColor: backgroundColor,
                label: 'Possui TV por Assinatura'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrPossuiTvAssinLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx26, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrPossuiEmpregadaData,
                backgroundColor: backgroundColor,
                label: 'Possui Empregada'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrPossuiEmpregadaLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx27, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrTrabalhaData,
                backgroundColor: backgroundColor,
                label: 'Trabalha'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrTrabalhaLabel
        },
        options: options
    });

    var myChart = new Chart(ctx28, {
        type: 'bar',
        data: {
            labels: arrVincEmpregLabel,
            datasets: [{
                label: 'Alunos',
                data: arrVincEmpregData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx29, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrAreaTrabData,
                backgroundColor: backgroundColor,
                label: 'Área de Trabalho'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrAreaTrabLabel
        },
        options: options
    });

    var myChart = new Chart(ctx30, {
        type: 'bar',
        data: {
            labels: arrHoraTrabLabel,
            datasets: [{
                label: 'Alunos',
                data: arrHoraTrabData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx31, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrPlanoSaudeData,
                backgroundColor: backgroundColor,
                label: 'Plano de Saúde'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrPlanoSaudeLabel
        },
        options: options
    });

    var myChart = new Chart(ctx32, {
        type: 'bar',
        data: {
            labels: arrEscolMaeLabel,
            datasets: [{
                label: 'Alunos',
                data: arrEscolMaeData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myChart = new Chart(ctx33, {
        type: 'bar',
        data: {
            labels: arrEscolPaiLabel,
            datasets: [{
                label: 'Alunos',
                data: arrEscolPaiData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myChart = new Chart(ctx34, {
        type: 'bar',
        data: {
            labels: arrOndeEstudouLabel,
            datasets: [{
                label: 'Alunos',
                data: arrOndeEstudouData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx35, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrFreqUsaPcData,
                backgroundColor: backgroundColor,
                label: 'Frequência usa Computador'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrFreqUsaPcLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx36, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrLocalUsaPcData,
                backgroundColor: backgroundColor,
                label: 'Local usa Computador'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrLocalUsaPcLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx37, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrFinUsaPcData,
                backgroundColor: backgroundColor,
                label: 'Finalidade usa Computador'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrFinUsaPcLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx38, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrConhecInfoData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento em Informática'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrConhecInfoLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx39, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrConhecWindData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Windows'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrConhecWindLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx40, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrConhecLinData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Linux'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrConhecLinLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx41, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrEdTextData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Editores de Texto'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrEdTextLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx42, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrPlanEletData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Planilhas Eletrônicas'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrPlanEletLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx43, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrApreSlideData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Apresentadores'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrApreSlideLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx44, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrSistGerData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Sistemas de Gerenciamento'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrSistGerLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx45, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrConhecInglesData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Inglês'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrConhecInglesLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx46, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrConhecEspData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Espanhol'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrConhecEspLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx47, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrConhecOutrosData,
                backgroundColor: backgroundColor,
                label: 'Conhecimento Outros Idiomas'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrConhecOutrosLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx48, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrBuscInfoTvData,
                backgroundColor: backgroundColor,
                label: 'Info TV'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrBuscInfoTvLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx49, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrBuscInfoNetData,
                backgroundColor: backgroundColor,
                label: 'Info Net'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrBuscInfoNetLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx50, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrBuscInfoRevData,
                backgroundColor: backgroundColor,
                label: 'Info Revista'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrBuscInfoRevLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx51, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrBuscInfoRadData,
                backgroundColor: backgroundColor,
                label: 'Info Rádio'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrBuscInfoRadLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx52, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrBuscInfoRedSocData,
                backgroundColor: backgroundColor,
                label: 'Info Redes Sociais'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrBuscInfoRedSocLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx53, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrBuscInfoAmigosData,
                backgroundColor: backgroundColor,
                label: 'Info Amigos'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrBuscInfoAmigosLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx54, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrFreqJornalData,
                backgroundColor: backgroundColor,
                label: 'Frequência Jornais'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrFreqJornalLabel
        },
        options: options
    });

    var myChart = new Chart(ctx55, {
        type: 'bar',
        data: {
            labels: arrAssunJornalLabel,
            datasets: [{
                label: 'Alunos',
                data: arrAssunJornalData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx56, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrQtdeLivrosData,
                backgroundColor: backgroundColor,
                label: 'Qtde Livros por Ano'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrQtdeLivrosLabel
        },
        options: options
    });

    var myChart = new Chart(ctx57, {
        type: 'bar',
        data: {
            labels: arrGenLivrosLabel,
            datasets: [{
                label: 'Alunos',
                data: arrGenLivrosData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx58, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrAtivVoluntData,
                backgroundColor: backgroundColor,
                label: 'Atividades Voluntárias'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrAtivVoluntLabel
        },
        options: options
    });

    var myChart = new Chart(ctx59, {
        type: 'bar',
        data: {
            labels: arrReligiaoLabel,
            datasets: [{
                label: 'Alunos',
                data: arrReligiaoData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myChart = new Chart(ctx60, {
        type: 'bar',
        data: {
            labels: arrEntCultLabel,
            datasets: [{
                label: 'Alunos',
                data: arrEntCultData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx61, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrConFatecData,
                backgroundColor: backgroundColor,
                label: 'Como Conheceu a Fatec'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrConFatecLabel
        },
        options: options
    });

    var myChart = new Chart(ctx62, {
        type: 'bar',
        data: {
            labels: arrEscCursoLabel,
            datasets: [{
                label: 'Alunos',
                data: arrEscCursoData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx63, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrExpCursoData,
                backgroundColor: backgroundColor,
                label: 'Expectativa Curso'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrExpCursoLabel
        },
        options: options
    });

    var myChart = new Chart(ctx64, {
        type: 'bar',
        data: {
            labels: arrExpFormarLabel,
            datasets: [{
                label: 'Alunos',
                data: arrExpFormarData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myPieChart = new Chart(ctx65, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrJaEstFatecData,
                backgroundColor: backgroundColor,
                label: 'Já Estudou Nesta Instituição'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrJaEstFatecLabel
        },
        options: options
    });

    var myPieChart = new Chart(ctx66, {
        type: 'pie',
        data: {
            datasets: [{
                data: arrCursoTecData,
                backgroundColor: backgroundColor,
                label: 'Fez Algum Curso Técnico'
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrCursoTecLabel
        },
        options: options
    });

    var myChart = new Chart(ctx67, {
        type: 'bar',
        data: {
            labels: arrMeioTranspLabel,
            datasets: [{
                label: 'Alunos',
                data: arrMeioTranspData,
                backgroundColor: backGroundColorBar,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function tratarDados(csv) {

    for (let i = 1; i < csv.length; i++) {

        let aux = csv[i].substring(1, csv[i].length - 1)

        var linha = aux.split('","');

        if (linha[0].indexOf("2020/") != -1) {

            var student = new Student();

            student.Data = linha[0];
            student.Ra = linha[1];
            student.Curso = linha[2];
            student.Periodo = linha[3];
            student.Estado = linha[4];
            student.Cidade = linha[5];
            student.Genero = linha[6];
            student.Nascimento = linha[7];
            student.EstadoCivil = linha[8];
            student.Deficiencia = linha[9];
            student.QtdeFilhos = linha[10];
            student.MoraAtualmente = linha[11];
            student.QtdeMoradores = linha[12];
            student.SitImovel = linha[13];
            student.TempoMoradia = linha[14];
            student.RendaMensal = linha[15];
            student.QtdeTv = linha[16];
            student.QtdeDvd = linha[17];
            student.QtdeRadio = linha[18];
            student.QtdeAutomoveis = linha[19];
            student.QtdeMotos = linha[20];
            student.QtdeCelularComum = linha[21];
            student.QtdeSmartphone = linha[22];
            student.QtdeDesktop = linha[23];
            student.QtdeNotebook = linha[24];
            student.PossuiTelefone = linha[25];
            student.PossuiInternet = linha[26];
            student.PossuiTVAssin = linha[27];
            student.PossuiEmpregada = linha[28];
            student.Trabalha = linha[29];
            student.VinculoEmpr = linha[30];
            student.AreaTrab = linha[31];
            student.HorarioTrab = linha[32];
            student.PlanSaude = linha[33];
            student.EscolMae = linha[34];
            student.EscolPai = linha[35];
            student.OndeEstudou = linha[36];
            student.FreqComputador = linha[37];
            student.UtilizaPcCasa = linha[38];
            student.UtilizaPcTrabalho = linha[39];
            student.UtilizaPcEscola = linha[40];
            student.UtilizaPcOutros = linha[41];
            student.FinalidadePcTrabProf = linha[42];
            student.FinalidadePcTrabEsc = linha[43];
            student.FinalidadePcEntretenimento = linha[44];
            student.FinalidadePcEmail = linha[45];
            student.FinalidadePcMovBanco = linha[46];
            student.FinalidadePcCompras = linha[47];
            student.ConhecimentoInfo = linha[48];
            student.ConhecimentoWindows = linha[49];
            student.ConhecimentoLinux = linha[50];
            student.ConhecimentoWord = linha[51];
            student.ConhecimentoExcel = linha[52];
            student.ConhecimentoPP = linha[53];
            student.ConhecimentoGE = linha[54];
            student.Ingles = linha[55];
            student.Espanhol = linha[56];
            student.OutrosIdiomas = linha[57];
            student.BuscaTv = linha[58];
            student.BuscaInternet = linha[59];
            student.BuscaRevista = linha[60];
            student.BuscaRadio = linha[61];
            student.BuscaRedesSociais = linha[62];
            student.BuscaAmigos = linha[63];
            student.FreqJornais = linha[64];
            student.AssuntosJornal = linha[65];
            student.QtdeLivros = linha[66];
            student.GeneroLivros = linha[67];
            student.AtividadesVolunt = linha[68];
            student.Religiao = linha[69];
            student.Entretenimento = linha[70];
            student.ConheceuFatec = linha[71];
            student.PqEscolheuCurso = linha[72];
            student.ExpectativaCurso = linha[73];
            student.ExpectativaAposFormar = linha[74];
            student.JaEstudouFatec = linha[75];
            student.FezCursoTecnico = linha[76];
            student.MeioTransporte = linha[77];

            arrInfo.push(student);

            nuvemPalavras.push(linha[78]);

        } else {

            nuvemPalavras.push(linha[0])

        }

    }

    agruparDados(arrInfo, nuvemPalavras)
}

function agruparDados(arrInfo, nuvemPalavras) {

    periodoRadio = $("input[name='periodo']:checked").val();

    if (periodoRadio == 'Matutino' || periodoRadio == 'Noturno') {

        for (let i = 0; i < arrInfo.length; i++) {
            if (arrInfo[i].Periodo == periodoRadio) {
                arrFiltro.push(arrInfo[i])
            }
        }

        arrInfo = arrFiltro;
    }

    for (let i = 0; i < arrInfo.length; i++) {

        arrCursoLabel.push(arrInfo[i].Curso);
        arrPeriodoLabel.push(arrInfo[i].Periodo);
        arrEstadoLabel.push(arrInfo[i].Estado);
        arrCidadeLabel.push(arrInfo[i].Cidade);
        arrGeneroLabel.push(arrInfo[i].Genero);
        arrIdadeLabel.push(arrInfo[i].Nascimento);
        arrEstadoCivilLabel.push(arrInfo[i].EstadoCivil);
        arrNecEspecialLabel.push((arrInfo[i].Deficiencia));
        arrFilhosLabel.push(arrInfo[i].QtdeFilhos);
        arrQuemMoraLabel.push(arrInfo[i].MoraAtualmente);
        arrQtdeMoraLabel.push(arrInfo[i].QtdeMoradores);
        arrSitDomicilioLabel.push(arrInfo[i].SitImovel);
        arrTempoMoraLabel.push(arrInfo[i].TempoMoradia);
        arrFaixaRendaLabel.push(arrInfo[i].RendaMensal);
        arrQtdeTvLabel.push(arrInfo[i].QtdeTv);
        arrQtdeVhsLabel.push(arrInfo[i].QtdeDvd);
        arrQtdeRadioLabel.push(arrInfo[i].QtdeRadio);
        arrQtdeAutoLabel.push(arrInfo[i].QtdeAutomoveis);
        arrQtdeMotoLabel.push(arrInfo[i].QtdeMotos);
        arrQtdeCelComLabel.push(arrInfo[i].QtdeCelularComum);
        arrQtdeSmartPhLabel.push(arrInfo[i].QtdeSmartphone);
        arrQtdePcLabel.push(arrInfo[i].QtdeDesktop);
        arrQtdeNoteLabel.push(arrInfo[i].QtdeNotebook);
        arrPossuiTelefoneLabel.push(arrInfo[i].PossuiTelefone);
        arrPossuiInternetLabel.push(arrInfo[i].PossuiInternet);
        arrPossuiTvAssinLabel.push(arrInfo[i].PossuiTVAssin);
        arrPossuiEmpregadaLabel.push(arrInfo[i].PossuiEmpregada);
        arrTrabalhaLabel.push(arrInfo[i].Trabalha);
        arrVincEmpregLabel.push(arrInfo[i].VinculoEmpr);
        arrAreaTrabLabel.push(arrInfo[i].AreaTrab);
        arrHoraTrabLabel.push(arrInfo[i].HorarioTrab);
        arrPlanoSaudeLabel.push(arrInfo[i].PlanSaude);
        arrEscolMaeLabel.push(arrInfo[i].EscolMae);
        arrEscolPaiLabel.push(arrInfo[i].EscolPai);
        arrOndeEstudouLabel.push(arrInfo[i].OndeEstudou);
        arrFreqUsaPcLabel.push(arrInfo[i].FreqComputador);
        arrUsaPcCasa.push(arrInfo[i].UtilizaPcCasa);
        arrUsaPcTrab.push(arrInfo[i].UtilizaPcTrabalho);
        arrUsaPcEscola.push(arrInfo[i].UtilizaPcEscola);
        arrUsaPcOutros.push(arrInfo[i].UtilizaPcOutros);
        arrFinTrab.push(arrInfo[i].FinalidadePcTrabProf);
        arrFinEscol.push(arrInfo[i].FinalidadePcTrabEsc);
        arrFinEntret.push(arrInfo[i].FinalidadePcEntretenimento);
        arrFinEmail.push(arrInfo[i].FinalidadePcEmail);
        arrFinBanco.push(arrInfo[i].FinalidadePcMovBanco);
        arrFinCompra.push(arrInfo[i].FinalidadePcCompras);
        arrConhecInfoLabel.push(arrInfo[i].ConhecimentoInfo);
        arrConhecWindLabel.push(arrInfo[i].ConhecimentoWindows);
        arrConhecLinLabel.push(arrInfo[i].ConhecimentoLinux);
        arrEdTextLabel.push(arrInfo[i].ConhecimentoWord);
        arrPlanEletLabel.push(arrInfo[i].ConhecimentoExcel);
        arrApreSlideLabel.push(arrInfo[i].ConhecimentoPP);
        arrSistGerLabel.push(arrInfo[i].ConhecimentoGE);
        arrConhecInglesLabel.push(arrInfo[i].Ingles);
        arrConhecEspLabel.push(arrInfo[i].Espanhol);
        arrConhecOutrosLabel.push(arrInfo[i].OutrosIdiomas);
        arrBuscInfoTvLabel.push(arrInfo[i].BuscaTv);
        arrBuscInfoNetLabel.push(arrInfo[i].BuscaInternet);
        arrBuscInfoRevLabel.push(arrInfo[i].BuscaRevista);
        arrBuscInfoRadLabel.push(arrInfo[i].BuscaRadio);
        arrBuscInfoRedSocLabel.push(arrInfo[i].BuscaRedesSociais);
        arrBuscInfoAmigosLabel.push(arrInfo[i].BuscaAmigos);
        arrFreqJornalLabel.push(arrInfo[i].FreqJornais);
        assuntosJornal.push(arrInfo[i].AssuntosJornal);
        arrQtdeLivrosLabel.push(arrInfo[i].QtdeLivros);
        arrGenLivrosLabel.push(arrInfo[i].GeneroLivros);
        arrAtivVoluntLabel.push(arrInfo[i].AtividadesVolunt);
        arrReligiaoLabel.push(arrInfo[i].Religiao);
        entretenimento.push(arrInfo[i].Entretenimento);
        arrConFatecLabel.push(arrInfo[i].ConheceuFatec);
        arrEscCursoLabel.push(arrInfo[i].PqEscolheuCurso);
        arrExpCursoLabel.push(arrInfo[i].ExpectativaCurso);
        arrExpFormarLabel.push(arrInfo[i].ExpectativaAposFormar);
        arrJaEstFatecLabel.push(arrInfo[i].JaEstudouFatec);
        arrCursoTecLabel.push(arrInfo[i].FezCursoTecnico);
        arrMeioTranspLabel.push(arrInfo[i].MeioTransporte);
    }

    dadosGrafico(arrCursoLabel, 'curso')
    dadosGrafico(arrPeriodoLabel, 'periodo')
    dadosGrafico(arrEstadoLabel, 'estado')
    dadosGrafico(arrCidadeLabel, 'cidade')
    dadosGrafico(arrGeneroLabel, 'genero')
    dadosGrafico(arrIdadeLabel, 'idade')
    dadosGrafico(arrEstadoCivilLabel, 'estadoCivil')
    dadosGrafico(arrNecEspecialLabel, 'necEspecial')
    dadosGrafico(arrFilhosLabel, 'filhos')
    dadosGrafico(arrQuemMoraLabel, 'quemMora')
    dadosGrafico(arrQtdeMoraLabel, 'qtdeMora')
    dadosGrafico(arrSitDomicilioLabel, 'sitDomicilio')
    dadosGrafico(arrTempoMoraLabel, 'tempoMora')
    dadosGrafico(arrFaixaRendaLabel, 'faixaRenda')
    dadosGrafico(arrQtdeTvLabel, 'qtdeTv')
    dadosGrafico(arrQtdeVhsLabel, 'qtdeVhs')
    dadosGrafico(arrQtdeRadioLabel, 'qtdeRadio')
    dadosGrafico(arrQtdeAutoLabel, 'qtdeAuto')
    dadosGrafico(arrQtdeMotoLabel, 'qtdeMoto')
    dadosGrafico(arrQtdeCelComLabel, 'qtdeCelCom')
    dadosGrafico(arrQtdeSmartPhLabel, 'qtdeSmartPh')
    dadosGrafico(arrQtdePcLabel, 'qtdePc')
    dadosGrafico(arrQtdeNoteLabel, 'qtdeNote')
    dadosGrafico(arrPossuiTelefoneLabel, 'possuiTelefone')
    dadosGrafico(arrPossuiInternetLabel, 'possuiInternet')
    dadosGrafico(arrPossuiTvAssinLabel, 'possuiTvAssin')
    dadosGrafico(arrPossuiEmpregadaLabel, 'possuiEmpregada')
    dadosGrafico(arrTrabalhaLabel, 'trabalha')
    dadosGrafico(arrVincEmpregLabel, 'vincEmpreg')
    dadosGrafico(arrAreaTrabLabel, 'areaTrab')
    dadosGrafico(arrHoraTrabLabel, 'horaTrab')
    dadosGrafico(arrPlanoSaudeLabel, 'planoSaude')
    dadosGrafico(arrEscolMaeLabel, 'escolMae')
    dadosGrafico(arrEscolPaiLabel, 'escolPai')
    dadosGrafico(arrOndeEstudouLabel, 'ondeEstudou')
    dadosGrafico(arrFreqUsaPcLabel, 'freqUsaPc')
    dadosGrafico(arrUsaPcCasa, 'usaPcCasa')
    dadosGrafico(arrUsaPcTrab, 'usaPcTrab')
    dadosGrafico(arrUsaPcEscola, 'usaPcEscola')
    dadosGrafico(arrUsaPcOutros, 'usaPcOutros')
    dadosGrafico(arrFinTrab, 'finTrab')
    dadosGrafico(arrFinEscol, 'finEscol')
    dadosGrafico(arrFinEntret, 'finEntret')
    dadosGrafico(arrFinEmail, 'finEmail')
    dadosGrafico(arrFinBanco, 'finBanco')
    dadosGrafico(arrFinCompra, 'finCompra')
    dadosGrafico(arrConhecInfoLabel, 'conhecInfo')
    dadosGrafico(arrConhecWindLabel, 'conhecWind')
    dadosGrafico(arrConhecLinLabel, 'conhecLin')
    dadosGrafico(arrEdTextLabel, 'edText')
    dadosGrafico(arrPlanEletLabel, 'planElet')
    dadosGrafico(arrApreSlideLabel, 'apreSlide')
    dadosGrafico(arrSistGerLabel, 'sistGer')
    dadosGrafico(arrConhecInglesLabel, 'conhecIngles')
    dadosGrafico(arrConhecEspLabel, 'conhecEsp')
    dadosGrafico(arrConhecOutrosLabel, 'conhecOutros')
    dadosGrafico(arrBuscInfoTvLabel, 'buscInfoTv')
    dadosGrafico(arrBuscInfoNetLabel, 'buscInfoNet')
    dadosGrafico(arrBuscInfoRevLabel, 'buscInfoRev')
    dadosGrafico(arrBuscInfoRadLabel, 'buscInfoRad')
    dadosGrafico(arrBuscInfoRedSocLabel, 'buscInfoRedSoc')
    dadosGrafico(arrBuscInfoAmigosLabel, 'buscInfoAmigos')
    dadosGrafico(arrFreqJornalLabel, 'freqJornal')
    separarDados(assuntosJornal, 'assunJornal')
    dadosGrafico(arrQtdeLivrosLabel, 'qtdeLivros')
    dadosGrafico(arrGenLivrosLabel, 'genLivros')
    dadosGrafico(arrAtivVoluntLabel, 'ativVolunt')
    dadosGrafico(arrReligiaoLabel, 'religiao')
    separarDados(entretenimento, 'entCult')
    dadosGrafico(arrConFatecLabel, 'conFatec')
    dadosGrafico(arrEscCursoLabel, 'escCurso')
    dadosGrafico(arrExpCursoLabel, 'expCurso')
    dadosGrafico(arrExpFormarLabel, 'expFormar')
    dadosGrafico(arrJaEstFatecLabel, 'jaEstFatec')
    dadosGrafico(arrCursoTecLabel, 'cursoTec')
    dadosGrafico(arrMeioTranspLabel, 'meioTransp')
    tratarNuvemPalavras(nuvemPalavras)

    mudarEstado();

}

function dadosGrafico(arr, type) {

    let obj;

    if (type == 'idade') {
        definirFaixaEtaria(arr)
    }

    if (type == 'necEspecial') {
        for (let n = 0; n < arr.length; n++) {
            if (arr[n].indexOf("Nenhuma;") != -1) {
                arr[n] = arr[n].substring(8)
            }
        }

        obj = arr.reduce(function (object, item) {

            if (!object[item]) {
                object[item] = 1;
            } else {
                object[item]++;
            }
            return object;
        }, {})

        arrNecEspecialLabel = Object.keys(obj)
        arrNecEspecialData = Object.values(obj)
    }

    if (type == 'usaPcCasa' || type == 'usaPcTrab' || type == 'usaPcEscola' || type == 'usaPcOutros') {

        obj = arr.reduce(function (object, item) {

            if (!object[item]) {
                object[item] = 1;
            } else {
                object[item]++;
            }
            return object;
        }, {})

        switch (type) {
            case 'usaPcCasa':
                arrLocalUsaPcLabel.push('Casa')
                break;
            case 'usaPcTrab':
                arrLocalUsaPcLabel.push('Trabalho')
                break;
            case 'usaPcEscola':
                arrLocalUsaPcLabel.push('Escola')
                break;
            case 'usaPcOutros':
                arrLocalUsaPcLabel.push('Outros')
                break;
        }

        if (Object.keys(obj)[0] == 'Sim') {
            arrLocalUsaPcData.push(Object.values(obj)[0])
        } else {
            arrLocalUsaPcData.push(Object.values(obj)[1])
        }
    } else if (type == 'finTrab' || type == 'finEscol' || type == 'finEntret'
        || type == 'finEmail' || type == 'finBanco' || type == 'finCompra') {

        obj = arr.reduce(function (object, item) {

            if (!object[item]) {
                object[item] = 1;
            } else {
                object[item]++;
            }
            return object;
        }, {})

        switch (type) {
            case 'finTrab':
                arrFinUsaPcLabel.push('Trabalhos Profissionais')
                break;
            case 'finEscol':
                arrFinUsaPcLabel.push('Trabalhos Escolares')
                break;
            case 'finEntret':
                arrFinUsaPcLabel.push('Entretenimento')
                break;
            case 'finEmail':
                arrFinUsaPcLabel.push('E-mail')
                break;
            case 'finBanco':
                arrFinUsaPcLabel.push('Op. Bancárias')
                break;
            case 'finCompra':
                arrFinUsaPcLabel.push('Compras')
                break;
        }

        if (Object.keys(obj)[0] == 'Sim') {
            arrFinUsaPcData.push(Object.values(obj)[0])
        } else {
            arrFinUsaPcData.push(Object.values(obj)[1])
        }
    } else {

        obj = arr.reduce(function (object, item) {

            if (!object[item]) {
                object[item] = 1;
            } else {
                object[item]++;
            }
            return object;
        }, {})

        switch (type) {

            case 'curso':
                arrCursoLabel = Object.keys(obj)
                arrCursoData = Object.values(obj)
                break;

            case 'periodo':
                arrPeriodoLabel = Object.keys(obj)
                arrPeriodoData = Object.values(obj)
                break;

            case 'estado':
                arrEstadoLabel = Object.keys(obj)
                arrEstadoData = Object.values(obj)
                break;

            case 'cidade':
                arrCidadeLabel = Object.keys(obj)
                arrCidadeData = Object.values(obj)
                break;

            case 'genero':
                arrGeneroLabel = Object.keys(obj)
                arrGeneroData = Object.values(obj)
                break;

            case 'estadoCivil':
                arrEstadoCivilLabel = Object.keys(obj)
                arrEstadoCivilData = Object.values(obj)
                break;

            case 'filhos':
                arrFilhosLabel = Object.keys(obj)
                arrFilhosData = Object.values(obj)
                break;

            case 'quemMora':
                arrQuemMoraLabel = Object.keys(obj)
                arrQuemMoraData = Object.values(obj)
                break;

            case 'qtdeMora':
                arrQtdeMoraLabel = Object.keys(obj)
                arrQtdeMoraData = Object.values(obj)
                break;

            case 'sitDomicilio':
                arrSitDomicilioLabel = Object.keys(obj)
                arrSitDomicilioData = Object.values(obj)
                break;

            case 'tempoMora':
                arrTempoMoraLabel = Object.keys(obj)
                arrTempoMoraData = Object.values(obj)
                break;

            case 'faixaRenda':
                arrFaixaRendaLabel = Object.keys(obj)
                arrFaixaRendaData = Object.values(obj)
                break;

            case 'qtdeTv':
                arrQtdeTvLabel = Object.keys(obj)
                arrQtdeTvData = Object.values(obj)
                break;

            case 'qtdeVhs':
                arrQtdeVhsLabel = Object.keys(obj)
                arrQtdeVhsData = Object.values(obj)
                break;

            case 'qtdeRadio':
                arrQtdeRadioLabel = Object.keys(obj)
                arrQtdeRadioData = Object.values(obj)
                break;

            case 'qtdeAuto':
                arrQtdeAutoLabel = Object.keys(obj)
                arrQtdeAutoData = Object.values(obj)
                break;

            case 'qtdeMoto':
                arrQtdeMotoLabel = Object.keys(obj)
                arrQtdeMotoData = Object.values(obj)
                break;

            case 'qtdeCelCom':
                arrQtdeCelComLabel = Object.keys(obj)
                arrQtdeCelComData = Object.values(obj)
                break;

            case 'qtdeSmartPh':
                arrQtdeSmartPhLabel = Object.keys(obj)
                arrQtdeSmartPhData = Object.values(obj)
                break;

            case 'qtdePc':
                arrQtdePcLabel = Object.keys(obj)
                arrQtdePcData = Object.values(obj)
                break;

            case 'qtdeNote':
                arrQtdeNoteLabel = Object.keys(obj)
                arrQtdeNoteData = Object.values(obj)
                break;

            case 'possuiTelefone':
                arrPossuiTelefoneLabel = Object.keys(obj)
                arrPossuiTelefoneData = Object.values(obj)
                break;

            case 'possuiInternet':
                arrPossuiInternetLabel = Object.keys(obj)
                arrPossuiInternetData = Object.values(obj)
                break;

            case 'possuiTvAssin':
                arrPossuiTvAssinLabel = Object.keys(obj)
                arrPossuiTvAssinData = Object.values(obj)
                break;

            case 'possuiEmpregada':
                arrPossuiEmpregadaLabel = Object.keys(obj)
                arrPossuiEmpregadaData = Object.values(obj)
                break;

            case 'trabalha':
                arrTrabalhaLabel = Object.keys(obj)
                arrTrabalhaData = Object.values(obj)
                break;

            case 'vincEmpreg':
                arrVincEmpregLabel = Object.keys(obj)
                arrVincEmpregData = Object.values(obj)
                break;

            case 'areaTrab':
                arrAreaTrabLabel = Object.keys(obj)
                arrAreaTrabData = Object.values(obj)
                break;

            case 'horaTrab':
                arrHoraTrabLabel = Object.keys(obj)
                arrHoraTrabData = Object.values(obj)
                break;

            case 'planoSaude':
                arrPlanoSaudeLabel = Object.keys(obj)
                arrPlanoSaudeData = Object.values(obj)
                break;

            case 'escolMae':
                arrEscolMaeLabel = Object.keys(obj)
                arrEscolMaeData = Object.values(obj)
                break;

            case 'escolPai':
                arrEscolPaiLabel = Object.keys(obj)
                arrEscolPaiData = Object.values(obj)
                break;

            case 'ondeEstudou':
                arrOndeEstudouLabel = Object.keys(obj)
                arrOndeEstudouData = Object.values(obj)
                break;

            case 'freqUsaPc':
                arrFreqUsaPcLabel = Object.keys(obj)
                arrFreqUsaPcData = Object.values(obj)
                break;

            case 'conhecInfo':
                arrConhecInfoLabel = Object.keys(obj)
                arrConhecInfoData = Object.values(obj)
                break;

            case 'conhecWind':
                arrConhecWindLabel = Object.keys(obj)
                arrConhecWindData = Object.values(obj)
                break;

            case 'conhecLin':
                arrConhecLinLabel = Object.keys(obj)
                arrConhecLinData = Object.values(obj)
                break;

            case 'edText':
                arrEdTextLabel = Object.keys(obj)
                arrEdTextData = Object.values(obj)
                break;

            case 'planElet':
                arrPlanEletLabel = Object.keys(obj)
                arrPlanEletData = Object.values(obj)
                break;

            case 'apreSlide':
                arrApreSlideLabel = Object.keys(obj)
                arrApreSlideData = Object.values(obj)
                break;

            case 'sistGer':
                arrSistGerLabel = Object.keys(obj)
                arrSistGerData = Object.values(obj)
                break;

            case 'conhecIngles':
                arrConhecInglesLabel = Object.keys(obj)
                arrConhecInglesData = Object.values(obj)
                break;

            case 'conhecEsp':
                arrConhecEspLabel = Object.keys(obj)
                arrConhecEspData = Object.values(obj)
                break;

            case 'conhecOutros':
                arrConhecOutrosLabel = Object.keys(obj)
                arrConhecOutrosData = Object.values(obj)
                break;

            case 'buscInfoTv':
                arrBuscInfoTvLabel = Object.keys(obj)
                arrBuscInfoTvData = Object.values(obj)
                break;

            case 'buscInfoNet':
                arrBuscInfoNetLabel = Object.keys(obj)
                arrBuscInfoNetData = Object.values(obj)
                break;

            case 'buscInfoRev':
                arrBuscInfoRevLabel = Object.keys(obj)
                arrBuscInfoRevData = Object.values(obj)
                break;

            case 'buscInfoRad':
                arrBuscInfoRadLabel = Object.keys(obj)
                arrBuscInfoRadData = Object.values(obj)
                break;

            case 'buscInfoRedSoc':
                arrBuscInfoRedSocLabel = Object.keys(obj)
                arrBuscInfoRedSocData = Object.values(obj)
                break;

            case 'buscInfoAmigos':
                arrBuscInfoAmigosLabel = Object.keys(obj)
                arrBuscInfoAmigosData = Object.values(obj)
                break;

            case 'freqJornal':
                arrFreqJornalLabel = Object.keys(obj)
                arrFreqJornalData = Object.values(obj)

            case 'assunJornal':
                arrAssunJornalLabel = Object.keys(obj)
                arrAssunJornalData = Object.values(obj)
                break;

            case 'qtdeLivros':
                arrQtdeLivrosLabel = Object.keys(obj)
                arrQtdeLivrosData = Object.values(obj)
                break;

            case 'genLivros':
                arrGenLivrosLabel = Object.keys(obj)
                arrGenLivrosData = Object.values(obj)
                break;

            case 'ativVolunt':
                arrAtivVoluntLabel = Object.keys(obj)
                arrAtivVoluntData = Object.values(obj)
                break;

            case 'religiao':
                arrReligiaoLabel = Object.keys(obj)
                arrReligiaoData = Object.values(obj)
                break;

            case 'entCult':
                arrEntCultLabel = Object.keys(obj)
                arrEntCultData = Object.values(obj)
                break;

            case 'conFatec':
                arrConFatecLabel = Object.keys(obj)
                arrConFatecData = Object.values(obj)
                break;

            case 'escCurso':
                arrEscCursoLabel = Object.keys(obj)
                arrEscCursoData = Object.values(obj)
                break;

            case 'expCurso':
                arrExpCursoLabel = Object.keys(obj)
                arrExpCursoData = Object.values(obj)
                break;

            case 'expFormar':
                arrExpFormarLabel = Object.keys(obj)
                arrExpFormarData = Object.values(obj)
                break;

            case 'jaEstFatec':
                arrJaEstFatecLabel = Object.keys(obj)
                arrJaEstFatecData = Object.values(obj)
                break;

            case 'cursoTec':
                arrCursoTecLabel = Object.keys(obj)
                arrCursoTecData = Object.values(obj)
                break;

            case 'meioTransp':
                arrMeioTranspLabel = Object.keys(obj)
                arrMeioTranspData = Object.values(obj)
                break;

        }

    }

}

function definirFaixaEtaria(arr) {
    let birthDate;
    let age;
    let arrValido = [];
    let dadoInvalido = 0;

    for (let i = 0; i < arr.length; i++) {
        birthDate = new Date(arr[i])
        birthDate.setDate(birthDate.getDate() + 1)
        age = idade(birthDate.getFullYear(), birthDate.getMonth() + 1, birthDate.getDate())
        arr[i] = age
    }


    for (let av = 0; av < arr.length; av++) {
        if (arr[av] > 10) {
            arrValido.push(arr[av])
        }
    }

    let faixaEtaria = calcIntervals(arrValido)

    for (let fe = 0; fe < faixaEtaria.length; fe++) {
        arrFaixaEtariaLabel[fe] = (Object.values(faixaEtaria[fe])[0] + ' - ' + Object.values(faixaEtaria[fe])[1]).toString();
        arrFaixaEtariaData.push(0);
    }

    for (let d = 0; d < arr.length; d++) {
        for (let v = 0; v < faixaEtaria.length; v++) {
            if (arr[d] >= Object.values(faixaEtaria[v])[0] && arr[d] < Object.values(faixaEtaria[v])[1]) {
                arrFaixaEtariaData[v] += 1;
            }
        }

        if (arr[d] < Object.values(faixaEtaria[0])[0]) {
            dadoInvalido += 1;
        }
    }

    arrFaixaEtariaLabel.unshift('Dado Inválido')
    arrFaixaEtariaData.unshift(dadoInvalido);
}

function idade(anoAniversario, mesAniversario, diaAniversario) {
    var d = new Date,
        anoAtual = d.getFullYear(),
        mesAtual = d.getMonth() + 1,
        diaAtual = d.getDate(),

        anoAniversario = +anoAniversario,
        mesAniversario = +mesAniversario,
        diaAniversario = +diaAniversario,

        quantosAnos = anoAtual - anoAniversario;

    if (mesAtual < mesAniversario || mesAtual == mesAniversario && diaAtual < diaAniversario) {
        quantosAnos--;
    }

    return quantosAnos < 0 ? 0 : quantosAnos;
}

function calcIntervals(vals) {
    let intervals = vals.slice(0).sort((a, b) => {
        return parseInt(a || 0, 10) - parseInt(b || 0, 10);
    });
    let maxNum = intervals[intervals.length - 1];
    let minNum = intervals[0];
    let groupCount = Math.round(1 + 3.22 * Math.log10(intervals.length));
    let groupLength = (maxNum - minNum) / groupCount;
    groupLength = groupLength + 1;
    let result = [], n = minNum;

    for (let i = 0; i < groupCount; i++) {
        result[i] = { min: Math.round(n), max: Math.round(Math.min(n + groupLength)) }
        n += groupLength;
    }

    return result;
}

function separarDados(arr, type) {
    let dadosSeparados = []
    let aux = [];
    for (let a = 0; a < arr.length; a++) {
        if (arr[a].indexOf(";") != -1) {
            aux = arr[a].split(';')
            for (let x = 0; x < aux.length; x++) {
                dadosSeparados.push(aux[x])
            }
        } else {
            dadosSeparados.push(arr[a])
        }
    }
    dadosGrafico(dadosSeparados, type)
}

function tratarNuvemPalavras(nuvemPalavras) {
    for (let n = 0; n < nuvemPalavras.length; n++) {
        nuvemPalavras[n] = nuvemPalavras[n].replace('.', ' ')
        nuvemPalavras[n] = nuvemPalavras[n].replace('-', ' ')
        nuvemPalavras[n] = nuvemPalavras[n].replace(',', ' ')
        nuvemPalavras[n] = nuvemPalavras[n].replace(';', ' ')
        nuvemPalavras[n] = nuvemPalavras[n].replace('/', ' ')
    }
    separarNuvem(nuvemPalavras)
}

function separarNuvem(arr) {
    let dadosSeparados = []
    let aux = [];
    for (let a = 0; a < arr.length; a++) {
        if (arr[a].indexOf(" ") != -1) {
            aux = arr[a].split(' ')
            for (let x = 0; x < aux.length; x++) {
                dadosSeparados.push(aux[x])
            }
        } else {
            dadosSeparados.push(arr[a])
        }
    }
    agruparPalavras(dadosSeparados)
}

function agruparPalavras(arr) {

    let obj = arr.reduce(function (object, item) {

        if (!object[item]) {
            object[item] = 1;
        } else {
            object[item]++;
        }
        return object;
    }, {})

    let arrObj = [];

    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (Object.values(obj)[i] > 5 && Object.keys(obj)[i].length > 5) {
            let objAux = {};
            objAux.name = Object.keys(obj)[i]
            objAux.value = Object.values(obj)[i]
            arrObj.push(objAux);
        }
    }

    arrObj.sort(function (a, b) {

        return (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0);

    });

    montarNuvem(arrObj)

}

function montarNuvem(arrObj) {
    for (let a = 0; a < arrObj.length; a++) {
        let p = document.createElement('p')
        p.style.textAlign = 'center';
        p.style.width = '100%';
        p.style.fontSize = 'larger';
        p.innerText = arrObj[a].name;
        divNuvem.appendChild(p)
    }
}

var fileInput = document.getElementById("csv"),

    readFile = function () {
        if (fileInput.files[0].type == 'text/csv') {
            var reader = new FileReader();
            reader.onload = function () {

                let csvString = reader.result;
                csvArray = csvString.split('\n'); //separei o arquivo por linhas
                tratarDados(csvArray);

            };
            // start reading the file. When it is done, calls the onload event defined above.
            reader.readAsText(fileInput.files[0]);
        } else {
            alert('Não é um arquivo csv!');
            document.getElementById("csv").value = "";
        }
    };

fileInput.addEventListener('change', readFile);
