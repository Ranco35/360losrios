export type TituloKey =
  | "constitucion"
  | "gobierno"
  | "patrimonio"
  | "disolucion"
  | "fiscalizacion"
  | "federaciones"
  | "final"
  | "transitorio";

export type Articulo = {
  n: string;
  t: TituloKey;
  h: string;
  p: string;
  legal: string;
};

export const TITULOS: Record<TituloKey, string> = {
  constitucion: "Constitucion y registro",
  gobierno: "Directorio y asambleas",
  patrimonio: "Patrimonio, cuotas y contabilidad",
  disolucion: "Disolucion y liquidacion",
  fiscalizacion: "Fiscalizacion, sanciones y reclamos",
  federaciones: "Federaciones y confederaciones",
  final: "Normas finales",
  transitorio: "Disposiciones transitorias",
};

export const ORDEN: TituloKey[] = [
  "constitucion",
  "gobierno",
  "patrimonio",
  "disolucion",
  "fiscalizacion",
  "federaciones",
  "final",
  "transitorio",
];

export const CHIPS: { key: "todos" | TituloKey; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "constitucion", label: "Constitucion" },
  { key: "gobierno", label: "Gobierno" },
  { key: "patrimonio", label: "Patrimonio" },
  { key: "disolucion", label: "Disolucion" },
  { key: "fiscalizacion", label: "Fiscalizacion" },
  { key: "federaciones", label: "Federaciones" },
  { key: "final", label: "Finales" },
  { key: "transitorio", label: "Transitorios" },
];

export const ARTICULOS: Articulo[] = [
  { n: "Art. 1", t: "constitucion", h: "Objeto de la asociacion gremial", p: "Agrupa personas naturales o juridicas para proteger y desarrollar actividades comunes.", legal: "Define a las asociaciones gremiales y prohibe que desarrollen actividades politicas o religiosas." },
  { n: "Art. 2", t: "constitucion", h: "Afiliacion voluntaria", p: "Nadie puede ser obligado a afiliarse ni impedido de desafiliarse.", legal: "La afiliacion es un acto voluntario y personal." },
  { n: "Art. 3", t: "constitucion", h: "Minimo de constituyentes", p: "Se requiere al menos 25 personas naturales o juridicas, o 4 personas juridicas.", legal: "La constitucion se acuerda ante notario u Oficial del Registro Civil donde corresponda, y el acta debe aprobar estatutos, elegir mesa directiva e individualizar a los concurrentes." },
  { n: "Art. 4", t: "constitucion", h: "Deposito, registro y publicacion", p: "El acta se deposita ante Economia y el extracto se publica en el Diario Oficial.", legal: "La personalidad juridica nace con la publicacion del extracto, que incluye datos basicos y el numero de registro. Deposito y publicacion deben realizarse dentro de 60 dias desde el acta." },
  { n: "Art. 5", t: "constitucion", h: "Objecion del Ministerio", p: "El Ministerio no puede negar el registro, pero puede objetar dentro de 90 dias.", legal: "Si hay observaciones, la asociacion tiene 60 dias para subsanar. Si no lo hace, se cancela la personalidad juridica y puede reclamarse judicialmente." },
  { n: "Art. 6", t: "constitucion", h: "Registro y reformas", p: "El registro anota constitucion, directorios, reformas, disolucion y cancelacion.", legal: "Las reformas estatutarias deben registrarse en el plazo del articulo 4, aplicando las reglas de objecion del articulo 5 cuando corresponda." },
  { n: "Art. 7", t: "constitucion", h: "Contenido minimo de estatutos", p: "Deben regular nombre, domicilio, fines, socios, organos y destino de bienes.", legal: "La asociacion se rige por la ley, el reglamento y sus estatutos." },
  { n: "Art. 8", t: "constitucion", h: "Nombre de la asociacion", p: "Debe aludir a su naturaleza y no puede inducir confusion ni tener connotacion politica.", legal: "No puede llevar nombres de personas, copiar denominaciones regionales existentes, usar 'unica' o equivalentes, ni tener connotacion politica." },
  { n: "Art. 9", t: "gobierno", h: "Administracion y representacion", p: "La administra un directorio; su presidente representa judicial y extrajudicialmente.", legal: "Los estatutos pueden contemplar otros organos de administracion." },
  { n: "Art. 10", t: "gobierno", h: "Requisitos para ser director", p: "Regula nacionalidad o residencia, mayoria de edad, alfabetizacion e inhabilidades.", legal: "Exige ser mayor de 18 anos, saber leer y escribir, no haber sido condenado por crimen o simple delito y no estar afecto a inhabilidades legales." },
  { n: "Art. 11", t: "patrimonio", h: "Patrimonio y excedentes", p: "El patrimonio incluye cuotas, donaciones, servicios, venta de activos y multas.", legal: "Las rentas y excedentes pertenecen a la asociacion y no pueden distribuirse a afiliados, ni siquiera al disolverse." },
  { n: "Art. 12", t: "patrimonio", h: "Cotizaciones y cuotas extraordinarias", p: "La cotizacion obliga a los afiliados segun estatutos; las cuotas extraordinarias requieren aprobacion especial.", legal: "Las cuotas extraordinarias financian proyectos o actividades determinadas y se aprueban por voto secreto de la mayoria absoluta de afiliados." },
  { n: "Art. 13", t: "gobierno", h: "Asambleas", p: "Las asambleas ordinarias o extraordinarias tratan materias de la entidad.", legal: "Pueden efectuarse en cualquier sede gremial y deben tratar asuntos concernientes a la asociacion." },
  { n: "Art. 14", t: "gobierno", h: "Responsabilidad de directores", p: "Los directores responden solidariamente y hasta culpa leve por administrar el patrimonio.", legal: "Un director puede dejar constancia de su oposicion en acta para eximirse de responsabilidad por un acto o acuerdo." },
  { n: "Art. 15", t: "patrimonio", h: "Balance anual", p: "Cada ano debe confeccionarse un balance firmado por contador y aprobado por la asamblea.", legal: "La obligacion apunta a control contable interno y fiscalizable." },
  { n: "Art. 16", t: "patrimonio", h: "Libros, revision y transparencia", p: "Libros de actas y contabilidad deben estar al dia y disponibles para afiliados y Economia.", legal: "El Ministerio puede revisar libros, exigir regularizacion, recibir informacion de afiliados cada dos anos y pedir transparencia especial a organizaciones vinculadas a la ley del consumidor." },
  { n: "Art. 17", t: "patrimonio", h: "Uso de fondos", p: "Los fondos sociales solo pueden invertirse en fines estatutarios.", legal: "La regla limita el uso de recursos a los objetivos aprobados por la organizacion." },
  { n: "Art. 18", t: "disolucion", h: "Causales de disolucion", p: "Puede disolverse por acuerdo de afiliados o por cancelacion de personalidad juridica.", legal: "La cancelacion procede por incumplimientos, baja de socios por seis meses, receso superior a un ano, causales estatutarias u otras infracciones graves. La disolucion se publica en el Diario Oficial." },
  { n: "Art. 19", t: "disolucion", h: "Destino del patrimonio", p: "Los bienes se destinan segun estatutos; si no es posible, decide el Presidente de la Republica.", legal: "Los bienes no pueden destinarse a quienes estaban afiliados a la asociacion disuelta." },
  { n: "Art. 20", t: "disolucion", h: "Liquidacion", p: "La resolucion de cancelacion designa liquidadores si no estan previstos.", legal: "Durante la liquidacion la asociacion se reputa existente; la venta de bienes debe hacerse en publica subasta y los documentos deben indicar que esta en liquidacion." },
  { n: "Art. 21", t: "fiscalizacion", h: "Fiscalizacion del Ministerio", p: "Las asociaciones quedan sujetas al Ministerio de Economia.", legal: "Deben entregar los antecedentes que se les soliciten. Para ciertas organizaciones de consumidores, el Ministerio puede requerir informacion financiera adicional." },
  { n: "Art. 22", t: "fiscalizacion", h: "Multas", p: "Las infracciones sin sancion especial se multan y la reiteracion duplica la multa.", legal: "La multa la aplica el Ministerio de Economia, Fomento y Reconstruccion." },
  { n: "Art. 23", t: "fiscalizacion", h: "Reclamo contra multas", p: "Las multas pueden reclamarse ante el tribunal civil competente de la capital regional.", legal: "El reclamo debe interponerse dentro de 15 dias; el tribunal resuelve sin forma de juicio y su decision no admite recurso." },
  { n: "Art. 24", t: "fiscalizacion", h: "Reclamo por cancelacion", p: "La cancelacion de personalidad juridica puede reclamarse por el procedimiento legal indicado.", legal: "La ley remite al tribunal y procedimiento del articulo 38 para este tipo de reclamacion." },
  { n: "Art. 25", t: "final", h: "Derogado", p: "Articulo derogado.", legal: "No contiene regla vigente." },
  { n: "Art. 26", t: "fiscalizacion", h: "Libre competencia", p: "Actos sancionados por el DL 211 agravan la responsabilidad penal de quienes participen.", legal: "La infraccion de libre competencia realizada por la asociacion opera como agravante para los participantes." },
  { n: "Art. 27", t: "fiscalizacion", h: "Uso indebido de calidad gremial", p: "Nadie puede atribuirse calidad de asociacion, federacion, confederacion o dirigente sin cumplir la ley.", legal: "La contravencion se sanciona conforme al articulo 22." },
  { n: "Art. 28", t: "federaciones", h: "Afiliacion a federaciones y confederaciones", p: "Las asociaciones pueden afiliarse segun las reglas siguientes.", legal: "Introduce el regimen de federaciones y confederaciones gremiales." },
  { n: "Art. 29", t: "federaciones", h: "Composicion", p: "Tres o mas asociaciones forman una federacion; dos o mas federaciones forman una confederacion.", legal: "Tambien regula afiliaciones permitidas y prohibe pertenecer a mas de una federacion o confederacion, salvo reglas especiales para federaciones regionales." },
  { n: "Art. 30", t: "federaciones", h: "Rol de las federaciones", p: "Representan a sus afiliados y coordinan acciones vinculadas al objeto gremial.", legal: "Permite que federaciones regionales se afilien a federaciones nacionales bajo condiciones especiales." },
  { n: "Art. 31", t: "federaciones", h: "Rol de las confederaciones", p: "Su finalidad esencial es velar por los intereses generales de los sectores que representan.", legal: "Define la funcion general de las confederaciones." },
  { n: "Art. 32", t: "federaciones", h: "Constitucion, afiliacion y desafiliacion", p: "Requiere mayoria de las asociaciones afiliadas y votacion secreta en cada asociacion.", legal: "El voto de cada asociacion debe decidirse por mayoria absoluta de sus miembros." },
  { n: "Art. 33", t: "federaciones", h: "Derogado", p: "Articulo derogado.", legal: "No contiene regla vigente." },
  { n: "Art. 34", t: "federaciones", h: "Balance de federaciones y confederaciones", p: "Deben confeccionar balance anual firmado por contador.", legal: "Una vez aprobado conforme a estatutos, queda a disposicion del Ministerio de Economia." },
  { n: "Art. 35", t: "federaciones", h: "Normas aplicables", p: "Se aplican las reglas de asociaciones gremiales cuando sean compatibles.", legal: "Regula ademas cuotas ordinarias y extraordinarias de la organizacion beneficiaria." },
  { n: "Art. 36", t: "final", h: "Funcionarios publicos", p: "La ley no se aplica a asociaciones de funcionarios publicos.", legal: "Excluye expresamente ese tipo de organizaciones." },
  { n: "Art. 37", t: "final", h: "Organizaciones de otro estatuto", p: "Economia puede declarar aplicable esta ley a organizaciones con finalidad gremial constituidas bajo otro regimen.", legal: "La organizacion debe adecuar estatutos y cumplir registro, deposito y publicacion dentro de 90 dias." },
  { n: "Art. 38", t: "final", h: "Reclamo contra declaracion", p: "La declaracion del articulo 37 puede reclamarse ante la Corte de Apelaciones.", legal: "El reclamo suspende el plazo de adecuacion y la sentencia es apelable ante la Corte respectiva." },
  { n: "Trans. 1", t: "transitorio", h: "Adecuacion de organizaciones existentes", p: "Organizaciones antiguas debian cumplir la adecuacion antes del 31 de agosto de 1980.", legal: "Si no cumplian, quedaban sujetas a los articulos 37 y 38." },
  { n: "Trans. 2", t: "transitorio", h: "Eleccion de directivas", p: "El DL 349 de 1974 no aplica a estas organizaciones.", legal: "Regula eleccion de directivas y provision de vacantes durante la transicion." },
  { n: "Trans. 3", t: "transitorio", h: "Nombres historicos", p: "Permite conservar nombres existentes agregando la calidad gremial correspondiente.", legal: "No pueden mantenerse expresiones de federacion o confederacion si no corresponden a lo que la ley entiende por tales." },
];
