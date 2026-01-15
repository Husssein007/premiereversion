import SessionCard from "./SessionCard";

const Day1Agenda = () => {
  return (
    <div className="space-y-6">
      <SessionCard
        time="09:00"
        title="Discours d'ouverture"
        speakers={[
          { name: "Amina Magouri", role: "Présidente de Salma Dialogue" },
          { name: "Adama Lam", role: "Président de la CNES" },
          { name: "Katja Roeckel", role: "Directrice Résidente de la GIZ au Sénégal" },
          { name: "Jonathan Nowak", role: "Représentant Résident de la KAS Sénégal" },
          { name: "Représentant de l'Ambassade d'Allemagne au Sénégal", role: "" },
          { name: "Rachid Saidani", role: "Ambassadeur de Tunisie au Sénégal" },
          { name: "Fatma Thabet Chiboub", role: "Ministre de l'Industrie, de l'Énergie et des Mines de Tunisie (Tbc)" },
        ]}
      />

      <SessionCard
        time="09:35"
        title="Ouverture officielle & Présentation de la politique industrielle et commerciale du Sénégal"
        speakers={[
          { name: "Dr. Serigne Gueye Diop", role: "Ministre de l'Industrie et du Commerce du Sénégal" },
        ]}
      />

      <SessionCard
        time="10:00"
        title="Photo de groupe"
        isBreak
      />

      <SessionCard
        time="10:15"
        title="Session inaugurale : Cadres politiques incitants et coopération Sud-Sud & Triangulaire : Moteurs de la transformation économique dans les pays émergents"
        description="Cette session de haut niveau mettra en lumière la coopération institutionnelle et économique entre les régions du Sud, mettant l'accent sur l'industrialisation, la résilience économique et la création d'emplois durables."
        speakers={[
          { name: "Fatma Thabet Chiboub", role: "Ministre de l'Industrie, de l'Énergie et des Mines de Tunisie (Tbc) : Pacte de compétitivité et vision Afrique", isKeynote: true },
          { name: "Bakary Séga Bathily", role: "Directeur Général de l'Agence pour la Promotion de l'Investissement et des Grands Travaux du Sénégal, APIX" },
          { name: "Pamela Mbabazi", role: "Présidente exécutive de l'Autorité nationale de planification de l'Ouganda" },
          { name: "Alexander Knipperts", role: "Fédération des Industries Allemandes, BDI" },
        ]}
        moderator={{ name: "Fatou Sagna Sow", role: "Conseiller technique du Ministre de l'Industrie et du Commerce du Sénégal" }}
      />

      <SessionCard
        time="12:30"
        title="Déjeuner"
        isBreak
      />

      <SessionCard
        time="13:30"
        title="Session 1 : Industrialisation durable : Structurer des chaînes de valeur africaines pour une meilleure intégration globale"
        description="Cette session examinera les stratégies de développement industriel à haute valeur ajoutée axées sur le secteur automobile et la mobilité durable, comme vecteurs de transformation économique, de transfert technologique et de création d'emplois qualifiés entre l'Allemagne et l'Afrique."
        speakers={[
          { name: "Sabri Brahem", role: "Responsable RH pour la région Europe et Afrique, Groupe DRÄXLMAIER", isKeynote: true },
          { name: "Akrem Saadaoui", role: "Directeur du Bureau pour l'Afrique du Nord, AAAM" },
          { name: "Marius Ochel", role: "Directeur des partenariats avec les associations internationales pour l'Afrique et l'Inde, Association Allemande de l'Industrie Automobile, VdA" },
          { name: "Allan Muhumuza", role: "Chef du Bureau de la mobilité au Secrétariat à la technologie et à l'innovation de l'Ouganda" },
          { name: "Martin Birkner", role: "Chef de la division NSO Business Strategy, Région Afrique Subsaharienne, Volkswagen Afrique" },
          { name: "Babacar Gueye", role: "Directeur Général de EMG Universal Auto" },
        ]}
        moderator={{ name: "Tourad Aidara", role: "Directeur des Opérations, des appuis techniques et de la Promotion du SRE, Ministère de l'Industrie et du Commerce du Sénégal" }}
      />
    </div>
  );
};

export default Day1Agenda;
