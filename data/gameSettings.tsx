import { PencilIcon, DocumentCheckIcon, PlayIcon, GiftIcon } from '@heroicons/react/20/solid';

export const setting = {
  timeline: [
    {
      id: 1,
      game_id: 1,
      result: false,
      continue: false,
      max: 1,
      min: 0,
      peymentType: 'join',
      peyment: [
        {
          category: 'A',
          rate: {
            en: 0.01,
            ja: 1,
            es: 0.01,
            zh: 0.5
          },
        },
      ],
    },
    {
      id: 2,
      game_id: 2,
      result: false,
      continue: false,
      max: 0,
      min: 0,
      peymentType: 'none',
      peyment: [
        {
          category: 'A',
          rate: {
            en: 0.01,
            ja: 1,
            es: 0.01,
            zh: 0.5
          },
        },
      ],
    },
    {
      id: 3,
      game_id: 3,
      result: true,
      continue: true,
      max: 1000,
      min: 0,
      peymentType: 'point',
      peyment: [
        {
          category: 'A',
          rate: {
            en: 0.01,
            ja: 1,
            es: 0.01,
            zh: 0.5
          },
        },
      ],
    },
    {
      id: 4,
      game_id: 3,
      result: false,
      continue: false,
      max: 1000,
      min: 0,
      peymentType: 'point',
      peyment: [
        {
          category: 'A',
          rate: {
            en: 0.01,
            ja: 1,
            es: 0.01,
            zh: 0.5
          },
        },
        {
          category: 'B',
          rate: {
            en: 0.01,
            ja: 1,
            es: 0.01,
            zh: 0.5
          },
        },
      ],
    },
    {
      id: 5,
      game_id: 4,
      result: false,
      continue: false,
      max: 0,
      min: 0,
      peymentType: 'none',
      peyment: [
        {
          category: 'A',
          rate: {
            en: 0.01,
            ja: 1,
            es: 0.01,
            zh: 0.5
          },
        },
      ],
    },
  ],
  subject_list: [
    {
      no: 1,
      id: 'abc-def1',
      name: '林 良平',
      entered_date: '2023/06/22 09:20',
      active: '2023/06/22 10:05',
      kickout: false,
    },
    {
      no: 2,
      id: 'abc-def2',
      name: '林 良平',
      entered_date: '2023/06/22 09:21',
      active: '2023/06/22 10:06',
      kickout: true,
    },
    {
      no: 3,
      id: 'abc-def3',
      name: '林 良平',
      entered_date: '2023/06/22 09:22',
      active: '2023/06/22 10:07',
      kickout: false,
    },
    {
      no: 4,
      id: 'abc-def4',
      name: '林 良平',
      entered_date: '2023/06/22 09:23',
      active: '2023/06/22 10:08',
      kickout: false,
    },
    {
      no: 5,
      id: 'abc-def5',
      name: '林 良平',
      entered_date: '2023/06/22 09:20',
      active: '2023/06/22 10:09',
      kickout: false,
    },
    {
      no: 6,
      id: 'abc-def6',
      name: '林 良平',
      entered_date: '2023/06/22 09:24',
      active: '2023/06/22 10:10',
      kickout: false,
    },
  ],
  consent: [
    {
      locale: 'en',
      pageTitle: {
        title: 'Consent explanation',
        description: 'Please read the following description carefully. ',
      },
      researchTitle: {
        titleHead: 'Research topic name',
        title: 'Dynamic empirical study of cooperative behavior in mixed cultural situations (Part 1)',
        description:
          'This explanatory note is intended to help you understand the contents of this study correctly and to help you decide whether or not to participate in this study based on your free will. <br />Please decide on your own free will whether you agree to cooperate with this research. There will be no disadvantage to you if you do not agree. <br />Also, even if you consent, you can withdraw your consent at any time without any disadvantage to you. <br />Read the following items carefully, and if you agree, please press the button at the bottom to display the consent form. ',
      },
      details: [
        {
          id: 1,
          title: 'About research',
          description:
            'The conduct of the research has been reviewed by the Ethics Review Committee of Kochi University of Technology, and permission has been obtained from the head of the research institution. This research is permitted until <span className="underline">March 31, 2028</span>. <br />In addition, if there is a change in the research plan or implementation method, it will be reviewed as appropriate and the utmost consideration will be given to safety and human rights. ',
        },
        {
          id: 2,
          title: 'Significance and purpose of research',
          description:
            'This research is carried out with the purpose of clarifying the general trends in human social behavior. We examine the effects of differences in attributes such as age, gender, and region of residence on behaviors such as trust, cooperation, and punishment. ',
        },
        {
          id: 3,
          title: 'Subject of research',
          description: 'Residents of Japan who are 18 years of age or older. ',
        },
        {
          id: 4,
          title: 'Research methods',
          description:
            "In this study, we will ask you to operate a computer and answer a number of questions. <br />First, we will ask you questions regarding your attributes (age, gender, etc.). <br />Next, we will divide everyone into groups on the computer and have them perform an economic experiment in which they share points with other participants in the same group. The points of this economic experiment are linked to the experiment reward amount that will be given at the end of the experiment. <br />Finally, we will pay you the total amount of your participation fee for today's participation and the experiment fee obtained from the experiment as a reward for participating in the experiment. ",
        },
        {
          id: 5,
          title: 'Forecasted (physical and mental) hazards and their responses',
          description:
            'You may be asked to perform simple tasks during the experiment. This work is a daily task that anyone can do. The work will be explained in detail before the experiment. We will only do this if you agree that there will be no problems. You can also withdraw your agreement and stop at any time during the process. <br />If you have any questions, please ask the experimenter before or after the experiment. Please note that there will be a period during the experiment where you will not be able to ask questions. ',
        },
        {
          id: 6,
          title: 'Benefits and disadvantages brought to research subjects',
          description:
            'You can receive compensation (experiment participation reward) by participating in the experiment. <br />The possibility that you will be disadvantaged by participating in the experiment is extremely small. ',
        },
        {
          id: 7,
          title: 'About financial burden and compensation',
          description:
            "You will receive the total amount (900 yen - 1,800 yen) of the participation fee for today's participation (900 yen) and the experiment reward (0 yen - 900 yen) obtained from the experiment as an experiment participation reward at the end of the experiment. You can receive it. <br />You can stop the experiment and leave the laboratory at any time before or during the experiment. If you cancel the experiment midway through, you will only receive the participation reward (900 yen) and not the experiment reward (0 to 900 yen). ",
        },
        {
          id: 8,
          title: 'About personal information protection',
          description:
            'We will not collect information other than attribute information, psychological tendencies, and experimental results that are necessary to proceed with this research. Data is processed statistically using anonymous ID numbers and analyzed separately from personally identifiable information. Furthermore, when reporting externally, the results are aggregated and cannot identify individuals, so individuals will not be identified. ',
        },
        {
          id: 9,
          title: 'About data storage',
          description:
            'The data for this study will be stored on electronic storage media and stored in a locked storage room at A609 Eikokuji Campus, Kochi University of Technology. When analyzing your data, it is processed only on computers equipped with security measures. Data analysis and storage will be conducted by the principal investigator. <br />When a joint researcher performs an analysis, the principal investigator lends only information that cannot be used to identify individuals, and after the analysis is complete, all data is collected and stored by the principal investigator. ',
        },
        {
          id: 10,
          title: 'About research costs',
          description:
            'This research will be carried out with funding from the Kochi University of Technology research grant and the Grant-in-Aid for Scientific Research, International Collaborative Research Acceleration Fund (International Collaborative Research Enhancement (A)). ',
        },
        {
          id: 11,
          title: 'About conflicts of interest',
          description:
            'Regarding this research, there are no relationships with companies or any financial interests that could affect the research results or the protection of participants. ',
        },
        {
          id: 12,
          title: 'Methods for disclosing research information',
          description:
            'To the extent that it does not interfere with the protection of the personal information of those who participated in this research and the preservation of the originality of this research, you may view materials related to this research plan and research methods. If you would like to view the materials, please let us know. <br />The results of this research will be published in academic journals, etc. at academic conferences, etc., but any information that could personally identify you will be removed before publication. ',
        },
        {
          id: 13,
          title: 'About the research implementation system',
          description:
            'This research will be conducted under the following structure. <br />Research location: Kochi University of Technology Eikokuji Campus<br />Research Director: Ryohei Hayashi<br />Co-researcher: Hiroji Kotani, Moinul Islam<br />Co-research institution: Macquarie University Economic Experiment Laboratory (Australia)<br />Co-researcher: Maroš Servátka',
        },
        {
          id: 14,
          title: 'Inquiry',
          description:
            'If you have any questions regarding this research, please contact the research director below. <br />Affiliation: Kochi University of Technology, School of Economics and Management<br />Research Director: Ryohei Hayashi<br />Address: 2-2 Eikokuji-cho, Kochi City, Kochi Prefecture<br />E-mail: mail@ example.com',
        },
        { id: 15, title: 'Explanation date', description: 'June 5, 2023' },
        { id: 16, title: 'Explainer', description: 'Ryohei Hayashi' },
      ],
      confirm: {
        description: 'Please read the above carefully and enter your name if you agree. ',
        buttonText: 'Agree',
      },
    },
    {
      locale: 'ja',
      pageTitle: {
        title: '同意説明',
        description: '以下の説明文をよく読んでください。',
      },
      researchTitle: {
        titleHead: '研究課題名',
        title: '文化混在状況下における協力行動の動学的実証研究（その１）',
        description:
          'この説明文は、あなたにこの研究の内容を正しく理解していただき、あなたの自由な意思に基づいて、この研究に参加するかどうかを判断していただくためのものです。<br />この研究への協力の同意は、あなたの自由意志で決めてください。同意しなくてもあなたの不利益になるようなことはありません。<br />また、一旦同意した場合でも、あなたが不利益を受けることなく、いつでも同意を撤回することができます。<br />以下の項目をよく読んで、同意できる場合は一番下にあるボタンを押して、同意書を表示してください。',
      },
      details: [
        {
          id: 1,
          title: '研究について',
          description:
            '研究の実施にあたっては、高知工科大学倫理審査委員会の審査を経て、研究機関の長より許可を受けています。この研究が許可されているのは<span className="underline">2028年3月31日</span>までです。<br />また、研究計画の変更、実施方法の変更が生じる場合には適宜審査を受け、安全性と人権に最大の配慮をします。',
        },
        {
          id: 2,
          title: '研究の意義・目的',
          description:
            'この研究では、人間の社会行動には一般的にどのような傾向があるかを明らかにする目的で実施されます。年齢、性別、住んでいる地域などの属性の違いが、信頼、協力、処罰などの行動に与える影響を検証します。',
        },
        {
          id: 3,
          title: '研究の対象',
          description: '18歳以上の日本在住者。',
        },
        {
          id: 4,
          title: '研究の方法',
          description:
            'この研究では、みなさんにコンピュータを操作してもらい、いくつかの質問に答えてもらいます。<br />最初に、みなさんの属性（年齢や性別など）に関する質問をします。<br />次に、みなさんをコンピュータ上でいくつかのグループにわけ、同じグループになった他の参加者とともに、ポイントを分け合う経済実験を行ってもらいます。この経済実験のポイントは、実験終了時にお渡しする実験報酬額と連動しています。<br />最後に、本日ご参加いただいた参稼報酬と、実験によって得られた実験報酬の合計額を、実験参加謝金としてお支払いします。',
        },
        {
          id: 5,
          title: '予測される（物理的及び精神的）危険及びその対応',
          description:
            '実験中に簡単な作業をしてもらう場合があります。その作業は誰にでもできる日常的な作業です。作業内容は実験前に詳細に説明します。あなたが支障がないと合意した場合にのみ実施していただきます。また、作業中にいつでも合意を取り消して中止することもできます。<br />不明な点がありましたら、実験前、実験後にかかわらず、実験実施者にお尋ねください。なお実験中は質問できない期間があります。',
        },
        {
          id: 6,
          title: '研究対象者にもたらされる利益及び不利益',
          description:
            'あなたは、実験参加によって報酬（実験参加謝金）を受け取ることができます。<br />あなたは、実験参加によって不利益を被る可能性は極めて少ないです。',
        },
        {
          id: 7,
          title: '経済的負担や報酬について',
          description:
            'あなたは、本日ご参加いただいた参加報酬（900円）と、実験によって得られた実験報酬（0円〜900円）の合計額（900円〜1,800円）を、実験参加謝金として実験終了時に受け取れます。<br />あなたは、実験前、実験中のいつでも実験を途中で中止して、実験室から出ることができます。実験を途中で中止した場合は、参加報酬（900円）だけを受け取れ、実験報酬（0円〜900円）は受け取れません。',
        },
        {
          id: 8,
          title: '個人情報の保護について',
          description:
            'この研究をすすめる上で必要な属性情報、心理的傾向、実験結果の情報以外は収集しません。データは匿名のID番号を用いて統計処理され、個人が特定できる情報と切り離して分析されます。また、対外的に報告される場合も、個人が特定できない集計した結果を報告しますので、個人が特定されることはありません。',
        },
        {
          id: 9,
          title: 'データの保管について',
          description:
            'この研究のデータは電子記憶媒体に保存し、高知工科大学永国寺キャンパスA609の鍵付き保管庫にて保管されます。データを分析する際は、セキュリティ対策が施されたコンピュータのみで処理されます。データの分析・保管は研究代表者が行います。<br />共同研究者が分析する場合は、研究代表者から個人が特定できない情報のみ貸出し、分析終了後に全データを回収して、研究代表者が保管します。',
        },
        {
          id: 10,
          title: '研究の費用について',
          description:
            'この研究は高知工科大学研究費及び科学研究費補助金 国際共同研究加速基金（国際共同研究強化（A))を原資に実施されます。',
        },
        {
          id: 11,
          title: '利益相反について',
          description:
            'この研究に関して、企業等との関わりや、研究成果や参加者の保護に影響を及ぼす可能性のあるすべての経済的利益関係等の状況はありません。',
        },
        {
          id: 12,
          title: '研究に関する情報公開の方法について',
          description:
            'この研究に参加した方々の個人情報の保護や、この研究の独創性の確保に支障がない範囲で、この研究の計画書や研究の方法に関する資料を閲覧することができます。資料の閲覧を希望される方はどうぞお申し出ください。<br />この研究の成果は、学会等にて学術雑誌等で公表されますが、あなた個人が特定される情報を削除した上で発表されます。',
        },
        {
          id: 13,
          title: '研究の実施体制について',
          description:
            'この研究は以下の体制で実施します。<br />研究実施場所：高知工科大学永国寺キャンパス<br />研究責任者：林 良平<br />研究分担者：小谷 浩示、Moinul Islam<br />共同研究機関：マッコーリー大学 経済実験研究室（オーストラリア）<br />研究分担者： Maroš Servátka',
        },
        {
          id: 14,
          title: 'お問合せ',
          description:
            'この研究に関して質問等がありましたら、以下の研究責任者にお問合せください。<br />所属：高知工科大学 経済・マネジメント学群<br />研究責任者：林 良平<br />住所：高知県高知市永国寺町２番２号<br />E-mail: mail@example.com',
        },
        { id: 15, title: '説明日', description: '2023年6月5日' },
        { id: 16, title: '説明者', description: '林 良平' },
      ],
      confirm: {
        description: '上記の項目をよく読んで、同意できる場合は名前を入力してください。',
        buttonText: '同意',
      },
    },
    {
      locale: 'es',
      pageTitle: {
        title: 'Explicación del consentimiento',
        description: 'Lea atentamente la siguiente description. ',
      },
      researchTitle: {
        titleHead: 'Nombre del tema de investigación',
        title: 'Estudio empírico dinámico del comportamiento cooperativo en situaciones culturales mixtas (Parte 1)',
        description:
          'Esta nota explicativa tiene como objetivo ayudarle a comprender correctamente el contenido de este estudio y ayudarle a decidir si participa o no en este estudio según su libre albedrío. <br />Decida por su propia voluntad si acepta cooperar con esta investigación. No habrá ninguna desventaja para usted si no está de acuerdo. <br />Además, incluso si usted da su consentimiento, puede retirar su consentimiento en cualquier momento sin ninguna desventaja para usted. <br />Lea atentamente los siguientes elementos y, si está de acuerdo, presione el botón en la parte inferior para mostrar el formulario de consentimiento. ',
      },
      details: [
        {
          id: 1,
          title: 'Acerca de la investigación',
          description:
            'La realización de la investigación ha sido revisada por el Comité de Revisión de Ética de la Universidad Tecnológica de Kochi y se ha obtenido el permiso del director de la institución de investigación. Esta investigación está permitida hasta el <span className="underline">31 de marzo de 2028</span>. <br />Además, si hay un cambio en el plan de investigación o método de implementación, se revisará según corresponda y se dará la máxima consideración a la seguridad y los derechos humanos. ',
        },
        {
          id: 2,
          title: 'Importancia y propósito de la investigación',
          description:
            'Esta investigación se lleva a cabo con el propósito de aclarar las tendencias generales del comportamiento social humano. Examinamos los efectos de las diferencias en atributos como la edad, el género y la región de residencia en comportamientos como la confianza, la cooperación y el castigo. ',
        },
        {
          id: 3,
          title: 'Tema de investigación',
          description: 'Residentes de Japón que tengan 18 años de edad o más. ',
        },
        {
          id: 4,
          title: 'Métodos de investigación',
          description:
            'En este estudio, le pediremos que maneje una computadora y responda una serie de preguntas. <br />Primero, le haremos preguntas sobre sus atributos (edad, sexo, etc.). <br />A continuación, dividiremos a todos en grupos en la computadora y les pediremos que realicen un experimento económico en el que comparten puntos con otros participantes del mismo grupo. Los puntos de este experimento económico están vinculados al monto de la recompensa del experimento que se otorgará al final del experimento. <br />Finalmente, le pagaremos el monto total de su tarifa de participación por la participación de hoy y la tarifa del experimento obtenida del experimento como recompensa por participar en el experimento. ',
        },
        {
          id: 5,
          title: 'Peligros previstos (físicos y mentales) y sus respuestas',
          description:
            'Es posible que se le solicite que realice tareas sencillas durante el experimento. Este trabajo es una tarea diaria que cualquiera puede realizar. El trabajo se explicará en detalle antes del experimento. Sólo haremos esto si usted acepta que no habrá problemas. También puede retirar su acuerdo y detenerse en cualquier momento durante el proceso. <br />Si tiene alguna pregunta, pregúntele al experimentador antes o después del experimento. Tenga en cuenta que habrá un período durante el experimento en el que no podrá hacer preguntas. ',
        },
        {
          id: 6,
          title: 'Beneficios y desventajas aportados a los sujetos de investigación',
          description:
            'Puedes recibir una compensación (recompensa por participar en el experimento) al participar en el experimento. <br />La posibilidad de que usted se vea perjudicado al participar en el experimento es extremadamente pequeña. ',
        },
        {
          id: 7,
          title: 'Sobre la carga financiera y la compensación',
          description:
            'Recibirá el monto total (900 yenes - 1,800 yenes) de la tarifa de participación por la participación de hoy (900 yenes) y la recompensa del experimento (0 yenes - 900 yenes) obtenida del experimento como recompensa por participar en el experimento al final del experimento Puedes recibirlo. <br />Puede detener el experimento y abandonar el laboratorio en cualquier momento antes o durante el experimento. Si cancela el experimento a mitad de camino, solo recibirá la recompensa de participación (900 yenes) y no la recompensa del experimento (de 0 a 900 yenes). ',
        },
        {
          id: 8,
          title: 'Acerca de la protección de la información personal',
          description:
            'No recopilaremos información que no sea información de atributos, tendencias psicológicas y resultados experimentales que sean necesarios para continuar con esta investigación. Los datos se procesan estadísticamente utilizando números de id anónimos y se analizan por separado de la información de id personal. Además, cuando se informa externamente, los resultados se agregan y no pueden identificar a las personas, por lo que no se identificará a las personas. ',
        },
        {
          id: 9,
          title: 'Acerca del almacenamiento de datos',
          description:
            'Los datos de este estudio se almacenarán en medios de almacenamiento electrónicos y se almacenarán en una sala de almacenamiento cerrada con llave en el campus A609 Eikokuji de la Universidad Tecnológica de Kochi. Al analizar sus datos, estos se procesan únicamente en computadoras equipadas con medidas de seguridad. El análisis y almacenamiento de datos estará a cargo del investigador principal. <br />Cuando un investigador conjunto realiza un análisis, el investigador principal solo proporciona información que no puede usarse para identificar a las personas y, una vez completado el análisis, el investigador principal recopila y almacena todos los datos. ',
        },
        {
          id: 10,
          title: 'Acerca de los costos de investigación',
          description:
            'Esta investigación se llevará a cabo con financiación de la subvención de investigación de la Universidad Tecnológica de Kochi y la subvención para la investigación científica, Fondo Internacional de Aceleración de la Investigación Colaborativa (Mejora de la Investigación Colaborativa Internacional (A)). ',
        },
        {
          id: 11,
          title: 'Acerca de los conflictos de intereses',
          description:
            'Con respecto a esta investigación, no existen relaciones con empresas ni intereses financieros que puedan afectar los resultados de la investigación o la protección de los participantes. ',
        },
        {
          id: 12,
          title: 'Métodos para divulgar información de investigación',
          description:
            'Puede ver materiales relacionados con el plan de investigación y los métodos de investigación en la medida en que no interfiera con la protección de la información personal de quienes participaron en esta investigación o con la garantía de la originalidad de esta investigación. Si desea ver los materiales, háganoslo saber. <br />Los resultados de esta investigación se publicarán en revistas académicas, etc., en conferencias académicas, etc., pero cualquier información que pueda identificarlo personalmente se eliminará antes de la publicación. ',
        },
        {
          id: 13,
          title: 'Acerca del sistema de implementación de la investigación',
          description:
            'Esta investigación se llevará a cabo bajo la siguiente estructura. <br />Lugar de investigación: Campus Eikokuji, Universidad Tecnológica de Kochi<br />Director de investigación: Ryohei Hayashi<br />Coinvestigador: Hiroji Kotani, Moinul Islam<br />Institución co-investigadora: Laboratorio de Experimentos Económicos de la Universidad Macquarie (Australia)<br />Coinvestigador: Maroš Servátka',
        },
        {
          id: 14,
          title: 'Consulta',
          description:
            'Si tiene alguna pregunta sobre esta investigación, comuníquese con el director de investigación a continuación. <br />Afiliación: Universidad Tecnológica de Kochi, Facultad de Economía y Gestión<br />Director de investigación: Ryohei Hayashi<br />Dirección: 2-2 Eikokuji-cho, ciudad de Kochi, prefectura de Kochi<br />Correo electrónico : correo@ejemplo.com',
        },
        { id: 15, title: 'Fecha de explicación', description: '5 de junio de 2023' },
        { id: 16, title: 'Explicación', description: 'Ryohei Hayashi' },
      ],
      confirm: {
        description: 'Lea atentamente lo anterior e ingrese su nombre si está de acuerdo. ',
        buttonText: 'Acepto',
      },
    },
    {
      locale: 'zh',
      pageTitle: {
        title: '同意說明',
        description: '請仔細閱讀以下說明。 ',
      },
      researchTitle: {
        titleHead: '研究課題名',
        title: '混合文化情境下合作行為的動態實證研究（第1部分）',
        description:
          '本說明旨在幫助您正確理解本研究的內容,並幫助您根據您的自由意志決定是否參與本研究。 <br />請您自行決定是否同意配合本研究。 如果您不同意,也不會對您造成任何不利。 <br />此外,即使您同意,您也可以隨時撤回您的同意,這不會對您造成任何不利。 <br />請仔細閱讀以下條款,如果您同意,請按底部按鈕顯示同意書。 ',
      },
      details: [
        {
          id: 1,
          title: '關於研究',
          description:
            '該研究的進行已經過高知工業大學倫理審查委員會的審查,並已獲得研究機構負責人的許可。 本研究的有效期限為 <span className="underline">2028 年 3 月 31 日</span>。 <br />此外,如果研究計劃或實施方式發生變化,將酌情進行審查,並最大限度地考慮安全和人權。 ',
        },
        {
          id: 2,
          title: '研究的意義和目的',
          description:
            '這項研究的目的是闡明人類社會行為的整體趨勢。 我們研究了年齡、性別和居住地區等屬性差異對信任、合作和懲罰等行為的影響。 ',
        },
        {
          id: 3,
          title: '研究主題',
          description: '年滿 18 歲的日本居民。 ',
        },
        {
          id: 4,
          title: '研究方法',
          description:
            '在這項研究中,我們將要求你操作計算機並回答一些問題。 <br />首先,我們會詢問您有關您的屬性（年齡、性別等）的問題。 <br />接下來,我們將在電腦上將每個人分成幾組,讓他們進行一個經濟實驗,並與同一組的其他參與者分享積分。 本次經濟實驗的積分與實驗結束時所給予的實驗獎勵金額掛鉤。 <br />最後,我們將向您支付您今天參與的參與費和實驗獲得的實驗費的總金額,作為參與實驗的獎勵。 ',
        },
        {
          id: 5,
          title: '預測的（身體和精神）危險及其反應',
          description:
            '在實驗過程中,您可能會被要求執行簡單的任務。 這項工作是任何人都可以做的日常任務。 實驗前將對工作進行詳細說明。 只有您同意不會有任何問題,我們才會這樣做。 您也可以在此過程中隨時撤銷同意並停止。 <br />如果您有任何疑問,請在實驗前或實驗後詢問實驗人員。 請注意,實驗期間有一段時間您將無法提問。 ',
        },
        {
          id: 6,
          title: '給研究對象帶來的好處和壞處',
          description: '透過參與實驗可以獲得報酬（實驗參與獎勵）。 <br />參與實驗讓你處於不利地位的可能性極小。 ',
        },
        {
          id: 7,
          title: '關於經濟負擔與補償',
          description:
            '今天​​參加的參加費（900日元）和實驗中獲得的實驗獎勵（0日元- 900日元）的總金額（900日元- 1,800日元）將在實驗結束時收到,作為實驗參與獎勵實驗一下,可以收到。 <br />實驗前或實驗過程中您可以隨時停止實驗並離開實驗室。 若中途取消實驗,則只能獲得參與獎勵（900日圓）,而不會獲得實驗獎勵（0～900日圓）。 ',
        },
        {
          id: 8,
          title: '關於個人資訊保護',
          description:
            '除了進行這項研究所需的屬性資訊、心理傾向和實驗結果之外,我們不會收集其他資訊。資料使用匿名 ID 號碼進行統計處理,並與個人識別資訊分開進行分析。 此外,對外報告時,結果是匯總的,無法識別個人,因此不會識別個人。 ',
        },
        {
          id: 9,
          title: '關於資料儲存',
          description:
            '這項研究的數據將儲存在電子儲存媒體上,並儲存在高知工業大學永國寺校區 A609 的一個上鎖的儲藏室中。 分析您的資料時,僅在配備安全措施的電腦上處理。 數據分析和儲存將由首席研究員進行。 <br />聯合研究人員進行分析時,首席研究員僅提供無法用於識別個人身份的信息,分析完成後,所有數據均由首席研究員收集並存儲。 ',
        },
        {
          id: 10,
          title: '關於研究成本',
          description:
            '這項研究將在高知理工大學研究補助金和科學研究補助金、國際合作研究加速基金（國際合作研究增強（A））的資助下進行。 ',
        },
        {
          id: 11,
          title: '關於利益衝突',
          description: '關於這項研究,不存在可能影響研究結果或參與者保護的公司或任何經濟利益關係。',
        },
        {
          id: 12,
          title: '研究資訊揭露方法',
          description:
            '您可以在不妨礙保護參與本研究的個人資訊或確保本研究的原創性的範圍內查看與研究計劃和研究方法相關的資料。 如果您想查看材料,請告訴我們。 <br />這項研究的結果將在學術期刊等學術會議等上發表,但任何可以識別您個人身份的資訊將在發表前被刪除。 ',
        },
        {
          id: 13,
          title: '關於研究實施系統',
          description:
            '這項研究將在以下結構下進行。 <br />研究地點: 高知工業大學永國寺校區<br />研究主任: Ryohei Hayashi<br />合作研究員: Hiroji Kotani、Moinul Islam<br />合作研究機構: 麥考瑞大學經濟實驗實驗室（澳洲）<br />聯合研究員: Maroš Servátka',
        },
        {
          id: 14,
          title: '查詢',
          description:
            '如果您對這項研究有任何疑問,請聯絡下面的研究總監。 <br />所屬單位: 高知工業大學經濟管理學院<br />研究主任: 林良平<br />地址: 高知縣高知市永國寺町2-2<br />郵箱: mail@example.com',
        },
        { id: 15, title: '解釋日期', description: '2023 年 6 月 5 日' },
        { id: 16, title: '解釋者', description: 'Ryohei Hayashi' },
      ],
      confirm: {
        description: '請仔細閱讀以上內容,如果同意請輸入您的姓名。 ',
        buttonText: '同意',
      },
    },
  ],
  experiment: {},
  locales: [
    {
      locale: 'en',
      currency: '€',
      variables: [
        { key: 'distributor', locale: 'distributor' },
        { key: 'respondent', locale: 'respondent' },
      ],
    },
    {
      locale: 'ja',
      currency: '¥',
      variables: [
        { key: 'distributor', locale: '分配者' },
        { key: 'respondent', locale: '応答者' },
      ],
    },
    {
      locale: 'es',
      currency: '€',
      variables: [
        { key: 'distributor', locale: 'distribuidor' },
        { key: 'respondent', locale: 'demandado' },
      ],
    },
    {
      locale: 'zh',
      currency: '¥',
      variables: [
        { key: 'distributor', locale: '經銷商' },
        { key: 'respondent', locale: '受訪者' },
      ],
    },
  ],
};

export const games = [
  {
    id: 1,
    name: 'games_agreement',
    result: false,
    continue: true,
    icon: DocumentCheckIcon,
    min_num: 1,
    iconBackground: 'bg-gray-500',
  },
  {
    id: 2,
    name: 'games_attributeSurvey',
    result: false,
    continue: true,
    icon: PencilIcon,
    min_num: 1,
    iconBackground: 'bg-gray-500',
  },
  {
    id: 3,
    name: 'games_ultimatumGame',
    result: true,
    continue: true,
    icon: PlayIcon,
    min_num: 2,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    name: 'games_fee',
    result: true,
    continue: true,
    icon: GiftIcon,
    min_num: 1,
    iconBackground: 'bg-gray-500',
  },
];
