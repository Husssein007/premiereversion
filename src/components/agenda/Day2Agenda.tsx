import SessionCard from "./SessionCard";

const Day2Agenda = () => {
  return (
    <div className="space-y-6">
      <SessionCard
        time="09:20"
        title="Ouverture officielle de la deuxième journée"
        speakers={[
          { name: "Abdourahmane Sarr", role: "Ministre de l'Économie, du Plan et de la Coopération du Sénégal (Tbc)" },
        ]}
      />

      <SessionCard
        time="09:45"
        title="Session 1 : Fragmentation géoéconomique et risques géopolitiques : La Coopération Sud-Sud au service d'investissements durables et d'échanges résilients"
        description="Ce panel analysera les stratégies régionales permettant de préserver et de dynamiser l'investissement et les échanges commerciaux dans un contexte marqué par la montée des guerres commerciales, la fragmentation géoéconomique et l'intensification des incertitudes géopolitiques. Il permettra de dégager des orientations concrètes pour repositionner les économies régionales dans un environnement international en recomposition rapide. Il mettra en lumière le rôle des alliances régionales comme instruments de résilience économique, de sécurisation des chaînes de valeur et de mobilisation de l'investissement productif."
        speakers={[
          { name: "Moncef Soudani", role: "Directeur de la division reverse linkage de la Banque islamique de développement (Tbc)", isKeynote: true },
          { name: "Jouldée Soumare", role: "Directrice du Développement du Secteur Privé, Ministère de l'Economie, du Plan et de la Coopération du Sénégal" },
          { name: "Anja Berretta", role: "Directrice du Programme Régional KAS Economy Africa" },
          { name: "Mohamed Dakhli", role: "Expert-Comptable et Fondateur des Programmes Tunisia's Economy Rebound et Africa's Economy Rebound" },
          { name: "Sami Gargouri", role: "Directeur Général de la Banque Sahélo-Saharienne pour l'Investissement et le Commerce, BSIC Sénégal" },
          { name: "Mourad Ben Hassine", role: "Président Directeur Général du Centre de Promotion des Exportations tunisien, CEPEX" },
        ]}
        moderator={{ name: "Malaika Rousseau", role: "Chargée de mission Partenariats et Financement du développement au Bureau du Coordonnateur résident des Nations Unies au Rwanda" }}
      />

      <SessionCard
        time="11:15"
        title="Pause-café"
        isBreak
      />

      <SessionCard
        time="11:45"
        title="Session 2 : Gouvernance responsable et inclusion : La SSTrC Levier de la responsabilité sociétale et de durabilité"
        description="Cette session explorera la contribution des politiques de RSE et du leadership féminin au renforcement de la coopération économique entre pays du Sud. Elle analysera les leviers permettant d'intégrer la durabilité, la gouvernance éthique et l'égalité des chances au cœur des stratégies industrielles et de développement régional."
        speakers={[
          { name: "Alla Sene Gueye", role: "Président de la Fédération Nationale des Industries du Sénégal", isKeynote: true },
          { name: "Rahma Hizem", role: "Experte RSE, Axes de soutien aux industries" },
          { name: "Alix Arquilliere", role: "Experte en politiques publiques et gouvernance" },
          { name: "Oumaima EL Idrissi", role: "Conseillère communale à Casablanca et membre du cabinet du Maire" },
          { name: "Philippe Barry", role: "Fondateur de l'Initiative RSE Sénégal" },
        ]}
        moderator={{ name: "Sahar Mechri", role: "CEO du Magazine Managers, Femmes Entrepreneurs" }}
      />

      <SessionCard
        time="13:00"
        title="Déjeuner"
        isBreak
      />

      <SessionCard
        time="14:00"
        title="Session de clôture : Capitaliser sur les réussites de la Coopération Sud-Sud & triangulaire pour renforcer la transformation inclusive"
        description="La session de clôture permettra de présenter des exemples concrets et réussis pour la promotion de la transformation industrielle et ce dans le cadre d'une coopération Sud-Sud et Triangulaire durable et efficiente. Cette session servira de plateforme stratégique pour traduire les recommandations du Forum en engagements concrets. Elle visera à renforcer la coordination entre gouvernements, institutions régionales, investisseurs et secteur privé afin de consolider les acquis du SALMA Dialogue Business Forum et d'ouvrir une nouvelle phase de coopération économique fondée sur les résultats. L'objectif principal des échanges étant d'identifier des mécanismes de mises en place capables de transformer les partenariats institutionnels et industriels discutés à Dakar en projets tangibles à fort impact socio-économique, mesurables et pérennes."
        speakers={[
          { name: "Felix Sarrazin", role: "GIZ, Synergies concrètes de la coopération triangulaire : l'exemple du soutien au secteur Automobile" },
          { name: "Jalel Tebib", role: "Directeur Général de la Foreign Investment Promotion Agency, FIPA-Tunisia" },
          { name: "José Maria Arbilla", role: "Ambassadeur d'Argentine en Tunisie" },
          { name: "Aminou Akadiri", role: "PDG/Directeur exécutif, Fédération des chambres de commerce et d'industrie d'Afrique de l'Ouest (FEWACCI)" },
          { name: "Mhamed Ben Abid", role: "Directeur Général du Suivi et de l'évaluation des réformes du Climat des Affaires, Ministère de l'Économie et de la Planification de Tunisie" },
        ]}
        moderator={{ name: "Winfried Weck", role: "Directeur du Programme Régional KAS PolDiMed" }}
      />

      <SessionCard
        time="15:30"
        title="Cérémonie de clôture"
        description="Signature des MoU et allocutions de clôture."
        speakers={[
          { name: "Amina Magouri", role: "Présidente de SALMA Dialogue" },
          { name: "Adama Lam", role: "Président de la CNES" },
          { name: "Général Birame Diop", role: "Ministre des Forces armées du Sénégal – Clôture officielle et perspectives stratégiques de mise en œuvre" },
        ]}
      />
    </div>
  );
};

export default Day2Agenda;
