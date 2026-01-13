import SessionCard from "./SessionCard";

const Day2Agenda = () => {
  return (
    <div className="space-y-6">
      <SessionCard
        time="09:00"
        title="Accueil & Enregistrement"
        description="Accueil des participants pour la deuxième journée du forum."
      />

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
        axes={[
          "Impact de la fragmentation géoéconomique sur le commerce africain",
          "Diversification des partenariats économiques et nouvelles alliances",
          "Sécurisation des chaînes d'approvisionnement et souveraineté industrielle",
          "Risques géopolitiques et stabilité des investissements",
          "Rôle de l'intégration régionale face aux chocs externes",
        ]}
        keynote={{
          name: "Expert en géopolitique économique",
          role: "Institution de recherche internationale",
        }}
        speakers={[
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
        axes={[
          "Gouvernance d'entreprise et pratiques éthiques",
          "Inclusion économique des femmes et des jeunes",
          "Lutte contre la corruption et transparence",
          "Responsabilité sociale des entreprises (RSE)",
          "Dialogue public-privé et participation citoyenne",
        ]}
        keynote={{
          name: "Expert en gouvernance",
          role: "Organisation internationale",
        }}
        speakers={[
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
        axes={[
          "Synthèse des principales conclusions par thématique",
          "Présentation des recommandations stratégiques",
          "Annonce des engagements des partenaires",
          "Feuille de route pour le suivi des initiatives",
          "Perspectives pour les prochaines éditions du forum",
        ]}
        speakers={[
          { name: "Rapporteurs des sessions", role: "Synthèse thématique" },
          { name: "Représentants des partenaires", role: "Engagements et perspectives" },
        ]}
      />

      <SessionCard
        time="15:30"
        title="Cérémonie de clôture"
        description="Cérémonie officielle de clôture du Salma Dialogue Business Forum avec la signature des protocoles d'accord (MoU) et les allocutions finales des organisateurs et partenaires."
        axes={[
          "Signature des MoU entre partenaires",
          "Allocutions de clôture",
        ]}
        speakers={[
          { name: "Amina Magouri", role: "Présidente de Salma Dialogue – Allocution de clôture" },
          { name: "Adama Lam", role: "Président de la CNES – Allocution de clôture" },
          { name: "Général Birame Diop", role: "Clôture officielle du Forum" },
        ]}
      />

      <div className="mt-12 p-6 bg-secondary rounded-lg">
        <h3 className="text-lg font-bold text-foreground mb-4">Informations complémentaires</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Rapporteuse :</span> Sirine Hannachi, Fellow SALMA Dialogue
          </p>
          <p>
            <span className="font-semibold text-foreground">Langues de travail :</span> Traduction simultanée Français / Anglais
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day2Agenda;
