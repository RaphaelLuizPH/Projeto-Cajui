from gtts import gTTS 

language = 'pt-br' 
    
    
    
audio1 = gTTS(
    text= "AJUDE O RIO GRANDE DO SUL! SOBRE O PROJETO! Em meio aos desafios que enfrentamos, a solidariedade e a união são nossas maiores forças. O nosso projeto nasceu com o objetivo de apoiar aqueles que estão passando por dificuldades no Rio Grande do Sul. Acreditamos que, juntos, podemos fazer a diferença na vida de muitas pessoas. Por isso, incentivamos a doação de itens essenciais e o suporte comunitário. Cada contribuição, não importa o tamanho, tem o poder de trazer alívio e esperança para aqueles que mais precisam." , 
    lang=language
) 

audio2 = gTTS(
    text= "HERÓIS! Doar é um ato de heroísmo. Não é necessário ter superpoderes ou uma capa para fazer a diferença na vida de alguém. O verdadeiro heroísmo reside na compaixão, na empatia e na vontade de ajudar. Cada doação, seja ela grande ou pequena, é um ato de coragem e generosidade. É escolher colocar as necessidades de outra pessoa antes das suas, é estender a mão para alguém que você pode nunca conhecer, é dar sem esperar nada em troca." , 
    lang=language
) 

audio3 = gTTS(
    text= "COMO AJUDAR! Formas de contribuir: Voluntariado Se você está na região ou pode se deslocar até lá, considere oferecer seu tempo como voluntário. Muitas equipes precisam de ajuda para distribuir donativos, montar abrigos temporários e oferecer apoio emocional às vítimas. Divulgação A disseminação de informações corretas e atualizadas também é uma forma de ajudar. Compartilhe nas suas redes sociais as formas de doação e os esforços de socorro, sempre verificando a veracidade das informações para evitar a propagação de fake news. Doações Organizações locais e nacionais estão arrecadando fundos para fornecer assistência imediata e a longo prazo às vítimas. Considere fazer uma doação para uma das instituições confiáveis listadas abaixo. Cruz Vermelha Brasileira: Aceita doações financeiras que são usadas para suprir necessidades emergenciais como alimentos, água, medicamentos e abrigo. Defesa Civil: Muitas vezes, aceita doações diretamente ou pode fornecer informações sobre onde doar. Organizações Não Governamentais (ONGs): Muitas ONGs locais estão no terreno ajudando as vítimas e precisam de recursos financeiros para continuar seu trabalho." , 
    lang=language
) 

audio4 = gTTS(
    text= "Depoimentos: Lana D diz: Só tenho a agradecer a ajuda que vocês estão nos proporcionando. Receber roupas, cobertores e produtos de higiene nos ajudou a manter a saúde e o bem-estar da minha família. Alexandre T diz: Perdi tudo nas enchentes, graças as doações estou conseguindo seguir forte. Cada contribuição fez uma enorme diferença, nos deu esperança e força para seguir em frente. Maria diz: As doações que recebemos foram essenciais para recomeçar nossas vidas. Com a ajuda de todos, conseguimos roupas, alimentos que nos permitiram manter a dignidade durante esse momento tão difícil. Somos eternamente gratos." , 
    lang=language
) 

audio5 = gTTS(
    text =  "PRINCIPAIS NECESSIDADES:  Água potável, higiene pessoal, cesta básica, produtos de limpeza, roupas, ração animal" ,
    lang=language
)

audio6 = gTTS(
    text= "Perguntas frequentes: 1. Eu moro longe, consigo doar mesmo assim?  Sim, consegue! Envie doações de itens essenciais, como alimentos, roupas e produtos de higiene, através de transportadoras ou serviços de correio, para pontos de arrecadação. Participe de campanhas de arrecadação em sua cidade que destinam recursos e materiais para as áreas afetadas. 2. O que causou as enchentes no Rio Grande do Sul?  As enchentes no Rio Grande do Sul foram causadas por chuvas intensas e contínuas, que resultaram no transbordamento de rios e cursos da água. As mudanças climáticas e padrões meteorológicos atípicos também contribuíram para o aumento do volume de água. 3. Onde posso fazer doações financeiras?  Doações financeiras podem ser feitas diretamente para ONGs confiáveis, a Defesa Civil e campanhas organizadas por entidades reconhecidas. Verifique os sites e redes sociais dessas organizações para obter informações sobre como doar. 4. Existem outras maneiras de ajudar além de doações?  Sim, você pode ajudar compartilhando informações sobre campanhas de arrecadação em suas redes sociais, organizando eventos de arrecadação de fundos em sua comunidade, e sensibilizando outras pessoas sobre a importância de ajudar as vítimas das enchentes." , 
    lang=language
) 

audio7 = gTTS(
    text =  "Doe agora! Doe agora e faça a diferença no Rio Grande do Sul. Sua contribuição é essencial para ajudar as famílias a superar desafios e construir uma comunidade mais forte e unida. Para mais informações sobre como doar e o impacto das doações, acesse as plataformas de doação e sites das organizações locais. O estado do Rio Grande do Sul está enfrentando desafios significativos, afetando muitas famílias que precisam de apoio. A sua doação pode proporcionar a ajuda necessária para superar essas dificuldades. Primeiro link: Greenpeace. Segundo link: Ação da cidadania. Terceiro link: SOS Enchentes. Imagem: Qr Code PIX" ,
    lang=language
)




audio6.save('faq.mp3')