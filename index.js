function Student(_data, _ra, _curso, _periodo, _estado, _cidade, _genero, _nascimento,
    _estadoCivil, _deficiencia, _qtdeFilhos, _moraAtualmente, _qtdeMoradores, _sitImovel,
    _tempoMoradia, _rendaMensal, _qtdeTv, _qtdeDvd, _qtdeRadio, _qtdeAutomoveis, _qtdeMotos,
    _qtdeCelularComum, _qtdeSmartphone, _qtdeDesktop, _qtdeNotebook, _possuiTelefone, _possuiInternet,
    _possuiTVAssin, _possuiEmpregada, _trabalha, _vinculoEmpr, _areaTrab, _horarioTrab, _planSaude,
    _escolMae, _escolPai, _ondeEstudou, _freqComputador, _utilizaPcCasa, _utilizaPcTrabalho, _utilizaPcEscola,
    _utilizaPcOutros, _finalidadePcTrabProf, _finalidadePcTrabEsc, _finalidadePcEntretenimento, _finalidadePcEmail,
    _finalidadePcMovBanco, _finalidadePcCompras, _conhecimentoInfo, _conhecimentoWindows, _conhecimentoLinux,
    _conhecimentoWord, _conhecimentoExcel, _conhecimentoPP, _conhecimentoGE, _ingles, _espanhol, _outrosIdiomas,
    _buscaTv, _buscaInternet, _buscaRevista, _buscaRadio, _buscaRedesSociais, _buscaAmigos, _freqJornais,
    _assuntosJornal, _qtdeLivros, _generoLivros, _atividadesVolunt, _religiao, _entretenimento, _conheceuFatec,
    _pqEscolheuCurso, _expectativaCurso, _expectativaAposFormar, _jaEstudouFatec, _fezCursoTecnico, _meioTransporte) {

    this.Data = _data;
    this.Ra = _ra;
    this.Curso = _curso;
    this.Periodo = _periodo;
    this.Estado = _estado;
    this.Cidade = _cidade;
    this.Genero = _genero;
    this.Nascimento = _nascimento;
    this.EstadoCivil = _estadoCivil;
    this.Deficiencia = _deficiencia;
    this.QtdeFilhos = _qtdeFilhos;
    this.MoraAtualmente = _moraAtualmente;
    this.QtdeMoradores = _qtdeMoradores;
    this.SitImovel = _sitImovel;
    this.TempoMoradia = _tempoMoradia;
    this.RendaMensal = _rendaMensal;
    this.QtdeTv = _qtdeTv;
    this.QtdeDvd = _qtdeDvd;
    this.QtdeRadio = _qtdeRadio;
    this.QtdeAutomoveis = _qtdeAutomoveis;
    this.QtdeMotos = _qtdeMotos;
    this.QtdeCelularComum = _qtdeCelularComum;
    this.QtdeSmartphone = _qtdeSmartphone;
    this.QtdeDesktop = _qtdeDesktop;
    this.QtdeNotebook = _qtdeNotebook;
    this.PossuiTelefone = _possuiTelefone;
    this.PossuiInternet = _possuiInternet;
    this.PossuiTVAssin = _possuiTVAssin;
    this.PossuiEmpregada = _possuiEmpregada;
    this.Trabalha = _trabalha;
    this.VinculoEmpr = _vinculoEmpr;
    this.AreaTrab = _areaTrab;
    this.HorarioTrab = _horarioTrab;
    this.PlanSaude = _planSaude;
    this.EscolMae = _escolMae;
    this.EscolPai = _escolPai;
    this.OndeEstudou = _ondeEstudou;
    this.FreqComputador = _freqComputador;
    this.UtilizaPcCasa = _utilizaPcCasa;
    this.UtilizaPcTrabalho = _utilizaPcTrabalho;
    this.UtilizaPcEscola = _utilizaPcEscola;
    this.UtilizaPcOutros = _utilizaPcOutros;
    this.FinalidadePcTrabProf = _finalidadePcTrabProf;
    this.FinalidadePcTrabEsc = _finalidadePcTrabEsc;
    this.FinalidadePcEntretenimento = _finalidadePcEntretenimento;
    this.FinalidadePcEmail = _finalidadePcEmail;
    this.FinalidadePcMovBanco = _finalidadePcMovBanco;
    this.FinalidadePcCompras = _finalidadePcCompras;
    this.ConhecimentoInfo = _conhecimentoInfo;
    this.ConhecimentoWindows = _conhecimentoWindows;
    this.ConhecimentoLinux = _conhecimentoLinux;
    this.ConhecimentoWord = _conhecimentoWord;
    this.ConhecimentoExcel = _conhecimentoExcel;
    this.ConhecimentoPP = _conhecimentoPP;
    this.ConhecimentoGE = _conhecimentoGE;
    this.Ingles = _ingles;
    this.Espanhol = _espanhol;
    this.OutrosIdiomas = _outrosIdiomas;
    this.BuscaTv = _buscaTv;
    this.BuscaInternet = _buscaInternet;
    this.BuscaRevista = _buscaRevista;
    this.BuscaRadio = _buscaRadio;
    this.BuscaRedesSociais = _buscaRedesSociais;
    this.BuscaAmigos = _buscaAmigos;
    this.FreqJornais = _freqJornais;
    this.AssuntosJornal = _assuntosJornal;
    this.QtdeLivros = _qtdeLivros;
    this.GeneroLivros = _generoLivros;
    this.AtividadesVolunt = _atividadesVolunt;
    this.Religiao = _religiao;
    this.Entretenimento = _entretenimento;
    this.ConheceuFatec = _conheceuFatec;
    this.PqEscolheuCurso = _pqEscolheuCurso;
    this.ExpectativaCurso = _expectativaCurso;
    this.ExpectativaAposFormar = _expectativaAposFormar;
    this.JaEstudouFatec = _jaEstudouFatec;
    this.FezCursoTecnico = _fezCursoTecnico;
    this.MeioTransporte = _meioTransporte;

}

let nuvemPalavras = [];
let arrInfo = [];


function mudarEstado() {
    var display = document.getElementById('minhaDiv').style.display;

    if (display == "none") {
        document.getElementById('minhaDiv').style.display = 'block';
    } else {
        document.getElementById('minhaDiv').style.display = 'none';
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
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

    console.log(arrInfo)
    console.log(nuvemPalavras)

}

var fileInput = document.getElementById("csv"),

    readFile = function () {
        if (fileInput.files[0].type == 'text/csv') {
            var reader = new FileReader();
            reader.onload = function () {

                let csvString = reader.result;
                var csvArray = csvString.split('\n'); //separei o arquivo por linhas
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


//para cada questão do relatório, precisa criar um gráfico. Gráfico de idade é por faixa etária, 