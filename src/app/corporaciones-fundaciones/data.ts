export type TituloKey =
  | "definicion"
  | "constitucion"
  | "gobierno"
  | "patrimonio"
  | "fiscalizacion"
  | "disolucion"
  | "ley20500";

export type Articulo = {
  n: string;
  t: TituloKey;
  h: string;
  p: string;
  legal: string;
};

export const TITULOS: Record<TituloKey, string> = {
  definicion: "Qué son: corporaciones y fundaciones",
  constitucion: "Constitución y registro",
  gobierno: "Gobierno: directorio y asamblea",
  patrimonio: "Patrimonio y rendición de cuentas",
  fiscalizacion: "Fiscalización del Ministerio de Justicia",
  disolucion: "Disolución y destino de bienes",
  ley20500: "Ley 20.500: participación ciudadana",
};

export const ORDEN: TituloKey[] = [
  "definicion",
  "constitucion",
  "gobierno",
  "patrimonio",
  "fiscalizacion",
  "disolucion",
  "ley20500",
];

export const CHIPS: { key: "todos" | TituloKey; label: string }[] = [
  { key: "todos", label: "📋 Todos" },
  { key: "definicion", label: "🏛️ Qué son" },
  { key: "constitucion", label: "📝 Constitución" },
  { key: "gobierno", label: "👥 Gobierno" },
  { key: "patrimonio", label: "💰 Patrimonio" },
  { key: "fiscalizacion", label: "🔍 Fiscalización" },
  { key: "disolucion", label: "⚖️ Disolución" },
  { key: "ley20500", label: "🤝 Ley 20.500" },
];

export const ARTICULOS: Articulo[] = [
  { n: "Art. 545 CC", t: "definicion", h: "Qué es una persona jurídica", p: "Ente ficticio capaz de tener derechos y obligaciones; hay corporaciones y fundaciones.", legal: "La persona jurídica es una persona ficticia capaz de ejercer derechos y contraer obligaciones civiles, y de ser representada judicial y extrajudicialmente. Las personas jurídicas sin fines de lucro son de dos especies: corporaciones y fundaciones; pueden existir entidades que tengan ambos caracteres." },
  { n: "Art. 545 CC", t: "definicion", h: "Corporación vs. fundación", p: "La corporación es una unión de personas; la fundación es un patrimonio afectado a un fin.", legal: "Una corporación se forma por una reunión de personas en torno a objetivos de interés común. Una fundación se forma mediante la afectación de bienes a un fin determinado de interés general. La diferencia esencial es el sustrato: personas en la corporación, patrimonio en la fundación." },
  { n: "Art. 546 CC", t: "constitucion", h: "Solo valen las constituidas conforme a la ley", p: "No hay personalidad jurídica sin constitución y registro legal.", legal: "No son personas jurídicas las que no se hayan establecido en conformidad a la ley, sea por aprobación o por el procedimiento de constitución y registro que la ley establece." },
  { n: "Art. 548 CC", t: "constitucion", h: "Acto constitutivo y depósito municipal", p: "Se constituye ante ministro de fe y la copia se deposita en la secretaría municipal dentro de 30 días.", legal: "El acto por el cual se constituyen consta en escritura pública o privada suscrita ante notario, oficial del Registro Civil o funcionario municipal autorizado. Una copia autorizada se deposita en la secretaría municipal del domicilio dentro de los 30 días siguientes; este plazo no rige para las fundaciones que se constituyen por testamento." },
  { n: "Art. 548-1 CC", t: "constitucion", h: "Quiénes constituyen", p: "El acto debe individualizar a quienes constituyen y a las primeras autoridades.", legal: "En el acto constitutivo, además de individualizarse a quienes comparecen otorgándolo, debe expresarse la voluntad de constituir la persona jurídica, aprobarse sus estatutos y designarse las autoridades inicialmente encargadas de dirigirla." },
  { n: "Art. 548-2 CC", t: "constitucion", h: "Contenido de los estatutos", p: "Nombre, domicilio, duración, fines, patrimonio inicial y órganos de dirección.", legal: "Los estatutos deben contener, al menos: el nombre y domicilio de la persona jurídica; la duración, cuando no sea indefinida; la indicación de los fines; los bienes que forman su patrimonio inicial, si los hubiere, y la forma de obtener nuevos recursos; y las disposiciones que regulen sus órganos de administración, su composición y atribuciones." },
  { n: "Art. 548-3 CC", t: "constitucion", h: "El nombre", p: "Debe aludir a su naturaleza o fin y no puede ser igual o semejante a otra ya existente.", legal: "El nombre debe hacer referencia a la naturaleza, objeto o finalidad de la entidad. No podrá coincidir o tener semejanza susceptible de provocar confusión con el de otra persona jurídica u organización vigente." },
  { n: "Art. 548 CC", t: "constitucion", h: "Revisión del secretario municipal (30 días)", p: "El secretario municipal puede objetar el acta dentro de 30 días; hay 30 días para subsanar.", legal: "El secretario municipal, dentro de los 30 días siguientes al depósito, puede objetar el acta constitutiva y los estatutos si no cumplen los requisitos legales. La organización dispone de un plazo (30 días) para subsanar las observaciones; si no las hubo o fueron subsanadas, se procede a su registro." },
  { n: "Registro Civil", t: "constitucion", h: "Inscripción en el Registro Nacional", p: "La personalidad jurídica se perfecciona con la inscripción en el Registro de Personas Jurídicas Sin Fines de Lucro.", legal: "El secretario municipal remite los antecedentes al Servicio de Registro Civil e Identificación, que practica la inscripción en el Registro Nacional de Personas Jurídicas Sin Fines de Lucro. Desde la inscripción la entidad goza plenamente de personalidad jurídica." },
  { n: "Art. 549 CC", t: "patrimonio", h: "Patrimonio separado", p: "Los bienes de la entidad no se confunden con los de sus miembros.", legal: "Lo que pertenece a una corporación no pertenece ni en todo ni en parte a sus miembros. De las obligaciones de la persona jurídica responde únicamente su patrimonio; los miembros no responden con sus bienes personales, salvo que se hubieren obligado expresamente." },
  { n: "Art. 550 CC", t: "gobierno", h: "La asamblea de asociados", p: "Es el órgano de los miembros; sus acuerdos se adoptan por mayoría.", legal: "La asamblea se reúne ordinariamente una vez al año y extraordinariamente cuando lo exijan las necesidades de la asociación. Los acuerdos se adoptan, salvo regla especial, con la mayoría de los asociados que asistan, presentes o representados." },
  { n: "Art. 551 CC", t: "gobierno", h: "El directorio", p: "La dirección y administración recaen en un directorio de al menos tres miembros.", legal: "La dirección y administración de una asociación recae en un directorio de al menos tres miembros, cuyo mandato no puede exceder de cinco años. El presidente del directorio lo es también de la asociación, la representa judicial y extrajudicialmente y tiene las demás atribuciones que señalen los estatutos." },
  { n: "Art. 551-1 CC", t: "gobierno", h: "Ejercicio del cargo de director", p: "El cargo es gratuito, salvo reembolso de gastos; con límites para remuneraciones a relacionados.", legal: "Los directores ejercen su cargo gratuitamente, sin perjuicio del reembolso de gastos. No obstante, pueden percibir reembolsos y, excepcionalmente, retribuciones reguladas; los actos con directores o personas relacionadas deben ajustarse a condiciones de mercado y constar en acta." },
  { n: "Art. 551-2 CC", t: "gobierno", h: "Responsabilidad de los directores", p: "Responden solidariamente y hasta de culpa leve por su gestión.", legal: "Los directores responden solidariamente hasta de la culpa leve por los perjuicios causados a la asociación. El director que quiera salvar su responsabilidad por un acto o acuerdo debe hacer constar su oposición en el acta." },
  { n: "Art. 553 CC", t: "gobierno", h: "Potestad disciplinaria", p: "Los estatutos pueden sancionar a los asociados con un procedimiento racional y justo.", legal: "Los estatutos tienen fuerza obligatoria sobre los asociados. La potestad disciplinaria que la asociación ejerce sobre sus miembros se aplica mediante un procedimiento racional y justo, con respeto de los derechos que la Constitución, las leyes y los estatutos confieran." },
  { n: "Art. 556 CC", t: "patrimonio", h: "Bienes, donaciones y herencias", p: "Pueden adquirir bienes y recibir donaciones y herencias.", legal: "Las asociaciones y fundaciones pueden adquirir, conservar y enajenar bienes de todas clases, a cualquier título. Las donaciones que reciban no requieren del trámite de insinuación cuando su valor no exceda el límite legal." },
  { n: "Art. 557 CC", t: "fiscalizacion", h: "Fiscalización del Ministerio de Justicia", p: "El Ministerio de Justicia y Derechos Humanos fiscaliza a corporaciones y fundaciones.", legal: "Corresponde al Ministerio de Justicia y Derechos Humanos la fiscalización de las asociaciones y fundaciones. Puede requerir a sus representantes los antecedentes que estime necesarios, inspeccionar sus libros y registros y, en su caso, ejercer las acciones que procedan." },
  { n: "Art. 557-1 CC", t: "fiscalizacion", h: "Memoria, contabilidad y balance", p: "Deben llevar contabilidad y aprobar anualmente una memoria y un balance.", legal: "Las personas jurídicas deben llevar contabilidad de conformidad con los principios contables generalmente aceptados. Confeccionan anualmente una memoria explicativa de sus actividades y un balance, que se aprueban por la asamblea o por el órgano que corresponda." },
  { n: "Art. 557-2 CC", t: "patrimonio", h: "Actividades económicas", p: "Pueden desarrollar actividades económicas si destinan los recursos a sus fines.", legal: "Las asociaciones y fundaciones pueden realizar actividades económicas que se relacionen con sus fines; también pueden invertir sus recursos del modo que decidan sus órganos de administración. Las rentas que se perciban deben destinarse a los fines de la entidad y no pueden distribuirse entre los asociados." },
  { n: "Art. 558 CC", t: "gobierno", h: "Reforma de estatutos", p: "Se acuerda en asamblea con quórum especial y debe registrarse.", legal: "La reforma de los estatutos de una asociación debe ser acordada por la asamblea citada especialmente con ese objeto, con el quórum que fijen los estatutos. La reforma de los estatutos de una fundación se sujeta a la voluntad del fundador. En ambos casos, la modificación se somete a depósito y registro." },
  { n: "Art. 559 CC", t: "disolucion", h: "Causales de disolución", p: "Por plazo vencido, acuerdo de la asamblea, sentencia judicial u otras causales legales.", legal: "Las asociaciones y fundaciones se disuelven: por el vencimiento del plazo de su duración; por acuerdo de la asamblea adoptado en sesión extraordinaria; por sentencia judicial ejecutoriada, a petición del Consejo de Defensa del Estado, cuando estén prohibidas por la Constitución o la ley, infrinjan gravemente sus estatutos o no cumplan sus fines; y por las demás causales previstas en los estatutos y las leyes." },
  { n: "Art. 561 CC", t: "disolucion", h: "Destino de los bienes", p: "Pasan a quien señalen los estatutos; si nada dicen, al Estado para fines análogos.", legal: "Disuelta una corporación, sus bienes se destinarán a lo que dispongan sus estatutos. Si nada se hubiere previsto, pertenecerán al Estado, con la obligación de emplearlos en objetos análogos a los de la institución; corresponderá al Presidente de la República señalarlos." },
  { n: "Art. 562 CC", t: "definicion", h: "Fundaciones: la voluntad del fundador", p: "Se rigen por la voluntad del fundador expresada en sus estatutos.", legal: "Las fundaciones se rigen por la voluntad del fundador. Si los estatutos nada dicen sobre la forma de integrar o renovar su administración, o resultan insuficientes, esa determinación corresponde según las reglas legales supletorias y la fiscalización del Ministerio de Justicia." },
  { n: "Ley 20.500", t: "ley20500", h: "Qué hizo la Ley 20.500 (2011)", p: "Simplificó la creación de organizaciones y creó el Registro Nacional de Personas Jurídicas Sin Fines de Lucro.", legal: "La Ley N° 20.500 sobre Asociaciones y Participación Ciudadana en la Gestión Pública reformó el Código Civil para simplificar la constitución de corporaciones y fundaciones, radicó el registro en el Servicio de Registro Civil e Identificación y reguló la participación ciudadana en los órganos de la Administración del Estado." },
  { n: "Ley 20.500", t: "ley20500", h: "Organizaciones de interés público", p: "Crea un catálogo de organizaciones que persiguen el interés general.", legal: "Son organizaciones de interés público aquellas personas jurídicas sin fines de lucro cuya finalidad es la promoción del interés general en materia de derechos ciudadanos, asistencia social, educación, salud, medio ambiente y otras de bien común. Se incorporan a un Catastro y pueden acceder a beneficios y fondos públicos." },
  { n: "Ley 20.500", t: "ley20500", h: "Voluntariado", p: "Reconoce a las organizaciones de voluntariado de interés público.", legal: "La ley reconoce como organizaciones de interés público a las de voluntariado, entendido como la actividad solidaria realizada sin contraprestación, ejecutada de manera libre, sistemática y regular por personas en favor de terceros o de la comunidad." },
  { n: "Ley 20.500", t: "ley20500", h: "Participación ciudadana en la gestión pública", p: "Cuentas públicas, consultas y consejos de la sociedad civil en los órganos del Estado.", legal: "Los órganos de la Administración del Estado deben dar cuenta pública anual, señalar las materias de interés ciudadano en que se realizarán consultas, y constituir consejos de la sociedad civil de carácter consultivo, integrados por organizaciones sin fines de lucro relacionadas con su competencia." },
  { n: "Ley 20.500", t: "ley20500", h: "Fondo de Fortalecimiento", p: "Financia proyectos de las organizaciones de interés público.", legal: "Se crea el Fondo de Fortalecimiento de las Organizaciones de Interés Público, destinado a financiar proyectos y programas de estas organizaciones, administrado con participación de un Consejo Nacional y consejos regionales." },
];
