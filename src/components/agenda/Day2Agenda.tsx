import SessionCard from "./SessionCard";

const Day2Agenda = () => {
  return (
    <div className="space-y-6">
      <SessionCard
        time="09:20"
        title="Ouverture officielle de la deuxième journée"
        description="Discours d'ouverture de la deuxième journée par le Ministre de l'Économie, du Plan et de la Coopération."
        speakers={[
          { name: "Abdourahmane Sarr", role: "Ministre de l'Économie, du Plan et de la Coopération (TBC)" },
        ]}
      />

      <SessionCard
        time="09:45"
        title="Session 1 : Fragmentation géoéconomique et risques géopolitiques"
        description="Cette session analyse les défis posés par la fragmentation géoéconomique croissante et les risques géopolitiques pour les économies africaines. Les discussions examineront les implications de la reconfiguration des chaînes d'approvisionnement mondiales, les tensions commerciales internationales et les stratégies de résilience pour les entreprises et les États africains."
        speakers={[
          { name: "Expert en géopolitique économique", role: "Institution de recherche internationale" },
          { name: "Analyste", role: "Think tank géopolitique" },
          { name: "Représentant", role: "Organisation régionale africaine" },
          { name: "Chef d'entreprise", role: "Multinationale opérant en Afrique" },
          { name: "Économiste", role: "Banque de développement" },
        ]}
        moderator={{ name: "Modératrice à confirmer" }}
      />

      <SessionCard
        time="11:15"
        title="Pause-café"
        isBreak
      />

      <SessionCard
        time="11:45"
        title="Session 2 : Gouvernance responsable et inclusion"
        description="Cette session explore les enjeux de la gouvernance responsable et de l'inclusion dans le développement économique africain. Les discussions porteront sur l'importance de la transparence, de la redevabilité et de la participation inclusive pour assurer un développement durable et équitable."
        speakers={[
          { name: "Expert en gouvernance", role: "Organisation internationale" },
          { name: "Représentante", role: "Organisation de promotion du genre" },
          { name: "Représentant", role: "Institution de lutte anti-corruption" },
          { name: "Chef d'entreprise", role: "Entreprise modèle en RSE" },
          { name: "Représentant", role: "Organisation de la société civile" },
        ]}
        moderator={{ name: "Modérateur/trice à confirmer" }}
      />

      <SessionCard
        time="13:00"
        title="Déjeuner"
        isBreak
      />

      <SessionCard
        time="14:00"
        title="Session de clôture"
        description="Cette session de clôture synthétise les principales conclusions et recommandations issues des deux journées de discussions. Elle vise à identifier les actions concrètes et les engagements des différentes parties prenantes pour renforcer la coopération Sud-Sud et triangulaire, promouvoir l'industrialisation durable et favoriser un développement économique inclusif en Afrique."
        speakers={[
          { name: "Rapporteurs des sessions", role: "Synthèse thématique" },
          { name: "Représentants des partenaires", role: "Engagements et perspectives" },
        ]}
      />

      <SessionCard
        time="15:30"
        title="Cérémonie de clôture"
        description="Cérémonie officielle de clôture du Salma Dialogue Business Forum avec la signature des protocoles d'accord (MoU) et les allocutions finales des organisateurs et partenaires."
        speakers={[
          { name: "Amina Magouri", role: "Présidente de Salma Dialogue – Allocution de clôture" },
          { name: "Adama Lam", role: "Président de la CNES – Allocution de clôture" },
          { name: "Général Birame Diop", role: "Clôture officielle du Forum" },
        ]}
      />
    </div>
  );
};

export default Day2Agenda;
