import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from '../components/Filter';
import ProductsGrid from '../components/productsGrid';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

const Products = ({ cart, addToCart }) => { // Recebe cart e addToCart como props
  const [products] = useState([
		{
			id: 1, name: 'AFO – Órtese Curta Articulada', category: 'Órteses para Membros Inferiores', subcategory: 'AFO', image: '/img/products/afo-curta-articulada-com-cinta-2.jpg', description: 'Indicada para estabilização da medial e lateral do tornozelo, permitindo o bloqueio da flexão plantar. Pode ser confeccionada sem bloqueio, com bloqueio da flexão plantar e dorsal livre.'
		},
		{
			id: 2, name: 'AFO – Órtese Curta de Reação ao Solo', category: 'Órteses para Membros Inferiores', subcategory: 'AFO', image: '/img/products/afo-curta-reacao-2.jpg', description: 'Para pacientes com flexão exagerada dos joelhos, com pacientes com paralisia cerebral (chamada marcha agachada ou “CROUCH”). Permite a flexão plantar e bloqueia a flexão dorsal em 90 graus, impedindo o avanço anterior da tíbia na fase de apoio inicial do pé, forçando a extensão do joelho.'
		},
		{
			id: 3, name: 'AFO – Órtese Curta Rígida', category: 'Órteses para Membros Inferiores', subcategory: 'AFO', image: '/img/products/AFO-curta-rigida-2.jpg', description: 'Utilizada na prevenção de deformidades e imobilização pós-operatória. Permite um bom posicionamento da articulação do tornozelo com total estabilidade lateral.'
		},
		{
			id: 4, name: 'AFO – Tutor Curto', category: 'Órteses para Membros Inferiores', subcategory: 'AFO', image: '/img/products/tutor-curto-2.jpg', description: 'Fraqueza distal de membros inferiores que causem prejuízo da marcha ou que levem a deformidade como pé equino, pé calcâneo, instabilidade dos tornozelos e pés. Lesões ligamentares de tornozelos. A articulação de tornozelo pode ser livre ou com diferentes graus de bloqueio.'
		},
		{
			id: 5, name: 'Cinta Elástica Abdominal', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/Produto-sem-foto.jpg', description: 'A Cinta Elástica Abdominal é indicada para flacidez abdominal, pós-parto, pós-cirurgia, correção postural, lombalgia, etc.'
		},
		{
			id: 6, name: 'Cinta Tennis Elbow', category: 'Órtese para Membro Superior', subcategory: 'Cinta', image: '/img/products/cinta-tennis-2.jpg', description: 'A Cinta Tennis Elbow é indicada para epicondilites e outras afecções do cotovelo e prevenção da recidiva na prática esportiva.'
		},
		{
			id: 7, name: 'Colete de Bahler (Órtese de Hiperextensão)', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-bahler-2.jpg', description: 'O Colete de Bahler mantém uma hiperextensão adequada em casos de compressão por fraturas em coluna, osteoporoses, artrites vertebrais, epifisites, osteocondrites, fraturas da coluna torácica e postura cifótica.'
		},
		{
			id: 8, name: 'Colete de Boston Bivalvado', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-boston-2.jpg', description: 'O Colete de Boston Bivalvado é indicado para a estabilização de escolioses, fraturas da coluna torácica ou lombar. Em pacientes que padeçam de dores devidas aos desvios posturais da coluna e que não tenham mais flexibilidade corretivas nas curvaturas vertebrais.'
		},
		{
			id: 9, name: 'Colete de Boston Feminino', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-boston-feminino-2.jpg', description: 'O Colete de Boston Feminino é indicado para escolioses, fraturas tóraco lombares, pós operatório de cirurgias vertebrais, controle de instabilidade do tronco em pacientes paraplégicos e com doenças neuro musculares, grave instabilidade de tronco. O Colete de Boston Feminino é desenvolvido especialmente para mulheres.'
		},
		{
			id: 10, name: 'Colete de Harris', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-harris-2', description: 'O Colete Harris é indicado para o tratamento da coluna lombar, como hérnias de disco e todos os processos dolorosos que requerem imobilização antero-posterior e médio-lateral da região lombar.'
		},
		{
			id: 11, name: 'Colete de Jewett', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-jewette-2.jpg', description: 'O Colete de Jewett mantém uma hiperextensão adequada em casos de compressão por fraturas na coluna, osteoporoses, artrites vertebrais, epifisites, osteocondrites, fraturas da coluna torácica e postura cifótica.'
		},
		{
			id: 12, name: 'Colete de Milwalkee', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-miwalkee-2.jpg', description: 'Descrição: O Colete de Milwalkee é indicado para casos de escolioses, hipercifose, lordoses, má postura do ombro, moléstia de Scheuermann. O Colete de Milwalkee possui almofadas torácica, dorsal e axilar, e acessórios como barra subclavicular, espaldeira conjugada, correio posterior e anel de ombro.'
		},
		{
			id: 13, name: 'Colete de Milwalkee sem anel cervical', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-miwlakee-sem-2.jpg', description: 'O Colete de Milwalkee sem anel cervical é prescrito para tratamento de escolioses, torácicas baixas e lombares, flexíveis com ápice de T-10 para baixo.'
		},
		{
			id: 14, name: 'Colete de Putti', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-putti-2.jpg', description: 'O Colete de Putti promove a estabilização da região dorso-lombo-sacra, em casos de hérnias discais operáveis ou não. Traumatismos espondilolistese, fraturas osteoporóticas, pós operatórios e outras afecções da região, estabilização do tronco no lesado muscular.'
		},
		{
			id: 15, name: 'Colete de Putti Alto', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-puttialto-2.jpg', description: 'O Colete de Putti Alto promove a estabilização da coluna dorso-lombo-sacra, em casos de hérnias discais operáveis ou não. Traumatismos espondilolistese, fraturas osteoporóticas, pós operatórios e outras afecções da região.'
		},
		{
			id: 16, name: 'Colete de Putti Baixo', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-putti-baixo-2.jpg', description: 'O Colete de Putti Baixo promove a estabilização da coluna lombo-sacra, em casos de construtoras paravertebral, pós traumáticas, artroses, espondilolisteses, lordoses, pós-operatórios e outras afecções da região.'
		},
		{
			id: 17, name: 'Colete de Willians', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-willians-2.jpg', description: 'O Colete de Willians diminui a lordose lombar, controle da extensão lombo sacra, suporte abdominal hiperlordose não estruturada, esponiloartrose, osteocondroses, degeneração ao nível dos discos intervertebrais.'
		},
		{
			id: 18, name: 'Colete Knight', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-kning-2.jpg', description: 'O Colete Knight promove a correção de postura dos ombros e tratamento de cifose torácica postural e juvenil.'
		},
		{
			id: 19, name: 'Colete Knight Taylor', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-knight-taylor-2.jpg', description: 'O Colete Knight Taylor é indicado para processos dolorosos como osteoporoses, fraturas de corpos vertebrais, hérnias de discos, esponiloartrose, retropulsão dos ombros.'
		},
		{
			id: 20, name: 'Colete T.L.S.O.', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/foto208g-2.jpg', description: 'O Colete T.L.S.O (Órtese tóraco lombo sacra) é prescrito para o tratamento de escolioses, cifoses, lordoses, fraturas da coluna torácica ou lombar.'
		},
		{
			id: 21, name: 'Compressor Torácico', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/cmpressor-toracico-2.jpg', description: 'O Compressor Torácico é indicado para deformidades na caixa torácica: peito de pombo, pectus excavatum e pectus carinatum'
		},
		{
			id: 22, name: 'Cotoveleira em Neoprene', category: 'Órtese para Membro Superior', subcategory: 'Cotoveleira', image: '/img/products/cotoveleira-2.jpg', description: 'A Cotoveleira em Neoprene é indicada para contusões, bursites, artrites, artroses e outras afecções do cotovelo, prevenção de recidiva na prática esportiva, imobiliza parcialmente a articulação.'
		},
		{
			id: 23, name: 'Espaldeira para postura', category: 'Órtese para Membro Superior', subcategory: 'Espaldeira', image: '/img/products/espalmadeira-2.jpg', description: 'Afecções traumáticas do joelho, instabilidade crônica do joelho, artroses, artrite reumatoide.'
		},
		{
			id: 24, name: 'Faixa Torácica', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/Produto-sem-foto.jpg', description: 'A Faixa Torácica é indicada para contusões, fraturas de costelas e de vértebras torácicas osteoporóticas.'
		},
		{
			id: 25, name: 'Imobilizador em Oito para Clavícula', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/imobilizador-8-2.jpg', description: 'O Imobilizador em Oito para Clavícula é indicado para a imobilização e alinhamento das fraturas da clavícula.'
		},
		{
			id: 26, name: 'Joelheira Artc/Cintas Cruzadas', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/imobiliz-tornozelo-2.jpg', description: 'Afecções traumáticas do joelho, instabilidade rotatórias crônicas do joelho, artroses e artrites reumatoide, prevenção de recidiva na prática esportiva – compressiva e estabilizadora da patela.'
		},
		{
			id: 27, name: 'Joelheira em Neoprene Articulada', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/joelheira-articulada-2.jpg', description: 'Afecções traumáticas do joelho, instabilidade crônica do joelho, artroses, artrite reumatoide.'
		},
		{
			id: 28, name: 'Joelheira em Neoprene com Orifício', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/joelheira-orificio-2.jpg', description: 'Instabilidade a afecções traumáticas leves do joelho, prevenção de recidiva na prática esportiva. Tratamento das artropatias do hemofílico.'
		},
		{
			id: 29, name: 'KAFO – Eletrônico E-Mag Control', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-404-2.jpg', description: 'O KAFO – Eletrônico E-Mag Control é indicado para pacientes com sequelas pós traumáticas, poliomielite e síndrome pós-pólio. Deficiência ou fraqueza da musculatura extensora do joelho, bloqueio da articulação controlada através de um controle remoto, facilmente adaptado em muleta canadense.'
		},
		{
			id: 30, name: 'KAFO – Eletrônico Free Walk Unilateral', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-405-2.jpg', description: 'O KAFO – Eletrônico Free Walk Unilateral é indicado para cruropodálica com controle da fase de apoio, permite aos pacientes que caminhem normalmente durante a fase de balanço, com excelente estabilidade e segurança no início da fase de apoio.'
		},
		{
			id: 31, name: 'KAFO – Tutor Longo Bilateral com Cinto Pélvico', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-401-2.jpg', description: 'KAFO – Tutor Longo Bilateral com Cinto Pélvico'
		},
		{
			id: 32, name: 'KAFO – Tutor Longo Unilateral', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-402-2.jpg', description: 'O Tutor Longo Unilateral é indicado para deambulação e ortostatismo em pacientes com paralisia no membro inferior D ou E e pacientes que não controlam o joelho. A articulação do joelho pode ser livre ou bloqueada com travas em anel ou suíça.'
		},
		{
			id: 33, name: 'KAFO – Unilateral com Trava Suíça', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-4003-2.jpg', description: 'O KAFO – Unilateral com Trava Suíca é indicado para a deambulação e ortostatismo em pacientes com paralisia no membro inferior D ou E, pacientes que não controlam o joelho. A articulação do joelho pode ser livre ou bloqueada com travas em anel ou suíca.'
		},
		{
			id: 34, name: 'Mola de Codivilla', category: 'Órtese para Membros Inferiores', subcategory: 'Mola / Walk On', image: '/img/products/mola-codivilla-2.jpg', description: 'Paralisia do músculo tibial anterior. Não se presta conter grandes forças deformantes e muito menos a correção do varismo ou valgismo através de tiras em “T” ou em “Y”.'
		},
		{
			id: 35, name: 'Órtese Curta Articulada com Contorno', category: 'Órteses para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/afo-curta-articulada-com-cinta-425-2.jpg', description: 'Indicado para estabilização da medial e lateral, do tornozelo, permitindo o bloqueio da flexão plantar. Pode ser confeccionada sem bloqueio, com bloqueio da flexão plantar e dorsal livre. Alta qualidade no desempenho da articulação, podendo modificar facilmente o grau de amplitude.'
		},
		{
			id: 36, name: 'Órtese de Reciprocação (RGO – ARGO)', category: 'Órteses para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/ortese-reciprocacao-2.jpg', description: 'A Órtese de Reciprocação é indicada para crianças com paralisia flácida grave nos membros inferiores, mielomeningocele, poliomielite, lesão medular, etc. Dotada de mecanismo de Reciprocação, ou seja, à medida que o paciente flete um quadril, o outro automaticamente entra em extensão através do mecanismo.'
		},
		{
			id: 37, name: 'Órtese Dinâmica para Punho', category: 'Órtese para Membro Superior', subcategory: 'Cinta', image: '/img/products/ortese-d-punho-2.jpg', description: 'A Órtese Dinâmica para Punho é para tração dos dedos e punhos em flexões ou extensão. Permite movimentos ativos da musculatura funcionalmente, e através dos elásticos permite movimentos passivos da musculatura paralisada. Pode ser utilizada no pós operatório de cirurgias de mão, visando a mobilização gradual da articulação.'
		},
		{
			id: 38, name: 'Órtese Estabilizadora de Cotovelo', category: 'Ótese para Membro Superior', subcategory: 'Cotoveleira', image: 'ortese-esatlizadora-de-cotovelo-2.jpg', description: 'A Órtese Estabilizadora de Cotovelo é uma alternativa mais confortável e efetiva que o gesso, para melhorar significativamente a reabilitação e a consolidação. É versátil, fácil de aplicar, higiênica e com controle de amplitude do movimento.'
		},
		{
			id: 39, name: 'Órtese Estabilizadora de Joelho', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese estabilizadora', image: '/img/products/ortese-estbilizadora-joelho-2.jpg', description: 'A Órtese Estabilizadora de Joelho é indicada para afecções traumáticas do joelho em substituição ao aparelho gessado, pós operatório quando necessária a mobilização em flexão, também auxilia nas artropatias dos hemofílicos.'
		},
		{
			id: 40, name: 'Órtese Estabilizadora de Quadril', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese estabilizadora', image: '/img/products/Produto-sem-foto.jpg', description: 'A Órtese Estabilizadora de Quadril é indicada para limitar os movimentos de flexo abdução do quadril após artroplastia ou artroscopia e nos casos de luxação pós operatória de artroplastia.'
		},
		{
			id: 41, name: 'Órtese Estabilizadora de Tornozelo', category: 'Órtese para Membros Inferiores', subcategory: 'Estabilizadora de tornozelo', image: '/img/products/ortese-estabiliz-tornozelo-2.jpg', description: 'Evitar artrose, melhorando a estabilidade da articulação do tornozelo na prática esportiva. Tratamento de entorses leves. Prevenção precoce das deformidades da artrite reumatoide. Auxilia na marcha dos pacientes com lesões de dorso flexores dos pés.'
		},
		{
			id: 42, name: 'Órtese Noturna/Genu Valgo/Varo', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/ortese-noturna-2.jpg', description: 'Proporciona uma correção gradual de deformidades em joelho varus ou em valgus mediante esticadores de rosca dupla (cursores), que promove variação ou valgização de órteses, de acordo com a prescrição.'
		},
		{
			id: 43, name: 'Órtese para Abdução de Ombro', category: 'Órtese para Membro Superior', subcategory: 'Ombreira', image: 'ortese-abducao-de-ombro-2.jpg', description: 'A Órtese para Abdução de Ombro é indicada para o tratamento funcional do ombro e do braço. Permite flexão/extensão ilimitada e completa rotação médio-lateral. Feita para maior mobilidade e conforto, completa amplitude de abdução/adução. Permite a reabilitação sem remover a órtese.'
		},
		{
			id: 44, name: 'Órtese Trilateral', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/ortese-trilateral-2.jpg', description: 'O Órtese Trilateral posiciona a cabeça do fêmur propiciando o remodelamento da articulação do quadril. Descarga de peso isquiática, diminuindo a carga na articulação durante a marcha. Tratamento conservador das necroses da cabeça do fêmur como Legg-Perthes.'
		},
		{
			id: 45, name: 'Palmilha com "U" Assimétrico', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-U-2.jpg', description: 'Suporte ou apoio no arco longitudinal medial com elevação nas bordas do calcâneo em forma de “U” assimétrico. Indicado para esporão de calcâneo.'
		},
		{
			id: 46, name: 'Palmilha com Amortecedor de Calcâneo e Piloto', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-amortecedor-2.jpg', description: 'Suporte ou apoio no arco longitudinal com amortecedor e elevação retrocapital. Indicado para pés planos, valgos ou cavos, esporão de calcâneo, fascite plantar, metatarsalgias e tendinite do calcâneo.'
		},
		{
			id: 47, name: 'Palmilha com Apoio Retrocapital (Piloto)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-apoio-2.jpg', description: 'Suporte ou apoio no arco longitudinal e transverso com elevação retrocapital. Indicado para pés planos, valgos ou cavos, com desabamento do arco transverso anterior central. metatarsalgias, fascite plantar e neuromas.'
		},
		{
			id: 48, name: 'Palmilha com Arco de Cunha Medial no Retropé', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-arco-2.jpg', description: 'Suporte ou apoio no arco longitudinal medial com elevação medial no retropé. Indicado para pés planos valgos.'
		},
		{
			id: 49, name: 'Palmilha com Barra Metatarsal', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-barra-2.jpg', description: 'Suporte ou apoio no arco longitudinal e transverso com barra retrocapital. Indicado para pés planos ou cavos, com desabamento total do arco transverso anterior. Metatarsalgias, Hálux, Valgo e Neuromas.'
		},
		{
			id: 50, name: 'Palmilha com Cunha Lateral no Retropé', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-c-cunha-lateral-3.jpg', description: 'Suporte ou apoio no arco longitudinal medial com elevação lateral no retropé. Indicações para pés cavos, varos ou com rotação.'
		},
		{
			id: 51, name: 'Palmilha com Cunha Pronadora do Antepé', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-c-cunha-lateral-1-2.jpg', description: 'Suporte ou apoio no arco longitudinal medial com elevação lateral no Antepé. É indicado para pés planos ou cavos com supinação de Antepé. Metatarso raro.'
		},
		{
			id: 52, name: 'Palmilha com reforço no arco longitudinal', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-reforco-2.jpg', description: 'Elevação do arco longitudinal medial. Indicada para pés planos, valgas com desabamento do arco medial.'
		},
		{
			id: 53, name: 'Palmilha Dinâmica', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-dinamica-2.jpg', description: 'Suporte ou apoio no arco longitudinal medial, amortecedor de calcâneo e elevação retrocapital de 5ª e 1ª metatarso.  É indicada para redução de pressão nos pontos de apoio durante a marcha.'
		},
		{
			id: 54, name: 'Palmilha Helicoidal', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-helico-2.jpg', description: 'Suporte ou apoio no arco longitudinal medial com elevação lateral no retropé. Indicações para pés planos e pronados.'
		},
		{
			id: 55, name: 'Palmilha Valente - correção 1 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Infantil', image: '/img/products/palmilha-inf-1-2.jpg', description: 'A Palmilha Valente – Correção 1 é indicada para apoio em ¼ esfera (coxim navicular) plana.'
		},
		{
			id: 56, name: 'Palmilha Valente - correção 1 (adulta)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-adulto-1-2.jpg', description: 'Suave apoio da abóbada plantar, compensação do 2º, 3º e 4º metatarso.'
		},
		{
			id: 57, name: 'Palmilha Valente – Correção 2 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Infantil', image: '/img/products/Produto-sem-foto.jpg', description: 'A Palmilha Valente – Correção 2 é indicada para cunha varizante do retropé com ¼ de esfera no navicular.'
		},
		{
			id: 58, name: 'Palmilha Valente – Correção 2 (adulto)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-reforco-2.jpg', description: 'Suave apoio da abóbada plantar, compensação do 1º e 5º metatarso.'
		},
		{
			id: 59, name: 'Palmilha Valente – Correção 3 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Infantil', image: '/img/products/palmilha-com-reforco-2.jpg', description: 'A Palmilha Valente – Correção 3 é indicada para a cunha pronadora do antepé com ¼ de esfera no navicular.'
		},
		{
			id: 60, name: 'Palmilha Valente – Correção 3 (adulta)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-adulto-3-2.jpg', description: 'Apoio acentuado da abóbada plantar, cunha varizante do retropé.'
		},
		{
			id: 61, name: 'Palmilha Valente – Correção 4 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Infantil', image: '/img/products/palmilha-inf-4-2.jpg', description: 'A Palmilha Valente – Correção 4 é indicada para cunha varizante no retropé e pronadora do antepé com ¼ de esfera no navicular.'
		},
		{
			id: 62, name: 'Palmilha Valente – Correção 4 (adulto)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-adulto-4-2.jpg', description: 'Apoio acentuado da abóbada plantar, cunha varizante do retropé e cunha pronadora.'
		},
		{
			id: 63, name: 'Palmilha Valente – Correção 5 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/Produto-sem-foto.jpg', description: 'Alertas para correção de adução do ente-pé no primeiro metatarso e no cuboide com apófise do calcâneo.'
		},
		{
			id: 64, name: 'Palmilha Valente – Correção 5 (adulto)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-adulto-5-2.jpg', description: 'A Palmilha Valente – Correção 5 é indicada para apoio da abóbada planar com “U” assimétrico no calcâneo e amortecedor.'
		},
		{
			id: 65, name: 'Splints Adaptações', category: 'Órtese para Membro Superior', subcategory: 'Splints', image: '/img/products/splints-adaptacoes-2.jpg', description: 'As Splints Adaptações são projetadas par auxílio do paciente em atividades da vida diária, como por exemplo, para alimentação, escrita, higiene, etc. Elas visam facilitar a independência do paciente nessas atividades.'
		},
		{
			id: 66, name: 'Splints para Estáticos – Posicionamento e Funcionais', category: 'Órtese para Membro Superior', subcategory: 'Splints', image: '/img/products/splints-elasticos-2.jpg', description: 'O Splints para Estáticos é indicado para fraturas, tenossinovite de Quervain, entorses, contusões, artroses e reeducação articular na artrite reumatoide do polegar.'
		},
		{
			id: 67, name: 'Splints/Dedos Dinâmicos/Estáticos', category: 'Órtese para Membro Superior', subcategory: 'Splints', image: '/img/products/splints-dedos-2.jpg', description: 'Splints/Dedos Dinâmicos/Estáticos são indicados para entorses, contusões, pequenas fraturas, reeducação articular na artrite reumatoide e nas artroses, nódulos de Heberden e outras afecções dos dedos das mãos.'
		},
		{
			id: 68, name: 'Suporte para Úmero', category: 'Órtese para Membro Superior', subcategory: 'Suporte', image: '/img/products/suporte-umero-2.jpg', description: 'O Suporte para Úmero é indicado para sustentação do membro superior, contusões, luxações, fraturas do úmero, bursites e sequelas de AVC.'
		},
		{
			id: 69, name: 'Suspensório de Pavlik', category: 'Órtese para Membros Inferiores', subcategory: 'Suspensório', image: '/img/products/suspensorio-pav-2.jpg', description: 'O Suspensório de Pavlik é indicado para o tratamento da luxação congênita do quadril do recém-nascido até o 6º mês de idade. O correto ajuste nas tiras permite limitar os graus de movimento dos quadris, mantendo em flexão e abdução, permitindo os movimentos do bebê.'
		},
		{
			id: 70, name: 'Tala para Punho com Dedos Livres', category: 'Órtese para Membro Superior', subcategory: 'Tala', image: '/img/products/tala-para-punho-2.jpg', description: 'A Tala para Punho com Dedos Livres é indicada para lesões traumáticas, tenossinovites do punho, artroses, lesões de ligamentos, correção das posições viciosas da artrite reumatoide e outras afecções da região, prevenção de recidiva no retorno às atividades.'
		},
		{
			id: 71, name: 'Tala para Punho Funcional', category: 'Órtese para Membro Superior', subcategory: 'Tala', image: '/img/products/tala-punho-funcional-2.jpg', description: 'A Tala para Punho Funcional é indica para traumatismos e outras afecções do punho, mãos e dedos.'
		},
		{
			id: 72, name: 'Tala para Punho Plana', category: 'Órtese para Membro Superior', subcategory: 'Tala', image: '/img/products/tala-punho-plana-2.jpg', description: 'A Tala para Punho Plana é indicada para lesões traumáticas da região, paralisia de nervos periféricos, sequelas de AVC, deformidades da artrite reumatoide e outras afecções.'
		},
		{
			id: 73, name: 'Tipoia Imobilizadora Dupla', category: 'Órtese para Membro Superior', subcategory: 'Tipoia', image: '/img/products/tipoia-imobilizadora-dupla-2.jpg', description: 'A Tipoia Imobilizadora Dupla é indicada para sustentação do membro superior, contusões, luxações, fraturas do úmero, cotovelo, bursites e sequelas de AVC. Pode ser utilizada tanto para o lado esquerdo como para o lado direito, com acabamento almofadado.'
		},
		{
			id: 74, name: 'Tipoia Imobilizadora Simples', category: 'Órtese para Membro Superior', subcategory: 'Tipoia', image: '/img/products/tutor-samiento-3.jpg', description: 'A Tipoia Imobilizadora Simples indicada para sustentação do membro superior, contusões, luxações, fraturas do úmero, cotovelo, bursites e sequelas de AVC.'
		},
		{
			id: 75, name: 'Tira Sub Patelar', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/tira-sub-patelar-2.jpg', description: 'Tendinites do tendão patelas (joelho do saltador), síndrome de Osgood Schiatter, alívio de tensão na inserção do tendão patelas.'
		},
		{
			id: 76, name: 'Tutor de Sarmiento de Úmero', category: 'Órtese para Membro Superior', subcategory: 'Suporte', image: '/img/products/tutor-samiento-3.jpg', description: 'O Tutor de Sarmiento de Úmero é indicado para fraturas medial ou distal do úmero, permitindo completa mobilidade da articulação do ombro e do cotovelo. Pós operatório do úmero.'
		},
		{
			id: 77, name: 'Tutor de Sarmiento para Fêmur Unilateral', category: 'Órtese para Membros Inferiores', subcategory: 'Tutor', image: '/img/products/tutor-samiento-femur-2.jpg', description: 'O Tutor de Sarmiento para Fêmur Unilateral é indicado para casos de fraturas altas diafisárias. Em caso de retardo da consolidação óssea após extração de osteossínteses.'
		},
		{
			id: 78, name: 'Tutor de Sarmiento para Tíbia', category: 'Órtese para Membros Inferiores', subcategory: 'Tutor', image: '/img/products/tutor-s-tibia-2.jpg', description: 'Fraturas diafisárias dos ossos da perna e em certas fraturas do tornozelo. Pós lesões do tornozelo consideradas estáveis.Torções e pequenas fraturas que não afetam a estabilidade ligamentar.Permite a plena mobilidade do joelho.O tornozelo pode ser rígido ou articulado.'
		},
		{
			id: 79, name: 'Tutor de Sarmiento para Ulna', category: 'Órtese para Membros Superiores', subcategory: 'Tutor', image: '/img/products/tutor-s-ulna-2.jpg', description: 'Fratura medial de ulna. Pós operatório da ulna.'
		},
		{
			id: 80, name: 'Walk On órtese em fibra de carbono', category: 'Órtese para Membros Superiores', subcategory: 'Mola / Walk On', image: '/img/products/walk-on-2.jpg', description: 'Projetada para auxiliar pacientes que necessitam de retorno da função de alavanca do pé (por exemplo, nos casos de fraqueza da dorsoflexão, leve fraqueza do quadríceps, paralisia peroneal ou após derrame) para obter uma marcha natural.'
		},
		{
			id: 81, name: 'Calçados Ortopédicos Femininos', category: 'Calçados Ortopédicos', image: '/img/products/afo-curta-articulada-1.jpg', description: ''
		},
		{
			id: 82, name: 'Calçados Ortopédicos Infantis', category: 'Calçados Ortopédicos', image: '/img/products/foto1001g-1.jpg', description: ''
		},
		{
			id: 83, name: 'Calçados Ortopédicos Masculinos', category: 'Calçados Ortopédicos', image: '/img/products/foto1110g-2.jpg', description: ''
		},
		{
			id: 84, name: 'Colar Cervical Bivalvado', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar Cervical', image: '/img/products/colar-cervical-bivaldo-2.jpg', description: 'O Colar Cervical Bivalvado promove a rígida imobilização da coluna cervical. É usado no tratamento de fraturas, luxações, traumatismos e cervicalgias. Também pode ser usado em pós operatório de cirurgias da coluna cervical. O Colar Cervical Bivalvado é fabricado sob medida em polipropileno.'
		},
		{
			id: 85, name: 'Colar Cervical com Apoio Mentoniano', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar Cervical', image: '/img/products/colar-cervical-meritoriano-2.jpg', description: 'O Colar Cervical com Apoio Mentoniano é indicado para cervicobraquialgia, cervicalgias, torcicolos, traumatismo, artroses, artrites nas subluxações e fraturas de apófises transversas ou espinhosas e outras afecções da coluna vertebral.'
		},
		{
			id: 86, name: 'Colar Cervical de Espuma', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar Cervical', image: '/img/products/colar-cervical-espuma-2.jpg', description: 'O Colar Cervical de Espuma é indicado para cervicalgias, torcicolos, traumatismo, artroses, artrites, estiramento muscular, estabilização da postura durante o sono.'
		},
		{
			id: 87, name: 'Colar Cervical Minerva (Forestier)', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar Cervical', image: '/img/products/colar-cervical-minerva-2.jpg', description: 'O Colar Cervical Minerva (Forestier) promove uma rígida imobilização da coluna cervical. Indicado para tratamento coadjuvantes dos traumatismos, fraturas e luxações da coluna cervical. Pós operatório de cervicalgias de C1 e C2 e nos tratamentos da lâmina vertebral com ou sem avulsões radiculares.'
		},
		{
			id: 88, name: 'Colar Cervical Philadelphia', category: 'Órteses para cabeça e pescoço', subcategory: 'Colar Cervical', image: '/img/products/colar-cervical-philadelfia-2.jpg', description: 'O Colar Cervical Philadelphia é usado no tratamento de fraturas, luxações, traumatismos e cervicalgias. Também pode ser utilizado em pós operatório de cirurgias da coluna cervical.'
		},
		{
			id: 89, name: 'Colar Cervical Tipo Thomas', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar Cervical', image: '/img/products/colar-cervical-thomas-2.jpg', description: 'O Colar Cervical Tipo Thomas é indicado para cervicobraquialgia, cervicalgias, torcicolos, traumatismo craniano, artroses, artrites e afecções da coluna cervical.'
		},
		{
			id: 90, name: 'Imobilizador de Tornozelo', category: 'Órtese para Membros Inferiores', subcategory: 'Imobilizador', image: '/img/products/imobiliz-tornozelo-2.jpg', description: 'Entorses leves do tornozelo (substituí goteira gessada). Prevenção e tratamento das deformidades da artrite reumatoide.'
		},
		{
			id: 91, name: 'Maiôs pós-mastectomia', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/Maio-protese-mamaria-2.jpg', description: 'Desenvolvido especialmente para mulheres submetidas a operações de mastectomia.'
		},
		{
			id: 92, name: 'Prótese Mamária Gota 1', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/protese-mamaria-gota-2.jpg', description: 'Indicada para casos de cirurgia da mastectomia radical, com perda total do tecido . Complemento mamário de silicone simetricamente adaptável e maior textura.'
		},
		{
			id: 93, name: 'Prótese Mamária Gota 2', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/protese-mamaria-gota-802-2.jpg', description: 'Desenvolvida para pacientes de baixo poder aquisitivo e nos casos de mastectomia radical com perda total do tecido. Complemento mamário de silicone simetricamente adaptável sem pigmentação.'
		},
		{
			id: 94, name: 'Prótese Mamária Triangular 1', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/protese-mamaria-triangular-2.jpg', description: 'Pacientes com pouca perda de tecido. Desenvolvido para atender mulheres que sofrem de assimetria mamária, contribuindo na recuperação emocional e psicologia bem como na retomada de vida normal do corpo.'
		},
		{
			id: 95, name: 'Prótese Mamária Triangular 2', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/protese-mamaria-triangular-2.jpg', description: 'Pacientes com pouca perda de tecido. Complemento mamário de silicone simetricamente adaptável, anatomicamente desenvolvido para perfeito contato com o corpo e parte interna côncava para maior conforto.'
		},
		{
			id: 96, name: 'Soutien Pós Mastectomia', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/sutia-protese-mamaria-2.jpg', description: 'Modelo desenvolvido especialmente para mulheres submetidas a operações de mastectomia. Forrado internamente com algodão nos dois bojos.'
		}
	]);

	const [filteredProducts, setFilteredProducts] = useState(products);
	const [filters, setFilters] = useState({ category: '', subcategory: '' });
	const [currentPage, setCurrentPage] = useState(1);
  
	const handleFilterChange = (newFilters) => {
	  setFilters(newFilters);
	  setCurrentPage(1);
	};
  
	useEffect(() => {
	  const { category, subcategory, searchTerm } = filters;
	  const filtered = products.filter((product) => {
		const matchesCategory = category ? product.category === category : true;
		const matchesSubcategory = subcategory ? product.subcategory === subcategory : true;
		const matchesSearchTerm = searchTerm
		  ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
		  : true;
  
		return matchesCategory && matchesSubcategory && matchesSearchTerm;
	  });
	  setFilteredProducts(filtered);
	}, [filters, products]);
  
	const productsPerPage = window.innerWidth <= 768 ? 3 : 8;
	const paginatedProducts = filteredProducts.slice(
	  (currentPage - 1) * productsPerPage,
	  currentPage * productsPerPage
	);
  
	return (
	  <main>
		<div className="products-hero py-5 px-4">
		  <h1 className="products-title">Produtos</h1>
		  <p className='products-subtitle'>Os produtos da Ortopedia Biotécnica oferecem soluções de alta qualidade para a reabilitação e o conforto dos clientes.</p>
		  <p className='products-subtitle'>Clique ou toque em cada produto para saber mais.</p>
		</div>
		<div className="p-5">
		  <div className="layout-container">
			<Filter onFilterChange={handleFilterChange} />
			<div className="products-section">
			  <ProductsGrid
				products={paginatedProducts}
				addToCart={addToCart} // Passando a função addToCart para ProductsGrid
			  />
			  <Pagination
				currentPage={currentPage}
				totalItems={filteredProducts.length}
				itemsPerPage={productsPerPage}
				onPageChange={(page) => setCurrentPage(page)}
			  />
			</div>
		  </div>
		</div>
		<ToastContainer /> {/* Container do Toastify */}
	  </main>
	);
  };
  
  export default Products;