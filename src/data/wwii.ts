export type Theater = "Europa" | "Pacífico" | "África" | "Global";

export interface TimelineEvent {
  date: string;
  year: number;
  title: string;
  text: string;
  theater: Theater;
}

export const HERO = {
  kicker: "Análisis histórico · Cátedra de Historia Contemporánea",
  title: "La Segunda Guerra Mundial",
  subtitle:
    "1939–1945: la guerra total que destruyó el orden de Versalles, reordenó el planeta y fundó el mundo contemporáneo.",
  intro:
    "Entre 1939 y 1945 la humanidad libró el conflicto más mortífero de su historia. No fue sólo una sucesión de batallas: fue una guerra de aniquilación, de ideologías y de sociedades enteras movilizadas. Como historiador, me interesa menos el inventario de campañas que la lógica que las encadenó: por qué estalló, cómo se globalizó, qué la decidió y, sobre todo, qué mundo dejó en pie.",
};

export const STATS = [
  { value: "70–85 M", label: "Muertos estimados", note: "Militares y civiles, ~3% de la población mundial de 1940" },
  { value: "61", label: "Estados beligerantes", note: "Más de 1.700 millones de personas, el 80% del planeta" },
  { value: "6 M", label: "Judíos asesinados", note: "La Shoá: exterminio industrial y burocrático" },
  { value: "1939–45", label: "Seis años de guerra", note: "Del 1 de septiembre de 1939 al 2 de septiembre de 1945" },
];

export const THESIS = [
  {
    n: "01",
    title: "Una guerra, no dos",
    text: "La Primera y la Segunda Guerra Mundial forman una única crisis europea de treinta años (1914–1945). El armisticio de 1918 no resolvió el problema alemán ni el equilibrio continental: lo aplazó. La Paz de Versalles fue, en palabras del mariscal Foch, «un armisticio de veinte años».",
  },
  {
    n: "02",
    title: "La guerra total",
    text: "La distinción entre frente y retaguardia se disolvió. Los bombardeos estratégicos, el bloqueo naval, la deportación de trabajadores, la economía planificada y el genocidio convirtieron a las poblaciones civiles en objetivo militar y en recurso bélico.",
  },
  {
    n: "03",
    title: "La economía decidió la guerra",
    text: "El Eje ganó las campañas de 1939–1941 y perdió la guerra de producción. La capacidad industrial soviética trasladada al este, los astilleros estadounidenses y el sistema de préstamo y arriendo (Lend-Lease) inclinaron la balanza material de forma irreversible desde 1943.",
  },
  {
    n: "04",
    title: "La posguerra empezó en 1945",
    text: "El conflicto no clausuró la inestabilidad: la desplazó. La alianza antifascista se fracturó en dieciocho meses y el resultado fue un orden bipolar, nuclear e institucionalizado que aún hoy condiciona la política internacional.",
  },
];

export const CAUSES = [
  {
    year: "1919",
    title: "La paz herida de Versalles",
    text: "El «dictado» de Versalles impuso a Alemania la cláusula de culpabilidad, reparaciones de 132.000 millones de marcos oro, pérdidas territoriales (Alsacia-Lorena, el corredor polaco, las colonias) y un ejército limitado a 100.000 hombres. El resentimiento fue el combustible político de la República de Weimar y del nazismo.",
  },
  {
    year: "1929",
    title: "El colapso económico",
    text: "El crac de 1929 destruyó el liberalismo económico y con él la legitimidad de las democracias de entreguerras. Con 6 millones de parados en 1932, Alemania ofreció a los extremos —nacionalsocialismo y comunismo— una mayoría electoral que la República ya no pudo integrar.",
  },
  {
    year: "1922–1940",
    title: "El asalto fascista al Estado liberal",
    text: "La marcha sobre Roma (1922), la toma del poder nazi (30 de enero de 1933) y la Guerra Civil española (1936–1939) ensayaron una nueva forma de Estado: antiparlamentario, territorialmente revisionista y organizado para la movilización permanente.",
  },
  {
    year: "1931–1937",
    title: "La quiebra del sistema de Ginebra",
    text: "La invasión japonesa de Manchuria (1931), la agresión italiana contra Etiopía (1935), la remilitarización de Renania (1936) y la guerra chino-japonesa (desde julio de 1937) demostraron que la Sociedad de Naciones carecía de medios para hacer cumplir sus propias resoluciones.",
  },
  {
    year: "1937–1938",
    title: "La política de apaciguamiento",
    text: "Londres y París, condicionados por el trauma de 1914, la opinión pública pacifista y la debilidad de sus economías, optaron por ceder: el Anschluss (marzo de 1938) y los Acuerdos de Múnich (30 de septiembre de 1938) entregaron Austria y los Sudetes a cambio de una paz que duró seis meses.",
  },
  {
    year: "23 ago 1939",
    title: "El pacto que abrió las compuertas",
    text: "El Pacto Ribbentrop-Mólotov y su protocolo secreto se repartieron Polonia, el Báltico, Finlandia y Besarabia. Hitler quedó libre del fantasma de la guerra en dos frentes; nueve días después, la Wehrmacht cruzó la frontera polaca.",
  },
];

export interface BandoMember {
  name: string;
  role: string;
  leader: string;
  note: string;
  flag: string;
}

export interface Bando {
  id: "eje" | "aliados";
  name: string;
  subtitle: string;
  doctrine: string;
  objectives: string[];
  members: BandoMember[];
}

export const BANDOS: Bando[] = [
  {
    id: "eje",
    name: "El Eje",
    subtitle: 'Roma–Berlín–Tokio · "Pacto Tripartito", 27 de septiembre de 1940',
    doctrine:
      "El Eje fue una coalición revisionista y heterogénea, unida menos por una doctrina común que por el deseo de destruir el orden de Versalles. Su núcleo ideológico fue el «espacio vital» (Lebensraum) nazi, el imperio autárquico japonés de la Esfera de Coprosperidad de la Gran Asia Oriental y el «mare nostrum» fascista. Su debilidad estructural: nunca coordinó estratégicamente sus guerras y nunca resolvió su inferioridad industrial.",
    objectives: [
      "Alemania: hegemonía continental europea y colonización de Europa del Este hasta los Urales.",
      "Japón: hegemonía en Asia-Pacífico y expulsión de las potencias coloniales occidentales.",
      "Italia: control del Mediterráneo y del norte de África (la «Nuovo Impero Romano»).",
      "Objetivo común: desmantelar el sistema de Versalles, el librecambio y el bolchevismo.",
    ],
    members: [
      { name: "Alemania nazi", role: "Potencia motriz", leader: "Adolf Hitler", note: "El Tercer Reich aportó el 70% del esfuerzo militar del Eje en Europa y el aparato de exterminio.", flag: "de" },
      { name: "Japón imperial", role: "Potencia del Pacífico", leader: "Hirohito / Tōjō", note: "En guerra desde 1937 en China; atacó Pearl Harbor el 7 de diciembre de 1941.", flag: "jp" },
      { name: "Italia fascista", role: "Socio europeo", leader: "Benito Mussolini", note: "Entró en guerra en junio de 1940; capituló en septiembre de 1943 y se convirtió en campo de batalla.", flag: "it" },
      { name: "Hungría, Rumanía, Bulgaria, Eslovaquia, Croacia", role: "Satélites", leader: "—", note: "Regímenes autoritarios atraídos por la revisión territorial; aportaron tropas y materias primas (petróleo de Ploiești).", flag: "sat" },
      { name: "Finlandia, Tailandia, Irak (1941)", role: "Co-beligerantes coyunturales", leader: "—", note: "Aliados del Eje por guerras propias y no por el Pacto Tripartito.", flag: "cob" },
    ],
  },
  {
    id: "aliados",
    name: "Los Aliados",
    subtitle: 'La "Gran Alianza" · Carta del Atlántico, 14 de agosto de 1941',
    doctrine:
      "Los Aliados fueron una coalición ideológicamente improbable: democracias liberales, un Estado socialista y regímenes coloniales unidos por un objetivo negativo —la derrota total e incondicional del Eje— y por la Carta del Atlántico: ninguna paz por separado, autodeterminación, libre comercio y seguridad colectiva. Su fortaleza fue la coordinación (Combine Chiefs of Staff, conferencias de Casablanca, Teherán, Yalta y Potsdam) y su base industrial.",
    objectives: [
      "Reino Unido: preservar la independencia europea y el equilibrio continental; mantener el Imperio.",
      "URSS: destruir la Wehrmacht y garantizarse una zona de seguridad en Europa oriental tras dos invasiones en treinta años.",
      "Estados Unidos: derrotar a Alemania primero («Europe first») y construir un orden internacional abierto bajo hegemonía propia.",
      "China (desde 1937): expulsar al invasor japonés y recuperar Manchuria y Taiwán.",
    ],
    members: [
      { name: "Reino Unido e Imperio", role: "Nunca vencida", leader: "Winston Churchill", note: "Sola entre junio de 1940 y junio de 1941; sostuvo el Atlántico, el Mediterráneo y la guerra aérea.", flag: "gb" },
      { name: "Unión Soviética", role: "Frente principal", leader: "Iósif Stalin", note: "Absorbió entre el 70 y el 75% de las bajas alemanas; de Stalingrado a Berlín.", flag: "su" },
      { name: "Estados Unidos", role: "Arsenal de la democracia", leader: "Franklin D. Roosevelt / H. Truman", note: "Produjo 300.000 aviones y 86.000 buques; financió a sus aliados con 50.000 M$ de Lend-Lease.", flag: "us" },
      { name: "Francia Libre y la Resistencia", role: "Continuidad republicana", leader: "Charles de Gaulle", note: "Tras el armisticio de 1940, De Gaulle sostuvo la ficción jurídica de una Francia nunca rendida.", flag: "fr" },
      { name: "China nacionalista y comunista", role: "Frente olvidado", leader: "Chiang Kai-shek / Mao Zedong", note: "Inmovilizó a más de un millón de soldados japoneses entre 1937 y 1945.", flag: "cn" },
      { name: "Polonia, Yugoslavia, Grecia, Países Bajos, Canadá, Australia, India, Brasil, México...", role: "Coalición global", leader: "—", note: "Más de veinte gobiernos en el exilio; Brasil y México aportaron fuerzas expedicionarias.", flag: "all" },
    ],
  },
];

export interface Phase {
  id: string;
  years: string;
  title: string;
  headline: string;
  text: string;
  events: { date: string; title: string; text: string }[];
}

export const PHASES: Phase[] = [
  {
    id: "f1",
    years: "1939 – 1940",
    title: "Fase I · La guerra relámpago",
    headline: "El Eje dicta el ritmo: la Blitzkrieg y el colapso de Europa occidental",
    text: "Alemania explotó su superioridad operativa —la combinación de carros de combate, aviación en apoyo y radio— para derrotar sucesivamente a cada enemigo antes de que pudiera coordinarse. En diez meses, Polonia, Dinamarca, Noruega, los Países Bajos, Bélgica, Luxemburgo y Francia fueron ocupados o neutralizados. La derrota francesa de junio de 1940, en apenas seis semanas, fue el mayor trauma estratégico del siglo: nadie esperaba que la primera potencia militar europea se derrumbase tan rápido. Gran Bretaña, evacuada en Dunkerque (338.000 hombres) y sola bajo el bombardeo aéreo, resistió en la Batalla de Inglaterra: por primera vez, Hitler fue detenido.",
    events: [
      { date: "1 sep 1939", title: "Invasión de Polonia", text: "Blitzkrieg desde tres direcciones; la URSS ocupa el este el 17 de septiembre. Varsovia capitula el 28 de septiembre." },
      { date: "1939–40", title: "Guerra de Invierno", text: "Finlandia resiste a la URSS; el Ejército Rojo evidencia las secuelas de las purgas y gana territorio a costa de 127.000 muertos." },
      { date: "9 abr 1940", title: "Noruega y Dinamarca", text: "Operación Weserübung: la Kriegsmarine asegura el mineral de hierro sueco y las bases atlánticas." },
      { date: "10 may – 22 jun 1940", title: "La caída de Francia", text: "La ofensiva por las Ardenas desborda la línea Maginot; Dunkerque (26 may–4 jun) y armisticio de Compiègne el 22 de junio." },
      { date: "10 jul – 31 oct 1940", title: "Batalla de Inglaterra", text: "La RAF derrota a la Luftwaffe en el primer gran combate aéreo de la historia; se aplaza la Operación León Marino." },
    ],
  },
  {
    id: "f2",
    years: "1941",
    title: "Fase II · La globalización",
    headline: "Barbarroja y Pearl Harbor: el conflicto se hace mundial",
    text: "1941 es el año decisivo porque convierte una guerra europea en una guerra mundial. El 22 de junio, 3,8 millones de soldados del Eje invaden la URSS en un frente de 2.900 km: es la mayor operación militar de la historia. En diciembre, dos acontecimientos se encadenan: la contraofensiva soviética ante Moscú demuestra que la Blitzkrieg ha fracasado en la profundidad rusa, y el ataque japonés a Pearl Harbor arrastra a Estados Unidos al conflicto en ambos océanos. Con la entrada de Washington y la Declaración de las Naciones Unidas (1 de enero de 1942), la coalición aliada suma una capacidad industrial que el Eje jamás podría igualar. Hitler había ganado todas las campañas y perdido la guerra.",
    events: [
      { date: "feb–may 1941", title: "África y los Balcanes", text: "Rommel desembarca en Trípoli; Alemania ocupa Yugoslavia y Grecia y toma Creta, retrasando Barbarroja." },
      { date: "22 jun 1941", title: "Operación Barbarroja", text: "La mayor invasión terrestre de la historia; 4 millones de soldados del Eje hacia Leningrado, Moscú y el Cáucaso." },
      { date: "dic 1941", title: "Moscú resiste", text: "Zhúkov lanza la contraofensiva invernal: primer fracaso estratégico alemán y hundimiento del mito de invencibilidad." },
      { date: "7 dic 1941", title: "Pearl Harbor", text: "La flota japonesa ataca la base estadounidense; Alemania e Italia declaran la guerra a EE.UU. el 11 de diciembre." },
      { date: "ago–dic 1941", title: "Carta del Atlántico y Lend-Lease", text: "Roosevelt y Churchill fijan los principios de la posguerra; Estados Unidos se convierte en el «arsenal de la democracia»." },
    ],
  },
  {
    id: "f3",
    years: "1942 – 1943",
    title: "Fase III · El punto de inflexión",
    headline: "Stalingrado, Midway, El Alamein: la iniciativa cambia de bando",
    text: "En dieciocho meses la guerra cambia de signo. Tres batallas simultáneas y lejanas entre sí marcan el giro: Midway (junio de 1942) cuesta a Japón cuatro portaaviones y la iniciativa naval del Pacífico; El Alamein (octubre-noviembre de 1942) cierra el canal de Suez y el petróleo de Oriente Medio; Stalingrado (agosto de 1942 – febrero de 1943) destruye el 6.º Ejército alemán y 800.000 hombres del Eje. A partir de Kursk (julio de 1943), la mayor batalla de carros de la historia, la Wehrmacht ya nunca recuperó la iniciativa estratégica en el Este. En paralelo, la guerra submarina del Atlántico es ganada mediante convoyes, radar, Ultra y los portaaviones de escolta; y la conferencia de Casablanca impone la fórmula de la «rendición incondicional».",
    events: [
      { date: "4–7 jun 1942", title: "Midway", text: "La inteligencia estadounidense rompe el código japonés; Japón pierde la mitad de sus portaaviones de primera línea." },
      { date: "ago 1942 – feb 1943", title: "Stalingrado", text: "Operación Urano: cerco y aniquilación del 6.º Ejército de Paulus. Giro psicológico y estratégico de la guerra." },
      { date: "oct–nov 1942", title: "El Alamein y Torch", text: "Montgomery frena al Afrika Korps; los desembarcos aliados en Marruecos y Argelia atrapan al Eje en Túnez (mayo 1943)." },
      { date: "jul–ago 1943", title: "Kursk", text: "La última gran ofensiva alemana en el Este fracasa; la URSS toma definitivamente la iniciativa hasta Berlín." },
      { date: "1943", title: "Conferencias y bombardeo", text: "Casablanca, Teherán (noviembre, primer encuentro Roosevelt–Churchill–Stalin) y la ofensiva aérea combinada sobre Alemania." },
    ],
  },
  {
    id: "f4",
    years: "1944 – 1945",
    title: "Fase IV · El cerco y el final",
    headline: "De Normandía a Berlín, y de Leyte a Hiroshima",
    text: "1944 es el año del cerco: la Operación Overlord abre el «segundo frente» tantas veces prometido a Stalin, mientras la Operación Bagration destruye al Grupo de Ejércitos Centro alemán (28 divisiones aniquiladas, la mayor derrota de la Wehrmacht). En el Pacífico, el salto de islas y la batalla del golfo de Leyte (octubre de 1944) destruyen la flota japonesa. En 1945, los tres ejércitos aliados convergen sobre un Reich reducido a sus fronteras de 1937: el 8 de mayo Alemania firma la rendición; el 2 de septiembre, tras Hiroshima (6 de agosto), Nagasaki (9 de agosto) y la declaración de guerra soviética a Japón, el Imperio japonés capitula en la bahía de Tokio. La era atómica había comenzado.",
    events: [
      { date: "6 jun 1944", title: "Operación Overlord", text: "156.000 hombres desembarcan en Normandía; en agosto se libera París y el frente occidental se establece en el Rin." },
      { date: "jun–ago 1944", title: "Operación Bagration", text: "La URSS avanza 600 km y aniquila al Grupo de Ejércitos Centro; el Ejército Rojo entra en Polonia y los Balcanes." },
      { date: "oct 1944", title: "Golfo de Leyte", text: "La mayor batalla naval de la historia: la flota imperial japonesa deja de existir como fuerza operativa." },
      { date: "feb 1945", title: "Yalta", text: "Roosevelt, Churchill y Stalin reparten las zonas de ocupación, fijan la ONU y acuerdan la entrada soviética contra Japón." },
      { date: "16 abr – 2 may 1945", title: "Berlín", text: "2,5 millones de soldados soviéticos toman la capital; Hitler se suicida el 30 de abril; rendición alemana el 8 de mayo." },
      { date: "6 y 9 ago 1945", title: "Hiroshima y Nagasaki", text: "Dos bombas atómicas, 200.000 muertos inmediatos; el 2 de septiembre Japón firma su rendición incondicional." },
    ],
  },
];

export const TIMELINE: TimelineEvent[] = [
  { year: 1919, date: "28 jun 1919", title: "Tratado de Versalles", theater: "Global", text: "Paz punitiva con Alemania; nace la Sociedad de Naciones sin Estados Unidos ni, hasta 1934, la URSS." },
  { year: 1929, date: "oct 1929", title: "Crac de Wall Street", theater: "Global", text: "La Gran Depresión deslegitima a las democracias de mercado y abre espacio a los totalitarismos." },
  { year: 1933, date: "30 ene 1933", title: "Hitler, canciller", theater: "Europa", text: "En dieciocho meses el NSDAP destruye el Estado de derecho; comienza el rearme clandestino." },
  { year: 1935, date: "mar 1935", title: "Rearme alemán", theater: "Europa", text: "Servicio militar obligatorio y Luftwaffe: ruptura abierta de Versalles; plebiscito del Sarre." },
  { year: 1936, date: "mar 1936", title: "Remilitarización de Renania", theater: "Europa", text: "Apuesta que París y Londres no contestan; el equilibrio continental se inclina hacia Berlín." },
  { year: 1937, date: "jul 1937", title: "Guerra chino-japonesa", theater: "Pacífico", text: "Incidente del puente de Marco Polo; invasión de China y masacre de Nankín (más de 200.000 víctimas)." },
  { year: 1938, date: "12 mar 1938", title: "Anschluss", theater: "Europa", text: "Austria se incorpora al Reich; en septiembre, Múnich entrega los Sudetes checoslovacos." },
  { year: 1939, date: "1 sep 1939", title: "Invasión de Polonia", theater: "Europa", text: "Comienza la guerra en Europa; Reino Unido y Francia declaran la guerra a Alemania el 3 de septiembre." },
  { year: 1940, date: "22 jun 1940", title: "Armisticio francés", theater: "Europa", text: "Francia se rinde en Compiègne; se instaura el régimen de Vichy y la Francia Libre de De Gaulle." },
  { year: 1940, date: "27 sep 1940", title: "Pacto Tripartito", theater: "Global", text: "Alemania, Italia y Japón firman la alianza que define formalmente al Eje." },
  { year: 1941, date: "22 jun 1941", title: "Operación Barbarroja", theater: "Europa", text: "Alemania invade la URSS y abre el frente más sangriento de la historia: 27 millones de muertos soviéticos." },
  { year: 1941, date: "7 dic 1941", title: "Pearl Harbor", theater: "Pacífico", text: "Japón ataca Hawái; Estados Unidos entra en la guerra y el conflicto se hace verdaderamente mundial." },
  { year: 1942, date: "20 ene 1942", title: "Conferencia de Wannsee", theater: "Europa", text: "La burocracia nazi coordina la «Solución Final»: el exterminio sistemático de los judíos europeos." },
  { year: 1942, date: "4–7 jun 1942", title: "Midway", theater: "Pacífico", text: "Viraje naval: Japón pierde cuatro portaaviones y cede la iniciativa en el Pacífico." },
  { year: 1942, date: "23 oct 1942", title: "El Alamein", theater: "África", text: "El VIII Ejército británico rompe las líneas del Eje en Egipto; Churchill: «no es el final, ni el principio del final, pero sí el final del principio»." },
  { year: 1943, date: "2 feb 1943", title: "Stalingrado", theater: "Europa", text: "Se rinden los restos del 6.º Ejército; Alemania decreta la movilización total (Guerra Total, discurso de Goebbels)." },
  { year: 1943, date: "28 nov–1 dic 1943", title: "Conferencia de Teherán", theater: "Global", text: "Primera cumbre de la Gran Alianza: se acuerda abrir el segundo frente en Francia en mayo de 1944." },
  { year: 1944, date: "6 jun 1944", title: "Desembarco de Normandía", theater: "Europa", text: "La Operación Overlord abre el frente occidental; el 25 de agosto, París es liberada." },
  { year: 1944, date: "22 jun 1944", title: "Operación Bagration", theater: "Europa", text: "La mayor derrota alemana: 28 divisiones destruidas, 400.000 bajas en dos meses." },
  { year: 1944, date: "jul 1944", title: "Bretton Woods", theater: "Global", text: "44 países diseñan el sistema monetario de posguerra: FMI, Banco Mundial y patrón dólar-oro." },
  { year: 1945, date: "4–11 feb 1945", title: "Conferencia de Yalta", theater: "Global", text: "Se pactan las zonas de ocupación, las reparaciones, la ONU y la entrada soviética en la guerra del Pacífico." },
  { year: 1945, date: "8 may 1945", title: "Día de la Victoria en Europa", theater: "Europa", text: "Alemania se rinde incondicionalmente en Reims y Karlshorst; el Reich queda bajo ocupación cuatripartita." },
  { year: 1945, date: "6 y 9 ago 1945", title: "Hiroshima y Nagasaki", theater: "Pacífico", text: "Las únicas armas nucleares usadas en guerra; el 15 de agosto Japón anuncia su rendición." },
  { year: 1945, date: "2 sep 1945", title: "Rendición de Japón", theater: "Pacífico", text: "Firma a bordo del USS Missouri: termina la Segunda Guerra Mundial tras 2.194 días." },
  { year: 1945, date: "20 nov 1945", title: "Juicios de Núremberg", theater: "Europa", text: "Primer tribunal penal internacional: nace el concepto jurídico de crimen contra la humanidad." },
  { year: 1945, date: "24 oct 1945", title: "Nace la ONU", theater: "Global", text: "Entra en vigor la Carta de San Francisco con 51 Estados fundadores y un Consejo de Seguridad con derecho de veto." },
  { year: 1947, date: "12 mar 1947", title: "Doctrina Truman", theater: "Global", text: "Estados Unidos asume la «contención» del comunismo; en junio se anuncia el Plan Marshall." },
  { year: 1949, date: "4 abr 1949", title: "OTAN", theater: "Europa", text: "Alianza atlántica de doce miembros; en agosto la URSS prueba su primera bomba atómica y en octubre nace la RDA." },
  { year: 1955, date: "14 may 1955", title: "Pacto de Varsovia", theater: "Europa", text: "La Europa del Este se constituye en bloque militar; la división continental queda institucionalizada." },
];

export interface Consequence {
  icon: string;
  title: string;
  metric: string;
  text: string;
  bullets: string[];
}

export const CONSEQUENCES: Consequence[] = [
  {
    icon: "☠",
    title: "El coste humano",
    metric: "70–85 millones de muertos",
    text: "Nunca un conflicto había causado una mortandad semejante ni una distribución tan desigual del sufrimiento: la mitad de las víctimas fueron civiles. La URSS perdió unos 27 millones de personas, China entre 15 y 20, Alemania entre 7 y 9, Polonia cerca de 6 (el 17% de su población, incluidos 3 millones de judíos polacos). Europa quedó con 40 millones de desplazados, 11 millones de trabajadores forzados y ciudades enteras convertidas en escombros.",
    bullets: ["Europa central: generaciones demográficamente perdidas", "Ciudades arrasadas: Varsovia, Berlín, Stalingrado, Manila", "11 millones de desplazados y refugiados en 1945"],
  },
  {
    icon: "✡",
    title: "La Shoá y el crimen contra la humanidad",
    metric: "6 millones de judíos asesinados",
    text: "El exterminio no fue un subproducto de la guerra, sino uno de sus objetivos programáticos. Auschwitz-Birkenau, Treblinka, Sobibor, Bełżec, Chełmno y Majdanek fueron fábricas de muerte; los Einsatzgruppen fusilaron a 1,5 millones en el Este. Junto a los judíos fueron perseguidos y asesinados gitanos y sinti (hasta 500.000), personas con discapacidad (el programa T-4), prisioneros soviéticos (3,3 millones muertos), resistentes, homosexuales y disidentes políticos. El impacto jurídico e histórico fue fundacional: obligó a acuñar la categoría de genocidio, tipificada en la Convención de 1948.",
    bullets: ["Industrialización de la muerte y burocracia del exterminio", "Genocidio de gitanos y programa de eutanasia T-4", "Núremberg (1945–49) y Tokio (1946–48): responsabilidad penal internacional"],
  },
  {
    icon: "⚖",
    title: "Revolución jurídica y moral",
    metric: "Núremberg · 1948 · Derechos Humanos",
    text: "El juicio a los vencedores sobre los vencidos inauguró el derecho penal internacional: crimen contra la paz, crímenes de guerra y crímenes contra la humanidad. La Declaración Universal de los Derechos Humanos (10 de diciembre de 1948) y la Convención para la Prevención y la Sanción del Delito de Genocidio (9 de diciembre de 1948) trasladaron a los individuos al escenario del derecho internacional, por encima de la soberanía estatal. Fue la respuesta normativa a la barbarie.",
    bullets: ["Principio de obediencia debida rechazado como eximente", "DDHH universales e inalienables", "Nacimiento del derecho de los refugiados y del asilo"],
  },
  {
    icon: "⚒",
    title: "Destrucción y transformación económica",
    metric: "~4 billones USD de coste · 1945",
    text: "Europa perdió cerca de un tercio de su capital físico; el comercio mundial de 1945 era la mitad del de 1929. Pero la guerra también aceleró el Estado del bienestar, la planificación económica, la mecánización del campo y el trabajo femenino industrial (seis millones de mujeres en las fábricas británicas y estadounidenses). El bombardeo sistemático de ciudades y la escasez empujaron a la racionalización: racionamiento, sistemas de cupones, hasta 1948–54 en Gran Bretaña.",
    bullets: ["Europa en ruinas: producción industrial al 40% de 1938", "Plena ocupación y consolidación del Estado social", "EE.UU. emerge con el 50% del PIB mundial y la hegemonía del dólar"],
  },
  {
    icon: "🗺",
    title: "Reordenación territorial",
    metric: "Nuevas fronteras y 11 millones de desplazados",
    text: "Alemania y Austria fueron divididas en cuatro zonas de ocupación (luego RFA y RDA); la URSS absorbía los países bálticos, parte de Prusia oriental, Besarabia y la Rutenia subcarpática; Polonia se desplazó 200 km hacia el oeste hasta la línea Oder-Neisse; Japón perdió su imperio y quedó bajo ocupación estadounidense (1945–52). En total, unos 11 millones de alemanes fueron expulsados de Europa oriental y decenas de millones de personas fueron reasentadas en un proceso de homogeneización étnica sin precedentes.",
    bullets: ["Línea Oder-Neisse y desplazamiento de Polonia", "Ocupación aliada de Japón y nueva Constitución de 1947", "Transferencias de población en cadena por toda Europa central"],
  },
  {
    icon: "☢",
    title: "La era nuclear",
    metric: "2 bombas · 200.000 muertos",
    text: "Hiroshima y Nagasaki demostraron que el ser humano podía destruir su propia especie. La disuasión nuclear se convirtió en el eje de las relaciones internacionales: la guerra total entre grandes potencias dejó de ser racional. El monopolio atómico estadounidense duró sólo cuatro años (RDS-1 soviética, 29 de agosto de 1949), iniciando la carrera de armamentos que definió la Guerra Fría.",
    bullets: ["Disuasión y destrucción mutua asegurada (MAD)", "Carrera de armamentos y complejo científico-militar", "Uso civil: reactores, medicina nuclear, «átomos para la paz»"],
  },
];

export interface OrderItem {
  year: string;
  title: string;
  text: string;
  tag: string;
}

export const ORDER: OrderItem[] = [
  {
    year: "1944",
    title: "Bretton Woods: el dólar como eje",
    tag: "Economía",
    text: "44 países acuerdan tipos de cambio fijos anclados al dólar, convertible en oro a 35 $/onza. Nacen el FMI y el BIRD (Banco Mundial); en 1947, el GATT. Fue la respuesta a la autarquía y a las devaluaciones competitivas de los años treinta: un orden económico abierto bajo hegemonía estadounidense.",
  },
  {
    year: "1945",
    title: "La ONU y el Consejo de Seguridad",
    tag: "Instituciones",
    text: "Sustituye a la Sociedad de Naciones con una arquitectura realista: cinco grandes potencias con asiento permanente y derecho de veto (EE.UU., URSS, Reino Unido, Francia, China). Fue diseñada para que las grandes potencias no volvieran a quedar fuera del sistema, como ocurrió con Estados Unidos en 1919.",
  },
  {
    year: "1946",
    title: "El telón de acero",
    tag: "Guerra Fría",
    text: "El discurso de Fulton (Churchill, marzo de 1946) y el telegrama largo de Kennan (febrero) formularon la lógica de la contención. La desconfianza por las reparaciones, Polonia y el Irán de 1946 rompió la Gran Alianza en dieciocho meses: dos proyectos de orden mundial irreconciliables.",
  },
  {
    year: "1947",
    title: "Doctrina Truman y Plan Marshall",
    tag: "Guerra Fría",
    text: "Estados Unidos asume la contención global: 400 millones de dólares para Grecia y Turquía y, desde junio de 1947, 13.000 millones para la reconstrucción europea. El Plan Marshall estabilizó las democracias occidentales, integró a Alemania occidental en la economía de mercado y consolidó el mercado europeo; Moscú lo rechazó y obligó a sus satélites a hacer lo mismo.",
  },
  {
    year: "1948–49",
    title: "Bloqueo de Berlín, RFA y RDA",
    tag: "Europa dividida",
    text: "El puente aéreo (11 meses, 2,3 millones de toneladas) salvó Berlín Oeste y aceleró la partición: República Federal (mayo de 1949) y República Democrática Alemana (octubre). El «milagro económico» occidental y la planificación socialista cristalizaron dos modelos antagónicos.",
  },
  {
    year: "1949",
    title: "OTAN y la bomba soviética",
    tag: "Seguridad",
    text: "La alianza atlántica (abril de 1949) institutionalizó el compromiso estadounidense con Europa: «mantener a los americanos dentro, a los rusos fuera y a los alemanes abajo» (Ismay). En agosto la URSS rompió el monopolio nuclear; en 1955 respondió con el Pacto de Varsovia.",
  },
  {
    year: "1945–1975",
    title: "Descolonización y Tercer Mundo",
    tag: "Sistema internacional",
    text: "La guerra arruinó a las metrópolis y deslegitimó el colonialismo: India y Pakistán (1947), Indonesia (1949), Indochina (1954), el Magreb y, sobre todo, el año de África (1960, diecisiete independencias). De 51 Estados fundadores de la ONU se pasó a más de 140 en 1975. El sistema europeo de Estados dejó paso a un sistema global.",
  },
  {
    year: "1945–1991",
    title: "Bipolaridad y equilibrio del terror",
    tag: "Guerra Fría",
    text: "Dos bloques, dos ideologías mesiánicas y dos carreras de armamentos. La rivalidad se desplazó a la periferia (Corea 1950-53, Vietnam, Afganistán, Cuba 1962) y se estabilizó gracias al arma nuclear: nunca hubo guerra directa entre las superpotencias. El sistema se clausuró en 1989–1991 con la caída del Muro y la disolución de la URSS.",
  },
];

export const CONCLUSION = {
  title: "A modo de conclusión",
  paragraphs: [
    "La Segunda Guerra Mundial fue la consecuencia de una paz mal resuelta y el parteaguas del siglo XX. Su desarrollo respondió a una lógica clara: el Eje apostó por victorias rápidas que no podía convertir en paz duradera, mientras los Aliados apostaron por una guerra de desgaste que su demografía, su industria y sus imperios coloniales les permitían sostener. Cuando la Unión Soviética detuvo la Blitzkrieg en las afueras de Moscú y Estados Unidos movilizó su economía, el resultado se volvió una cuestión de tiempo y de precio humano.",
    "Las consecuencias no fueron sólo las ruinas. Fue la guerra la que fabricó el mundo que habitamos: las Naciones Unidas, el sistema financiero de Bretton Woods, la hegemonía del dólar, los derechos humanos como lenguaje moral universal, el Estado del bienestar, la descolonización y, también, la amenaza nuclear. La Europa de 1945 dejó de ser el centro del sistema internacional para convertirse en el objeto de la rivalidad de dos superpotencias extraeuropeas.",
    "Como historiador, mi conclusión es deliberadamente incómoda: la victoria aliada no restauró un orden anterior, sino que lo sustituyó por otro más estable en sus instituciones y más frágil en su equilibrio estratégico. Y la lección que la guerra deja escrita no es que el mal fuese excepcional, sino que el mal se volvió administrativo, industrial y cotidiano. Entenderlo no es un ejercicio de memoria: es la condición mínima para que no se repita.",
  ],
  quote:
    "Toda guerra termina con un acto político. La Segunda Guerra Mundial terminó con dos: la rendición incondicional del Eje y la partición de Europa.",
};

export const BIBLIO = [
  "Ian Kershaw, «The End: Hitler's Germany 1944–45» y «Hell and Fury: Europe 1914–1949».",
  "Tony Judt, «Postguerra: una historia de Europa desde 1945» (2005).",
  "Eric Hobsbawm, «Historia del siglo XX» (1994).",
  "Richard Overy, «Why the Allies Won» (1995) y «The Bombing War» (2013).",
  "Antony Beevor, «Stalingrado» (1998) y «La Segunda Guerra Mundial» (2012).",
  "John Keegan, «The Second World War» (1989).",
  "Mark Mazower, «Dark Continent: Europe's Twentieth Century» (1998).",
  "United States Holocaust Memorial Museum — Holocaust Encyclopedia.",
];
