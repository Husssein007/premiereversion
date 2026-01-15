import SessionCard from "./SessionCard";

const Day1Agenda = () => {
  return (
    <div className="space-y-6">
      <SessionCard
        time="09:00"
        title="Discours d'ouverture"
        description="Allocutions de bienvenue par les représentants des organisations partenaires et institutions officielles."
        speakers={[
          { name: "Amina Magouri", role: "Présidente de Salma Dialogue" },
          { name: "Adama Lam", role: "Président de la CNES" },
          { name: "Katja Roeckel", role: "Directrice Résidente de la GIZ au Sénégal" },
          { name: "Jonathan Nowak", role: "Représentant de l'Ambassade d'Allemagne au Sénégal" },
          { name: "Rachid Saidani", role: "Ambassadeur de Tunisie au Sénégal" },
          { name: "Représentant du gouvernement Tunisien", role: "Ministère de l'Industrie" },
        ]}
      />

      <SessionCard
        time="09:35"
        title="Ouverture officielle & Présentation de la politique industrielle et commerciale du Sénégal"
        description="Présentation des orientations stratégiques du Sénégal en matière de politique industrielle et commerciale, avec un focus sur les opportunités d'investissement et de partenariat."
        speakers={[
          { name: "Dr. Serigne Gueye Diop", role: "Ministre de l'Industrie et du Commerce du Sénégal (TBC)" },
        ]}
      />

      <SessionCard
        time="10:00"
        title="Photo de groupe"
        isBreak
      />

      <SessionCard
        time="10:15"
        title="Session inaugurale : Cadres politiques incitants et coopération Sud-Sud & Triangulaire"
        description="Cette session inaugurale explore les cadres politiques favorables à l'investissement et au développement industriel, en mettant l'accent sur le rôle de la coopération Sud-Sud et triangulaire dans l'accélération de la transformation économique du continent africain. Les discussions porteront sur les meilleures pratiques, les modèles de partenariat réussis et les mécanismes de facilitation des échanges entre pays du Sud."
        axes={[
          "Politiques industrielles incitatives et environnement des affaires",
          "Mécanismes de financement innovants pour la coopération Sud-Sud",
          "Transfert de technologies et renforcement des capacités",
          "Rôle des institutions régionales et internationales",
          "Harmonisation des cadres réglementaires",
        ]}
        speakers={[
          { name: "Fethi Sahlaoui", role: "Directeur Général des Industries Manufacturières, Ministère Tunisien de l'Industrie" },
          { name: "Bakary Séga Bathily", role: "Directeur Général APIX Sénégal" },
          { name: "Pamela Mbabazi", role: "Présidente exécutive, Autorité nationale de planification (Ouganda)" },
          { name: "Alexander Knipperts", role: "Fédération des Industries Allemandes (BDI)" },
        ]}
        moderator={{ name: "Fatou Sagna Sow" }}
      />

      <SessionCard
        time="12:30"
        title="Déjeuner"
        isBreak
      />

      <SessionCard
        time="13:30"
        title="Session 1 : Industrialisation durable"
        description="Cette session examine les stratégies et les initiatives visant à promouvoir une industrialisation durable en Afrique. Les discussions porteront sur l'intégration des pratiques environnementales, sociales et de gouvernance (ESG) dans les processus industriels, ainsi que sur les opportunités offertes par l'économie verte et la transition énergétique."
        axes={[
          "Économie circulaire et gestion des ressources",
          "Énergies renouvelables et efficacité énergétique dans l'industrie",
          "Standards ESG et certification pour les entreprises africaines",
          "Financement vert et investissements durables",
          "Innovation technologique pour une production propre",
        ]}
        speakers={[
          { name: "Représentant", role: "Secteur de l'industrie verte" },
          { name: "Expert ESG", role: "Institution financière internationale" },
          { name: "Représentant", role: "Agence de développement durable" },
          { name: "Chef d'entreprise", role: "Industrie manufacturière durable" },
        ]}
        moderator={{ name: "Modérateur à confirmer" }}
      />

      <SessionCard
        time="15:00"
        title="Pause-café"
        isBreak
      />

      <SessionCard
        time="15:30"
        title="Session 2 : Innovation en agribusiness et biotech"
        description="Cette session met en lumière les innovations transformatrices dans les secteurs de l'agribusiness et des biotechnologies en Afrique. Les échanges porteront sur les nouvelles technologies agricoles, la bioéconomie et les opportunités de création de valeur ajoutée dans les chaînes de valeur agricoles."
        axes={[
          "Technologies agricoles de précision et digitalisation",
          "Biotechnologies et amélioration des cultures",
          "Transformation agroalimentaire et création de valeur",
          "Accès aux marchés et normes de qualité internationales",
          "Financement de l'innovation agricole et incubation de startups",
        ]}
        speakers={[
          { name: "Représentant", role: "Secteur agritech" },
          { name: "Chercheur", role: "Institut de recherche biotechnologique" },
          { name: "Entrepreneur", role: "Startup agribusiness" },
          { name: "Représentant", role: "Organisation internationale agricole" },
        ]}
        moderator={{ name: "Modérateur à confirmer" }}
      />

      <SessionCard
        time="17:00"
        title="Clôture de la première journée"
        description="Synthèse des discussions de la journée et perspectives pour la deuxième journée du forum."
      />
    </div>
  );
};

export default Day1Agenda;
